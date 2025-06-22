import { useState } from "react";
import useTodoStore from "../store/useTodoStore";

const TodoForm = () => {
    const [input, setInput] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAdd = () => {
        if (!input.trim()) return;
        addTodo(input.trim());
        setInput("");
    };

    return (
        <div className="p-6 text-center">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What would you like to do?"
                className="border-b-2 outline-none w-full max-w-md mb-4 text-lg p-2"
            />
            <br />
            <button
                onClick={handleAdd}
                className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-full shadow-md transition"
            >
                Add
            </button>
        </div>
    );
};

export default TodoForm;
