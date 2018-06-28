export function increment() {
    return { type: 'INCREMENT'};
  }

export function decrement() {
    return { type: 'DECREMENT'};
  }

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}
