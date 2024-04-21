/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Controller, useForm,  } from "react-hook-form";

export default function TodoModal({todos, setTodos, setLoading, setError}) {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // console.log(data);
    const todoData = {...data, isComplete: false};
  try{  const res = await fetch('http://localhost:5000/todo', {
        method: "POST",
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(todoData),
    });

    if(!res.ok){
        throw new Error('Error on todo');
    }

    const newTodo = await res.json();

    setTodos([...todos, newTodo]);
    setLoading(false);


} catch(err){

    setError(err);
}finally{
  setLoading(false);
}

    // console.log(await res.json());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <Label htmlFor="todo">Todo</Label>
              <Textarea id="todo" {...register("todo")} />
            </div>
            <div className="items-center gap-4">
              <Label>Priority</Label>
              <Controller control={control} name="priority" 
              render={({field}) => (
                <Select onValueChange={field.onChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
              )}

              
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
