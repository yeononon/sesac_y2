import logo from './logo.svg';
import './App.css';
import CounterClass from './CounterClass';
import { Counterfunction } from './Counterfunction';

function App() {
    return (
        <div className="App">
            <CounterClass></CounterClass>
            <hr />
            <Counterfunction></Counterfunction>
        </div>
    );
}

export default App;
