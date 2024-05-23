import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../Redux/Reducer/Reducer';

function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='main-div'>
            <h1>Counter App</h1>
            <div className='count-div'>
                <button onClick={()=>dispatch(decrement())}>-</button>
                <p>{count}</p>
                <button onClick={()=>dispatch(increment())}>+</button>
            </div>
        </div>
    )
}
export default Counter;