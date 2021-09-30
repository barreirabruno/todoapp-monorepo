import { Todo } from '@todoapp/business'
import { AddTodoRepository } from '@todoapp/frameworks'

console.log("[***************************************]")
console.log("[WELCOME TO THE SIMPLE TODO APP MONOREPO]")
console.log("[***************************************]")

const newTodo: Todo = {
    title: 'any_todo_awesome_title',
    description: 'any_todo_awesome_description'
}

const repository:AddTodoRepository = new AddTodoRepository();

async function addTodoInRepo() {
    return await repository.addTodo(newTodo);
}

console.log("[ADD TODO]:", addTodoInRepo())
console.log("[TODO ADDED]")