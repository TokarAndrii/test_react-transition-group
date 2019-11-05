import styled from "styled-components";

const durationTranslate = 800;
const durationOpacity = 300;

export default styled.div`
  /* ${props => console.log("props", props)}; */

  .defaultStyle {
    transition: opacity ${durationOpacity}ms ease-in-out,
      transform ${durationTranslate}ms ease-in-out;
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: 1px solid #d9d9d9;
    margin-top: 12px;
    padding: 15px;
    border-radius: 4px;
  }

  .entering {
    opacity: 0;
  }
  .entered {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .exiting {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
  .exited {
    opacity: 0;
  }
`;
