/* eslint-disable no-unused-vars */
import TodoModal from "@/components/todo/TodoModal";
import Container from "@/components/ui/Container";
// import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Todos = () => {


    const [todos, setTodos] = useState([
        {
            "_id": "6621fe4bf2a556db95e5931c",
            "todo": "Be a full stack",
            "priority": "High",
            "isComplete": false,
            "__v": 0
        },
        {
            "_id": "662200bc3550d0037c12d444",
            "todo": "Be a MERN Stack first",
            "priority": "High",
            "isComplete": false,
            "__v": 0
        },
        {
            "_id": "66239e2647962f6d4a79531e",
            "todo": "be a full stack",
            "priority": "High",
            "isComplete": false,
            "__v": 0
        }
    ]); 


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