import CountStore from './CountStore';

class RootStore {
  constructor() {
    this.countStore = new CountStore(this);
  }
}

export default RootStore;
