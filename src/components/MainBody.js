import { observer } from 'mobx-react';
import useStores from '../hooks/useStores';

function MainBody() {
  const { countStore } = useStores();
  return (
    <div>
      <p>MainBody {countStore.count}</p>
      <p>
        <button onClick={countStore.increase}>+</button>
      </p>
      <p>
        <button onClick={countStore.decrease}>-</button>
      </p>
    </div>
  );
}

export default observer(MainBody);
