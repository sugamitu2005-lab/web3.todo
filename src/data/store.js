let todos = [];
let id = 1;

module.exports = {
  getAll() {
    return todos;
  },
  add(text) {
    const todo = { id: id++, text, done: false };
    todos.push(todo);
    return todo;
  },
  done(id) {
    const t = todos.find(x => x.id === id);
    if (t) t.done = true;
    return t;
  },
  remove(id) {
    todos = todos.filter(x => x.id !== id);
  }
};
