import useTodoStore from "../store/useTodoStore";
import TodoItem from "./TodoItem.jsx";

const TodoTable = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <div className="overflow-x-auto px-4 pb-6">
            <table className="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 text-left">
                        <th className="py-3 px-4">List</th>
                        <th className="py-3 px-4 text-center">Status</th>
                        <th className="py-3 px-4 text-center">Close</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoTable;
