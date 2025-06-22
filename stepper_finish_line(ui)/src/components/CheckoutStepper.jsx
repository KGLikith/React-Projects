
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const CheckoutStepper = () => {
  const data = useSelector((state) => state.checkout.counter);
  const [curStep, setcurStep] = useState(1);
  const [isComp, setisComp] = useState(false);
  const [margin, setmargin] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const ref = useRef([]);

  useEffect(() => {
    setmargin({
      marginLeft: ref.current[0].offsetWidth / 2, // half the width of the component
      marginRight: ref.current[data.length - 1].offsetWidth / 2,
    });
  }, [ref]);

  if (!data.length) {
    return <></>;
  }
  const handlenext = () => {
    setcurStep((prev) => {
      if (prev === data.length) {
        setisComp(true);
        return prev;
      } else {
        return prev + 1;
      }
    });
  };
  const ActiveComp = data[curStep - 1]?.Component;

  const calcProgress = () => {
    return ((curStep - 1) / (data.length - 1)) * 100;
  };

  return (
    <>
      <div className="Stepper Container">
        {data.map((step, index) => {
          return (
            <div
              key={index}
              ref={(el) => {
                ref.current[index] = el;
              }}
              className={`step ${
                curStep > index + 1 || isComp ? "complete" : ""
              } ${curStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {curStep > index + 1 || isComp ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
        <div
          className="progressbar"
          style={{
            width: `calc(100% - ${margin.marginLeft+margin.marginRight}px)`,
            marginLeft:margin.marginLeft,
            marginRight:margin.marginRight
          }}
        >
          <div
            className="progress"
            style={{ width: `${calcProgress()}%` }}
          ></div>
        </div>
      </div>
      <ActiveComp />
      {!isComp && (
        <button className="btn" onClick={handlenext}>
          {curStep === data.length ? "Finished" : "Next"}
        </button>
      )}
    </>
  );
};

export default CheckoutStepper;
