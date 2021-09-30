import { Todo } from '@todoapp/business'
import { AddTodoRepository } from '@todoapp/integration_features'

async function main() {

    console.log("[***************************************]")
    console.log("[WELCOME TO THE SIMPLE TODO APP MONOREPO]")
    console.log("[***************************************]")

    const newTodo: Todo = {
        title: 'any_todo_awesome_title',
        description: 'any_todo_awesome_description'
    }

    const repository: AddTodoRepository = new AddTodoRepository()

    const add = await repository.addTodo(newTodo)

    console.log(add)

    console.log("[DONE]")
}

main()

