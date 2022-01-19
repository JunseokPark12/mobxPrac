import { action, makeObservable, observable } from 'mobx';

class CountStore {
  count = 0;
  constructor() {
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
