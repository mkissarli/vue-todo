/*export default class TodoModel {
  Text:      string;
  IsCurrent: boolean;

  constructor() {
    this.Text      = '';
    this.IsCurrent = false;
  }

  get text(){
      return this.Text;
  }
  import {Module, VuexModule, Mutation, Action} from 'vuex-module-decorators' 

  @Module
  export default class TodoModel extends VuexModule {
    text      = '';
    isCurrent = true;
  
    @Mutation addTodo(delta: number) {this.count+=delta}
    @Mutation decrement(delta: number) {this.count-=delta}
  
    // action 'incr' commits mutation 'increment' when done with return value as payload
    @Action({commit: 'increment'}) incr() {return 5}
    // action 'decr' commits mutation 'decrement' when done with return value as payload
    @Action({commit: 'decrement'}) decr() {return 5}
  
  }*/