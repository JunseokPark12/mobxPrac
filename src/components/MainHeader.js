import { observer } from 'mobx-react';
import useStores from '../hooks/useStores';

function MainHeader() {
  const { countStore } = useStores();
  return (
    <div>
      <p>MainHeader</p>
      <p>{countStore.count}</p>
      <p>==========</p>
    </div>
  );
}

export default observer(MainHeader);
