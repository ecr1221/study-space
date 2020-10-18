import React from "react";
import {Link} from "react-router-dom";

import { Card, ListGroupItem } from 'react-bootstrap';
//import {CardDeck} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
const MainPage = () => {
    return (
        <div className="App">
            <h1 className="study-space">Study Space</h1>
      
                <text style={{
                    fontFamily: "Arial",
                    color: "#F9B88C",
                }}>Lets study together!</text>
                <div style={{
                    paddingLeft: "20px",
                }}>
                    <h5 className="room-types" style={{
                    textAlign: "left",
                    }}>My Rooms</h5>
                    <Row style={{
                    width: "wrap-content",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    }}>
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>Friends :))</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Cat</ListGroupItem>
                                    <ListGroupItem className="list-item">Alex</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>GHH!</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Mara</ListGroupItem>
                                    <ListGroupItem className="list-item">Danielle</ListGroupItem>
                                    <ListGroupItem className="list-item">Isabelle</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>Trigon</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Jack (pledgemaster)</ListGroupItem>
                                    <ListGroupItem className="list-item">Spencer (quarantined)</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                    </Row>
                </div>
        
                <div style={{
                    paddingLeft: "20px",
                }}>
                    <h5 className="room-types" style={{
                    textAlign: "left",
                    }}>My Classes</h5>
                    <Row style={{
                    width: "wrap-content",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    }}>
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>CS 2150</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Amanda</ListGroupItem>
                                    <ListGroupItem className="list-item">Diana</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>CHE 2215</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>APMA 2130</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Bethany</ListGroupItem>
                                    <ListGroupItem className="list-item">Samantha</ListGroupItem>
                                    <ListGroupItem className="list-item">Matthew</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>CHEM 2411</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Helen</ListGroupItem>
                                    <ListGroupItem className="list-item">Emily</ListGroupItem>
                                    <ListGroupItem className="list-item">Taylor</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>CS 1501</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Andrew</ListGroupItem>
                                    <ListGroupItem className="list-item">Isabella</ListGroupItem>
                                    <ListGroupItem className="list-item">Madi</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                    </Row>
                </div>
                
                <div style={{
                    paddingLeft: "20px",
                }}>
                    <h5 className="room-types" style={{
                    textAlign: "left",
                    }}>My University</h5>
                    <Row style={{
                    width: "wrap-content",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    }}>
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>Clemons</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Library</ListGroupItem>
                                    <ListGroupItem className="list-item">Miss It</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>Alderman</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">Under</ListGroupItem>
                                    <ListGroupItem className="list-item">Construction</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>Clark</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">The Only One</ListGroupItem>
                                    <ListGroupItem className="list-item">I have used</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                        <Card style={{
                            width: "200px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            marginLeft: "10px",
                            marginRight: "10px",
                            background:"#7a7a78",
                            }}
                        >
                            <Card.Body>
                                <text style={{
                                    background: "#7a7a78",
                                    color: "#ededed",
                                    fontSize: 28,
                                    marginBottom: "10px",
                                }}
                                ><b>Thornton Stacks</b></text>

                                <ListGroup className="room-Occup" style = {{
                                    textAlign: "left",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}>
                                    <ListGroupItem className="list-item">The OG</ListGroupItem>
                                    <ListGroupItem className="list-item">Study Spot</ListGroupItem>
                                </ListGroup>
                                <Button variant="light"><Link to="/roomfeed">Join Room!</Link></Button>
                            </Card.Body>
                        </Card>
                    
                    </Row>
                </div>
        
        </div>
    );
};

export default MainPage;