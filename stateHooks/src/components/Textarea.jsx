import { useState } from "react";

function Textarea() {
  const [count, setCount] = useState("");
  return (
    <div>
      <textarea
        id="text"
        onChange={() => setCount(document.getElementById("text").value)}
      ></textarea>

      <h1>Texto</h1>
      <p>{count}</p>
    </div>
  );
}
export default Textarea;
