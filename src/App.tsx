// import { Component, useEffect, useState } from "react";
// import Dashboard from "./components/Dashboard/Dashboard";
// import { fetchdata } from "./components/mockbackend/backend";
// // import Leave from "./components/Leave/Leave";
// import { leave } from "./components/Leave/Leave.types";
// import Leave from "./components/Leave/Leave";

// const App = () => {
//   const [leaveData, setLeavesData] = useState<leave[]>([]);

//   useEffect(() => {
//     const getLeavesData = async () => {
//       const leaves = await fetchdata("dummy");
//       console.log(leaves);
//       setLeavesData(leaves);
//       console.log(leaves);
//     };

//     getLeavesData();
//   }, []);

//   return <Dashboard leaves={leaveData} setLeaves={setLeavesData} />;
// };
// export default App;

import { Component, useEffect, useState } from "react";
import NewDashboard from "./components/Dashboard/NewDashboard";
import { fetchdata } from "./components/mockbackend/backend";
// import Leave from "./components/Leave/Leave";
import { leave } from "./components/Leave/Leave.types";
import NewLeave from "./components/Leave/Leave";

class App extends Component<{}, { leaveData: leave[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      leaveData: [],
    };
  }

  componentDidMount() {
    this.getLeavesData();
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  setLeaves = (newLeavesData: leave[]) => {
    this.setState({ leaveData: newLeavesData });
    console.log("printed data");
    console.log(this.state.leaveData);
  };

  async getLeavesData() {
    try {
      const leaves = await fetchdata("dummy");

      this.setState({ leaveData: leaves as leave[] });
      console.log(this.state.leaveData);
    } catch (error) {
      console.error("Error fetching leaves data: ", error);
    }
  }

  render() {
    // const { leaveData } = this.state;
    return (
      <NewDashboard leaves={this.state.leaveData} setLeaves={this.setLeaves} />
    );
  }
}

export default App;
