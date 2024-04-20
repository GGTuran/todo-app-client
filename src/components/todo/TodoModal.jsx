/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export default function TodoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
         
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="items-center gap-4">
            <Label htmlFor="todo" >
              Todo
            </Label>
            <Textarea
              id="todo"
              
            />
          </div>
          <div className="items-center gap-4">
            <Label >
              Priority
            </Label>
            <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Priority" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="High">High</SelectItem>
    <SelectItem value="Medium">Medium</SelectItem>
    <SelectItem value="Low">Low</SelectItem>
  </SelectContent>
</Select>

          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
