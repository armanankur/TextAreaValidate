import React, { useState } from "react";

const TextArea = () => {
  const [limit, setLimit] = useState("");

  const handleChange = (event) => {
    if (event.target.value.length <= 100) {
      setLimit(event.target.value);
    }
  };

  return (
    <div>
      <h3>Feedback</h3>
      <textarea value={limit} onChange={handleChange} />
      <p>{limit.length} / 100 characters</p>
    </div>
  );
};
export default TextArea;
