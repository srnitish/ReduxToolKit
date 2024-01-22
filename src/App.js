import './App.css';
// import Child from './Child';
import React, {lazy, Suspense} from 'react';
const Child = lazy(() => import('./Child'));


function App() {
  return (
    <>
    <div className='container mt-5'>
      <h3 className='text-center text-danger'>React Redux</h3>
      <div className='row ParentDesign'>
        <div className='mt-3 mb-5'>
          <h4 className='text-center'>Parent Component</h4>
        </div>

      <Suspense fallback= {<div>Loading...</div>}>
        <Child/>
      </Suspense>
      </div>
    </div>
    </>
  );
}

export default App;
