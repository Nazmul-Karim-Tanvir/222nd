import useTodoStore from "../store/useTodoStore";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo }) => {
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const toggleStatus = useTodoStore((state) => state.toggleStatus);

    return (
        <tr className="text-center">
            <td className="py-3">{todo.text}</td>
            <td>
                <button
                    onClick={() => toggleStatus(todo.id)}
                    className={`px-3 py-1 text-white text-sm rounded-full ${todo.completed ? "bg-green-400" : "bg-gray-400"
                        }`}
                >
                    {todo.completed ? "Completed" : "pending"}
                </button>
            </td>
            <td>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700"
                >
                    <FaTrash />
                </button>
            </td>
        </tr>
    );
};

export default TodoItem;
