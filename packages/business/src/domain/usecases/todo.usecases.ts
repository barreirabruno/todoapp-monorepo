import { Todo } from "../entities/todo"
import { TodoInput } from "../input/todo.input";

export interface AddTodo {
    execute(todo: TodoInput): Promise<Todo>
}