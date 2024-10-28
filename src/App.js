import { useState } from "react";
import Cancel from "./components/Cancel";
import FirstSection from "./components/FirstSection";

function App() {
  const [num, setNum] = useState(0); // Хуки
  return (
    <div>
      <h1>Hello</h1>
      <Cancel setNum={setNum} />
      <FirstSection num={num} setNum={setNum} />
    </div>
  );
}

export default App;
