import { observable, action, computed, makeObservable, toJS } from 'mobx';


class TodoStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _todo = {} // id, title, date

    @observable
    _todos = [];

    @observable
    _searchText = '';

    @computed
    get todo() {
        return this._todo;
    }

    @computed
    get todos() {
        return toJS(this._todos);
    }    

    @computed
    get searchText() {
        return this._searchText;
    }

    @action
    setClearSearchText() {
        this._searchText = '';
    }

    @action
    setTodoProps(name, value) { //_todo 에 value를 Setting 하는 함수
        this._todo = {
            ...this._todo, // 변경되지 않는 값은 유지
            [name] : value // name이 title이면 title에 value Set, name이 date이면 date에 value Set
        }
    }

    @action
    setSearchText(searchtext) {
        this._searchText = searchtext;
    }

    @action
    addTodo(todo) {
        this._todos.push(todo);
    }

    @action
    selectedTodo(todo) {
        this._todo = todo;
    }

    @action
    updateTodo() {
        let foundTodo = this._todos.find( (todo) => todo.id === this._todo.id);
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;

        this._todo = {};
    }

    @action
    removeTodo() {
        let index = this._todos.findIndex( todo => todo.id === this._todo.id );
        if(index > -1) {
            this._todos.splice(index, 1);
        }

        this._todo = {};
    }




}

export default new TodoStore();