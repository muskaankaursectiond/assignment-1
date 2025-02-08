import { useState } from "react";

export default function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage && <p>Hello,my name is Muskaan kaur!</p>}
    </div>
  );
}

