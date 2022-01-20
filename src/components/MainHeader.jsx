import { useSelector } from 'react-redux';

function MainHeader() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <p>MainHeader</p>
      <p>{count}</p>
      <p>==========</p>
    </div>
  );
}

export default MainHeader;
