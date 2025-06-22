import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
        <Header />
        <TodoForm />
        <TodoTable />
      </div>
    </div>
  );
}

export default App;
