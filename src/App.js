import React from 'react';
import logo from './assets/brando.svg';
import './css/App.css';
import {Pane, Button} from "evergreen-ui";
import Seats from "./components/Seats";
import Screen from "./components/Screen";
import Showcase from "./components/Showcase";


function App() {
  return (
    <div className="App">
        <Pane display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} background={"tint2"} width={"100%"} elevation={3}>
            <Pane flex={1} alignItems={"center"} display="flex">
                <img src={logo} className="App-logo" alt="logo" />
            </Pane>
            <Pane alignItems={"end"} display={"flex"}>
                <Button marginRight={"16px"}>pls no</Button>
            </Pane>
        </Pane>
        <Pane
            display={"flex"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Pane
                height={1600}
                width={320}
                display={"block"}
                border={"none"}
            >
                <div className={"container"}>
                    <Showcase />
                    <Screen />
                    <Seats />
                </div>
            </Pane>
        </Pane>
    </div>
  );
}

export default App;
