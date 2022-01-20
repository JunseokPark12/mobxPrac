import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/countSlice';

function MainBody() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>MainBody {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default MainBody;
