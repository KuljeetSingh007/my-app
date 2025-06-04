import React, { useEffect, useState } from "react";
import "../css/refilbar.css";

const RefillBar = (props) => {
  const [width, setWidth] = useState(0);
  const [loads, setLoads] = useState(0);

  useEffect(() => {
    // Animate the bar fill
    const fillTimer = setTimeout(() => {
      setWidth(props.fill);
    }, 100); // bar starts animating after slight delay

    // Animate the number counting up
    const countInterval = setInterval(() => {
      setLoads((prev) => {
        if (prev < props.fill) {
          return prev + 1;
        } else {
          clearInterval(countInterval);
          return props.fill;
        }
      });
    }, 2000 / props.fill); // timing depends on value, full animation ~1 sec

    return () => {
      clearTimeout(fillTimer);
      clearInterval(countInterval);
    };
  }, [props.fill]);

  return (
    <div>
      <div className="containerStyle">
        <div
          className="fillerStyle"
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <div>{loads}%</div>
    </div>
  );
};

export default RefillBar;
