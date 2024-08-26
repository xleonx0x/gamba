import { useState } from "react";
import "./App.css";

function App() {
  const [swingSlot, setSwingSlot] = useState(false);

  return (
    <div className="container">
      <div className="machine">
        <div className="slots">
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>
      </div>
    </div>
  );
}

export default App;
