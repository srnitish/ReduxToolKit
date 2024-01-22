import React from 'react';
import { decrement } from './features/trySlice';
import { useSelector, useDispatch } from 'react-redux';

function SubChild(prop) {
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.show.value);
    const username = useSelector((state)=> state.show.username);


    return (
        <div className='design mb-5 mx-auto'>
            <div className='mb-5 mt-3'>
            <h4>Inner Child Component</h4>
            userName is Coming from Store - <strong className='d-block'>{username}</strong>
            <button className='btn btn-success btn-sm mt-3' onClick={()=> dispatch(decrement())}>Click to Decrement = {data}</button>
            <hr/>
            <h4>React Props</h4>
            <p>Send Data From Parent(child component) to Child(sub-child component) using Prop</p>
                "{prop.message}"
            </div>
        </div>
    );
}

export default SubChild;