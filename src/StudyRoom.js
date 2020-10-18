import React from "react";
import { useState, useRef, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Webcam from "react-webcam";
import Form from "react-bootstrap/Form";
//import Modal from 'react-bootstrap';

//import "./Upload.css";

function JoinRoom({reload, setReload}) {
    const [showModal, setShowModal] = useState(false);
    
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const webcamRef = useRef(null);

  return (
    <div>
        <Button variant="light" onClick={handleShowModal}>
            Join Room
        </Button>

        <Modal
            show={showModal}
            onHide={handleCloseModal}
            dialogClassName="room-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>Leave Room</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="camera">
                    {showModal === true ? (
                        <div>
                            <div>
                                <Webcam
                                    audio={true}
                                    ref={webcamRef}
                                />
                            </div>
                        </div>
                    ):(
                        <div>
                            <text> doing nothing</text>
                        </div>
                    )}
                </div>

            </Modal.Body>



        </Modal>
    </div>
  );
}

export default JoinRoom;