import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cakeAdd, cakeRemove, toggleAction } from './reduce and store/action/CakeAction'
const App = () => {
  const cake = useSelector((state) => state.cake)
  const toggle = useSelector((state)=> state.toggle)
  const dispatch = useDispatch()
  return (<>
    <div>{cake}</div>
    <button onClick={()=>cakeAdd(dispatch,10)} > add </button>
    <button onClick={()=>cakeRemove(dispatch,20)} > remove </button>
    <div>
      {toggle==true && <p>Ok Na Sa</p>}
    <button onClick={()=>toggleAction(dispatch)}>toggle</button>
    </div>
  </>
   
  )
}

export default App