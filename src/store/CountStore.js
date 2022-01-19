import { action, makeObservable, observable } from 'mobx';

class CountStore {
  count = 0;
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      count: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => {
    this.count++;
  };

  decrease = () => {
    this.count--;
  };
}

export default CountStore;
