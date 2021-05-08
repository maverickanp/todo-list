const todos = new Map();

const listTodo = (req, res) => {    
    const result = Array.from(todos.values());
    res.status(200).json(result);
}

const createTodo = (req, res) => {
    const todo = {
        id: req.body.id,
        description: req.body.description,
        date: new Date(),
        done: false
    }
    todos.set(todo.id, todo);
    res.status(201).json(todo);
};

const readTodo = (req, res) => {
    const { id } = req.params;
    res.status(200).json(todos.get(id));
};

const updateTodo = (req, res) => {
    const { 
        params: { id }, 
        body: { description, done } 
    } = req;
    const currentTodo = todos.get(id);
    const updatedTodo = {
        id,
        description,
        date: currentTodo.date || new Date(), 
        done
    }
    todos.set(id, updatedTodo);
    res.status(200).json(updatedTodo);    
};

const deleteTodo = (req, res) => {
    const { id } = req.params;
    const removed = todos.get(id);
    todos.delete(id);
    res.status(200).json(removed);

};

module.exports = {
    listTodo,
    createTodo,
    readTodo,
    updateTodo,
    deleteTodo
}