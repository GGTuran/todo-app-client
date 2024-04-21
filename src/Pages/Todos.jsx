/* eslint-disable no-unused-vars */
import TodoCard from "@/components/todo/TodoCard";
import TodoModal from "@/components/todo/TodoModal";
import Container from "@/components/ui/Container";
// import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Todos = () => {


    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchTodo = async () =>{
        setLoading(true);
        try{
            const res = await fetch('http://localhost:5000/todos');
            const allTodos = await res.json();
            console.log(allTodos);
            setTodos(allTodos); 
            setLoading(false);
        }catch(err){
            console.log(err);
        } finally{
            setLoading(false);
        }
    };


    useEffect(() =>{
        fetchTodo();

    } , []) 


    return (
        <Container>
            {/* <h1>Welcome!! Todo Client</h1> */}

            <div className="flex justify-between mt-32">
                <div className="flex items-center gap-3">
                    <SearchIcon></SearchIcon>
                    <Input placeholder="Search"></Input>
                </div>
                <div>
                   <TodoModal
                   setLoading={setLoading}
                   setError={setError}
                   setTodos={setTodos}
                   todos={todos}
                   ></TodoModal>
                </div>
            </div>
            <div className="border-b border-gray-200 my-5"></div>
            <div className="space-y-3">
                {loading && (
                    <p className="text-center text-gray-400 text-xl font-semibold">Loading</p>
                )}
                {todos.length === 0 && !loading &&!error && (
                    <p className="text-center text-gray-400 text-xl font-semibold">   There is nothing to see, please add a todo by using Add todo button</p>
                )}
                {todos.map((item, index) => (
                <TodoCard key={item._id} 
                todos={todos}
                setTodos={setTodos}
                index={index}
                item={item}></TodoCard>
                ))}
            </div>
        </Container>
    );
};

export default Todos;