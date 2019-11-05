import React, { useState } from "react";
import StylesList from "./StylesList";
import { List, Button, Empty } from "antd";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import faker from "faker";

const items = [
  { id: uuid(), text: "Buy eggs" },
  { id: uuid(), text: "Pay bills" },
  { id: uuid(), text: "Invite friends over" },
  { id: uuid(), text: "Fix the TV" }
];

const MyList = () => {
  const [list, setList] = useState(items);

  const handleRemoveItem = id =>
    setList(list.filter(currentItem => currentItem.id !== id));

  const handleAddItem = () => {
    const id = uuid();
    const text = faker.lorem.words();
    const item = { id, text };
    console.log(item, " - item");
    setList([item, ...list]);
  };

  return (
    <StylesList>
      <Button type="primary" onClick={handleAddItem} className="btn">
        Add Job
      </Button>
      {list && list.length > 0 && (
        <>
          <h2>List</h2>
          <List
            size="large"
            header={<div className="header">Header</div>}
            footer={<div className="footer">Footer</div>}
            bordered
          >
            <TransitionGroup>
              {list.map(({ id, text }) => {
                return (
                  <CSSTransition
                    mountOnEnter
                    unmountOnExit
                    key={id}
                    timeout={700}
                    classNames="item"
                  >
                    <List.Item>
                      <span className="idInfoHolder">
                        <span className="id">ID:</span>
                        {id}
                      </span>
                      <b className="text">{text}</b>
                      <Button
                        icon="delete"
                        type="danger"
                        onClick={() => handleRemoveItem(id)}
                      />
                    </List.Item>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </List>
        </>
      )}
      {!list ||
        (list.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />)}
    </StylesList>
  );
};

export default MyList;
