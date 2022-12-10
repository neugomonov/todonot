import React, { memo } from "react";

const Copyright: React.FC = memo(
  () => (
    <footer className="info">
      <p>
        Created by <a href="https://github.com/neugomonov">me</a> (kinda)
      </p>
      <p>
        Not part of <a href="http://todomvc.com">TodoMVC</a>,{" "}
        <b>never was and never will be</b>
      </p>
    </footer>
  ),
  () => true
);

export default Copyright;
