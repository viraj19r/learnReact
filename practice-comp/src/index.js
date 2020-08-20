import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure you want to see comments ?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 4:00PM" comment="Nice! Keep going on" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="John" timeAgo="Today at 10:00AM" comment="keep doing good work" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Yesterday at 3:00PM" comment="Great work" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
