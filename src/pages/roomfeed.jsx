import React from "react";
import WebCam from "react-webcam";

//const WebcamComponent = () => <WebCam />
const RoomFeed = () => {
    return (
        <div class= "room-feed-page">
            <h1>CHE 2215</h1>
            <div class = "row">
                <div class="users-column" style={{
                    marginLeft: "20px",

                }}>
                    <h3>Users</h3>
                    <div>
                        <h4 style= {{
                            paddingBottom: "0px",
                            marginBottom: "-40px",
                        }}>Emma R</h4>
                        <WebCam
                            audio={true}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                
            </div>

                

            
        </div>
    );
};

export default RoomFeed;