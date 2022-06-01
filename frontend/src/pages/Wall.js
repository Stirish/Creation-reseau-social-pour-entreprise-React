import React from "react";
import Thread from "../components/Thread";

const Wall = () => {
    return(
        <div className='wall'>
            <div className='main'>
               <Thread /> 
            </div>
        </div>
    );
};

export default Wall;