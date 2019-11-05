import styled from "styled-components";

export default styled.div`
  width: 50%;
  margin-top: 82px;
  text-align: center;
    text-align: center;
  }

  .header,
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .btn {
      margin-bottom: 24px;
  }

  /* .item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  } */

  .item-exit {
    opacity: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 1000ms ease-in;
  }

  .item-enter {
    opacity: 0;
    transform: translateX(-30%);
  }

  .item-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms ease-in-out, transform 1000ms ease-in-out;
  }

  .idInfoHolder {
    width: 320px;
  }

  .id {
    margin-right: 8px;
  }

  .text {
    width: 60%;
  }
`;
