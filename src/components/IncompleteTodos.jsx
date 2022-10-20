import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li> {todo} </li>
              <button onClick={onClickDelete}>完了</button>
              <button onClick={onClickComplete}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
