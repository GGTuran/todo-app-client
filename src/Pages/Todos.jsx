/* eslint-disable no-unused-vars */
import TodoModal from "@/components/todo/TodoModal";
import Container from "@/components/ui/Container";
// import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Todos = () => {


    const [todos, setTodos] = useState([]);

    const fetchTodo = async () =>{
        try{
            const res = await fetch('http://localhost:5000/todos');
            const allTodos = await res.json();
            console.log(allTodos);
            setTodos(allTodos); 
        }catch(err){
            console.log(err);
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
                   <TodoModal></TodoModal>
                </div>
            </div>
            <div className="border-b border-gray-200 my-5"></div>
            <div className="space-y-3">
                {todos.map((item) => (
                    <div className="border-b border-gray-300  px-3 py-2 rounded-md flex items-center gap-2" 
                    key={item._id}>
                        <Checkbox></Checkbox>
                        <p className="font-semibold">{item.todo}</p>
                        <div className="bg-black size-4 rounded-full ml-auto"></div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Todos;