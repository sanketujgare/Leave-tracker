import { leavesdata } from "../../data";

export const fetchdata = (url: string) => {
  const some = url;
  const duration = Math.random() * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(leavesdata); // Resolve the promise with your mock data after the delay
    }, duration);
  });
};
