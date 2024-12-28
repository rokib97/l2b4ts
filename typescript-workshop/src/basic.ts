// basic type
let str: string = "hello";
let num: number = 1;
let bool: boolean = true;

const numbers: number[] = [1, 2, 3];
const strings: string[] = ["hello", "world"];
const booleans: boolean[] = [true, false];

// ENUM
enum Role {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  USER = "USER",
}
const userRole = Role.ADMIN;
// console.log(userRole);

enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
enum Payment {
  BKASH = "BKASH",
  NOGOD = "NOGOD",
  ROCKET = "ROCKET",
}

// console.log(Payment.BKASH);
