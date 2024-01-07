import { useState } from "react";

const UseModal = () => {
  const [ isVisible, setIsVisible ] = useState(false);

  const showModal = (duration) => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, duration)
  };

  return { isVisible, showModal };
}

export default UseModal;