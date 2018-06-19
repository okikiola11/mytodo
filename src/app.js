// JavaScript Document
import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'app',
  components: {
  	AppHeader,
	TodoInput,
	TodoItem
  },
  data() {
	  return {
		  todos: [
		  	{id:0, text:"Let's make a bet"},
			{id:1, text:"Let's prepare for work"},
			{id:2, text:"Learning a vue app"}
		  ],
		  nextId:3
		  
	  };
  },
  methods: {
	  addTodo(text) {
		  this.todos.push[{id: this.nextId, text:text}];
		  this.nextId++;
	  },
	  removeTodo(id) {
		  let todos  = this.todos;
		  this.todos = todos.filter((todo) => todo.id != id)
	  }
  }
}