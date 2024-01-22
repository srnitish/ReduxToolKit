import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, removeUsername, setUsername, incrementByValue } from './features/trySlice';
import SubChild from './SubChild';

function Child() {

    const messageFromParent = "Hello, This is a message received from child(parent) to sub-child(child)😄";

    const data = useSelector((state) => state.show.value);
    const incData = useSelector((state) => state.show.incValue);

    const dispatch = useDispatch();
    const [user, setUser] = useState('');
    const [incByuser, setincByuser] = useState('');

    const handleIncrement = () =>{
        dispatch(increment());
    }

    const handleSetUsername = () => {
        dispatch(setUsername(user));
    }

    const handleRemoveUsername = () => {
        dispatch(removeUsername());
    }

    const handleIncrementByValue = () => {
        dispatch(incrementByValue(2*incByuser));
    }

    return (
        <>
            <div className='design mb-5 mx-auto px-5 mr-5'>
                <div className='mb-5 mt-3'>
                <h4>Child Component</h4>
                <span>Data is Incrementing : {data } </span><br/>
                <button className='btn btn-danger btn-sm mb-4' onClick={handleIncrement}>Click to Increment</button><br/>

                {/* set username */}
                <div>
                    <input placeholder='Enter Username...' className='form-control' type='text' value={user} onChange={(e)=>setUser(e.target.value)}/>
                    <div className='d-flex justify-content-center mt-2'>
                        <button className='btn btn-primary btn-sm mx-2' onClick={handleSetUsername}>SetUsername</button>
                        <button className='btn btn-warning btn-sm' onClick={handleRemoveUsername}>removeUsername</button>
                    </div>
                </div>
                 {/* set username end*/}

                <div> Data: {incData}
                    <input placeholder='Incremented Value' value={incByuser} className='form-control' type='text' onChange={(e)=>setincByuser(e.target.value)}/>
                    <button className='btn btn-primary btn-sm mx-2' onClick={handleIncrementByValue}>Increment</button>
                </div>
               


                </div>
            </div>
            <SubChild message={messageFromParent}/>
        </>
    );
}

export default Child;