import Events from "./components/1-event-intro/Events";
import Counter from "./components/2-classComponents/Counter";
import UseStateExample from "./components/3-useStateHook/UseStateExample";




function App() {
  return (
    <div className="App">
     <Events/>
     <Counter count = {10}/>
     <Counter/>
     <UseStateExample/>
        
    </div>
  );
}

export default App;
