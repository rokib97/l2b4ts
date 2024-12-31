type ID = string | number;

type Admin = {
  id: ID;
  role: "admin";
  fullControl: boolean;
};
type Manager = {
  id: ID;
  role: "manager";
};

type User = Admin | Manager;

function doSomething(user: User) {
  if (user.role === "admin") {
    console.log("I have full Control", user.fullControl);
  }
}

function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

type ErrorResponse = {
  error: true;
  message: string;
};

type SuccessResponse = {
  error: false;
  data: string;
};

type ApiResponse = ErrorResponse | SuccessResponse;

function handleResponse(response: ApiResponse) {
  if (response.error) {
    console.log(response.message);
  } else {
    console.log(response.data);
  }
}
