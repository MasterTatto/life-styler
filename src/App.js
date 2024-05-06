import './App.css';
import Landing from "./page/landing";
import Header from "./components/header";
import Footer from "./components/footer";
import {useMediaQuery} from "@mui/material";

function App() {
    const matches = useMediaQuery('(max-width:768px)');
    return (
        <div className="App">
            <Header/>
            <Landing/>
            <Footer/>
        </div>
    );
}

export default App;
