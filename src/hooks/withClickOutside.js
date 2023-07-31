import React, { useState, useRef, useEffect } from "react";

export default function withClickOutside(WrappedComponent) {
  const Component = (props) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref.current.contains(event.target)) {
          setIsMenuToggled(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <WrappedComponent isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled} ref={ref} props={props} />;
  };

  return Component;
}
