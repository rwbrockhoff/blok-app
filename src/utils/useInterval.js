import React, {useState, useEffect, useRef} from 'react';
import BackgroundTimer from 'react-native-background-timer';

export default function useInterval(callback, playing, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    // Only run if it meets conditions
    if (delay !== null && playing === true) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, playing]);
}
