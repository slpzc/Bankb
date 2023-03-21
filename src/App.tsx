import {
    BrowserRouter,
} from "react-router-dom";
import "./index.css";
import "./App.css"
import AnimatedRoutes from "@components/AnimatedRoutes";

const App = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes/>
        </BrowserRouter>
    );
};

export default App;