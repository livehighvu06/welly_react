import "./App.css";
import ConditionalRendering from "./components/ConditionalRendering";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ConditionalRendering />
        <Counter />
      </div>
    </div>
  );
}

export default App;
