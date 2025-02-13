import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import "./App.css";
import { useRef } from "react";

const debouceFn = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const throttleFn = (fn, delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
const App = () => {
  const [normalState, setNormalState] = useState(0);
  const [debouncedInput, setDebouncedInput] = useState(0);
  const [throttledInput, setThrottledInput] = useState(0);
  const debounceGunClicked = useRef(0);
  const throttleGunClicked = useRef(0);
  const handleChangeDebounce = () => {
    setDebouncedInput(debounceGunClicked.current);
  };
  const handleChangeThrottle = () => {
    setThrottledInput(throttleGunClicked.current);
  };

  const handleDebounceClick = useCallback(
    debouceFn(handleChangeDebounce, 1000),
    []
  );
  const handleThrottleClick = useCallback(
    throttleFn(handleChangeThrottle, 1000),
    []
  );
  const handleNormalClick = () => {
    setNormalState((prev) => prev + 1);
  };
  const handleNoOfTimesDebouceClicked = () => {
    debounceGunClicked.current = debounceGunClicked.current + 1;
  };
  const handleNoOfTimesThrottleClicked = () => {
    throttleGunClicked.current = throttleGunClicked.current + 1;
  };
  // const handleDebounceClick = useMemo(
  //   () => debouceFn(handleChangeDebounce, 500),
  //   []
  // );
  // const handleThrottleClick = useMemo(
  //   () => throttleFn(handleChangeThrottle, 500),
  //   []
  // );
  return (
    <div>
      {/* <input type="text" onChange={handleDebounceClick} />
      <input type="text" onChange={handleThrottleClick} />
      <div>Debounced: {debouncedInput}</div>
      <div>Throttled: {throttledInput}</div> */}

      <div className="container">
        <div className="normal-gun gun" onClick={handleNormalClick}></div>
        <div className="bullet"></div>
        <div className="count">{normalState}</div>
      </div>
      <div className="container">
        <div
          className="debounced-gun gun"
          onClick={() => {
            handleNoOfTimesDebouceClicked();
            handleDebounceClick();
          }}
        ></div>
        <div className="bullet"></div>
        <div className="count">{debouncedInput}</div>
      </div>
      <div className="container">
        <div
          className="throtlled-gun gun"
          onClick={() => {
            handleNoOfTimesThrottleClicked();
            handleThrottleClick();
          }}
        ></div>
        <div className="bullet"></div>
        <div className="count">{throttledInput}</div>
      </div>
    </div>
  );
};

export default App;
