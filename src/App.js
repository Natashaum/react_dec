import './App.css';
import SimpsonComponent from "./components/SimpsonComponent";

function App() {

    return (
        <div className="wrap">
            <SimpsonComponent
                itemName={'Bart'}
                picture={'https://upload.wikimedia.org/wikipedia/ru/thumb/2/29/Bart_Simpson.gif/180px-Bart_Simpson.gif'}
            />
            <SimpsonComponent
                itemName={'Lisa'}
                picture={'https://seeklogo.com/images/L/lisa-simpson-skater-logo-1CA73E24A4-seeklogo.com.png'}
            />
            <SimpsonComponent
                itemName={'Maggie'}
                picture={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}
            />
        </div>
    );
}

export default App;
