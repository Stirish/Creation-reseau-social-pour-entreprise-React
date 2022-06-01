import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import NewPostForm from "../components/post/NewPostForm";
import Thread from "../components/Thread";

const Wall = () => {
    const uid = useContext(UidContext)
    return(
        <div className='wall'>
            <div className='main'>
                <div className='home-header'>
                {uid ? <NewPostForm /> : null}
                </div>
               <Thread /> 
            </div>
        </div>
    );
};

export default Wall;