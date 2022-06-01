import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";
import Card from "./post/Card";
import { isEmpty } from "./Utils";

const Thread = () => {
    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postReducer);

    useEffect(() => {
        if (loadPost) {
            dispatch(getPosts());
            setLoadPost(false)
        }
    }, [loadPost])

    return (
        <div className='thread-container'>
            <ul>
                {!isEmpty(posts[0]) && posts.map((post) => {
                    return <Card post={post} key={post._id} />
                })}
            </ul>
        </div>
    )
}

export default Thread;