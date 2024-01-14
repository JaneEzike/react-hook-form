import React, { useState, useEffect } from "react";
import moment from "moment";

  
export const getCurrentDate = () => {

const [currentTime, setCurrentTime] = useState(
    moment().format(" MMMM Do YYYY, h:mm:ss a")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format(" [Today's date is : ] MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return currentTime;
};



