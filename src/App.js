import "./App.css";
import MethodListContainer from "./Components/Methods/MethodListContainer";
import Menus from "./Components/Menu/Menus";
import { useState } from "react";
import { LinearProgress } from "@mui/material";
import background from "../src/imgs/fondo.jpg";
import GlobalContext from "./Context/GlobalContext";

function App() {
  const [fondo, setFondo] = useState(true);
  {
    setTimeout(() => {
      setFondo(false);
    }, 4000);
  }

  return (
    <div className="App">
      <GlobalContext>
        {fondo === true ? (
          <>
            <img className="bgImgAnimation" src={background} />
            <LinearProgress className="linearBar" color="error" />
      
          </>
        ) : (
          <div>
            <img className="bgImg" src={background} />
            <Menus />
            <MethodListContainer />
          </div>
        )}
      </GlobalContext>
    </div>
  );
}

export default App;
