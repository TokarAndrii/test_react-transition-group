import React, { useState } from "react";
import { Button } from "antd";
import { Transition } from "react-transition-group";
import Styles from "./Styles";

const duration = 800;

// this stuff - whithout styled-components
// const defaultStyle = {
//   transition: `opacity 300ms ease-in-out, transform  ${duration}ms ease-in-out`,
//   opacity: 1,
//   transform: `translate3d(-100%, 0, 0)`,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   textTransform: "uppercase",
//   border: "1px solid #d9d9d9",
//   marginTop: "12px",
//   padding: "15px",
//   borderRadius: "4px"
// };
// const transitionStyles = {
//   entering: { opacity: 0 },
//   entered: { opacity: 1, transform: `translate3d(0, 0, 0)` },
//   exiting: { opacity: 1, transform: `translate3d(-100%, 0, 0)` },
//   exited: { opacity: 0 }
// };

const MyButton = () => {
  const [showCard, toggleShowCard] = useState(false);

  const handleToggle = () => toggleShowCard(!showCard);

  return (
    <>
      <Button type="default" onClick={handleToggle}>
        click to appear div
      </Button>
      <Transition in={showCard} mountOnEnter unmountOnExit timeout={duration}>
        {state => (
          <>
            <span>STATE: {state}</span>
            <Styles state={state}>
              <div
                className={["defaultStyle", state].join(" ")}
                // this stuff - whithout styled-components
                // style={{
                //   ...defaultStyle,
                //   ...transitionStyles[state]
                // }}
              >
                some info at div #1...
              </div>
            </Styles>
          </>
        )}
      </Transition>
    </>
  );
};

export default MyButton;
