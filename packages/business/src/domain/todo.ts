export class Todo {
  
 private title: string
 private description: string

 constructor(title: string, description: string) {
    this.title = title
    this.description = description
 }
 
 get getTitle(): string {
     return this.title
 }

 get getDescription(): string {
     return this.description
 }
}