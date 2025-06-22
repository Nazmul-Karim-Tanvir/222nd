import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTodoStore = create(
    persist(
        (set) => ({
            todos: [],
            addTodo: (text) =>
                set((state) => ({
                    todos: [...state.todos, { id: Date.now(), text, completed: false }],
                })),
            deleteTodo: (id) =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                })),
            toggleStatus: (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id ? { ...todo, completed: !todo.completed } : todo
                    ),
                })),
        }),
        {
            name: 'todo-storage', // eta localStorage er key hobe
        }
    )
);


export default useTodoStore;
