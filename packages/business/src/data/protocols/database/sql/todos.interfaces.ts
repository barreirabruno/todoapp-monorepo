import { Todo } from "../../../../domain";

export interface ImplAddTodoRepository {
    addTodo(todo: Todo): Promise<Todo>
}