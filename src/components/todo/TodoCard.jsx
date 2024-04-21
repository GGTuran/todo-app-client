/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Checkbox } from "../ui/checkbox";


const TodoCard = ({item, setTodos, todos, index}) => {

    const handleComplete = async(todoId, todoIndex) =>{
        console.log(todoId, todoIndex);
        console.log(item)

        try{
            const res = await fetch(`http://localhost:5000/todo/${todoId}`,{
                method:'PATCH',
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify({ isComplete: !item.isComplete }),
            });
            if(!res.ok){
                throw new Error("Erro updating Todo");
            }
            const updatedTodo = await res.json();
            
            setTodos([
                ...todos.slice(0, todoIndex),
                updatedTodo,
                ...todos.slice(todoIndex + 1),
            ]);
        } catch(err){
            console.log(err);
        }



    };

    return (
        <div className="border-b border-gray-300  px-3 py-2 rounded-md flex items-center gap-2" 
        key={item._id}>
            <Checkbox checked={item.isComplete} onCheckedChange={() => handleComplete(item._id, index)}></Checkbox>
            <p
             className={`font-semibold ${item.isComplete ? 'line-through' : null}`}
             >{item.todo}</p>
            <div className="bg-black size-4 rounded-full ml-auto"></div>
        </div>
    );
};

export default TodoCard;