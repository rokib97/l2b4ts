{
  type ToDo = {
    task: string;
    completed: boolean;
    duedate: string;
  };

  const requiredTodo: ToDo = {
    task: "example ",
    completed: true,
    duedate: "11 Nov",
  };

  type OptionalTodo = {
    [T in keyof ToDo]?: ToDo[T];
  };

  const optionalTodo: OptionalTodo = {
    duedate: "22 Nov",
  };
}
