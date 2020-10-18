import React, {Component} from "react";
//import logo from './logo.svg';
//import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

//import JoinRoom from "./StudyRoom.js";
//import RoomsFeed from "./RoomsFeed.js";
import './App.css';



//pages
import MainPage from "./pages"
import NotFoundPage from "./pages/404"
import RoomFeed from "./pages/roomfeed"
//import WhiteBoard from "./pages/whiteboard"
import DrawBoard from "./whiteboard"

class App extends Component {
  render(){
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/roomfeed" component={DrawBoard}/>
        <Route exact path="/whiteboard" component={DrawBoard}/>
        <Route component={NotFoundPage}/>
        
        <Redirect to="/404"/>
      </Switch>
    </Router>);
  }
  
  //const [reload, setReload] = useState(false);

  
  // return (
  //   <div className="App">
  //     <h1 className="study-space">Study Spaces</h1>
      
  //     <text style={{
  //       fontFamily: "Arial",
  //       color: "#F9B88C",
  //     }}>Lets study together!</text>
  //     <div style={{
  //       paddingLeft: "20px",
  //     }}>
  //       <h5 className="room-types" style={{
  //         textAlign: "left",
  //       }}>My Rooms</h5>
  //       <Row style={{
  //         width: "wrap-content",
  //         paddingLeft: "20px",
  //         paddingRight: "20px",
  //       }}>
  //         <Card style={{
  //           width: "200px",
  //           marginTop: "20px",
  //           marginBottom: "20px",
  //           marginLeft: "10px",
  //           marginRight: "10px",
  //           background:"#7a7a78",
  //           }}
  //         >
  //           <Card.Body>
  //             <text style={{
  //               background: "#7a7a78",
  //               color: "#ededed",
  //               fontSize: 28,
  //               marginBottom: "10px",
  //             }}
  //             ><b>CHE 2215</b></text>

  //             <ListGroup className="room-Occup" style = {{
  //               textAlign: "left",
  //               marginTop: "10px",
  //               marginBottom: "20px",
  //             }}>
  //               <ListGroupItem className="list-item">Name1</ListGroupItem>
  //               <ListGroupItem className="list-item">Name2</ListGroupItem>
  //             </ListGroup>
  //             <Button variant="light">Join Room</Button>
  //           </Card.Body>
  //         </Card>
  //       </Row>

  //     </div>
      
      
      
  //     <RoomsFeed reload={false} />
  //   </div>
  // );
}

export default App;
