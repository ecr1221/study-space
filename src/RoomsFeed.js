import React from "react";
import {useState, useEffect} from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

function RoomsFeed({reload}) {

    const [rooms, setRooms] = useState([]);

    // useEffect(() =>{
    //     fetch(
    //         "study-space1221.appspot.com"
    //     )
    // })

    const Room = (room) =>{
        return (
            <Card
                style={{
                    width: "60vs",
                    marginTop: "20px",
                    marginBottom: "20px",
                    textAlign: "left",
                }}
                >
                    <Card.Header>{room.name}</Card.Header>
                    <Card.Body>
                        <ListGroup varient="flush">
                            <ListGroup.Item>Name1</ListGroup.Item>
                            <ListGroup.Item>Name2</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
        );
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {rooms.map(Room)}
        </div>
    );
}

export default RoomsFeed;