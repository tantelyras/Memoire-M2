import {person, faces} from './default'

class Store {
    constructor(){
        this.set_default()
    }
    set_default(){
        this.state = {
            faces,
            person
        }
    }
}

const store = new Store()
export default store