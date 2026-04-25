// TODO: Add logging

export class ToDo {
    constructor(title, description="", dueDate=null, priority=""){
        this._id = crypto.randomUUID();
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;

        console.log(`ToDo Item with ID ${this.id} constructed.`);
    }

    get id() { return this._id; }
    get title() { return this._title; }
    get description() { return this._description; }
    get dueDate() { return this._dueDate; }
    get priority() { return this._priority; }
}

export class Project {
    constructor(name){
        this._id = crypto.randomUUID();
        this._name = name;
        this._toDos = [];
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get toDos() { return this._toDos; }

    addToDo(todo) { this.toDos.push(todo); }
    removeToDo(id) { this.toDos = this.toDos.filter(todo => todo.id !== id); }
}

