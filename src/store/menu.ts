import { action, makeObservable, observable } from "mobx";

class menuStore {
    @observable opened: boolean  = false;
    @observable history: any = {show: false}

    constructor() {
        makeObservable(this);
    }

    @action
    setOpened() {
        this.opened = !this.opened;
    }

    @action
    setHistory(information: any){
        if(!information) return this.history = {...this.history, show: false};
        return this.history = {...information, show: true}
    }
}

export default new menuStore();