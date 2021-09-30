import {ImplAddTodoRepository, Todo } from '@todoapp/business'

export class AddTodoRepository implements ImplAddTodoRepository {

    private todoPersistenceArray: Array<Todo> = [];

    async addTodo(todo: Todo): Promise<Todo> {
        this.todoPersistenceArray.push(todo)
        return Promise.resolve({id: "created", ...todo})
    }
}