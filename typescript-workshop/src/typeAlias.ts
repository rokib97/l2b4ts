import { userData } from "./user";
type Name = string;
type ID = number | string;

function printId(id: ID) {
  console.log(`ID: ${id}`);
}

type User = {
  id: ID;
  firstName: Name;
  lastName?: Name;
  skills: {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    experience: string;
  }[];
  address: {
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
};

function printUser(firstName: string, lastName: string): User {
  return {
    id: crypto.randomUUID(),
    firstName,
    skills: [],
    address: {
      city: "Dhaka",
      country: "Bangladesh",
      coordinates: {
        lat: 23.8103,
        lng: 90.4125,
      },
    },
  };
}

type Address = User["address"];

//   type Coordinates = Address["coordinates"];
type Coordinates = User["address"]["coordinates"];

function findAddress(addr: User["address"]) {
  //   console.log(`City: ${addr.city}, Country: ${addr.country}`);
}

function findAddress2(addr: Address) {
  //   console.log(`City: ${addr.city}, Country: ${addr.country}`);
}

function findCoordinates(coordinates: Coordinates) {
  //   console.log(`Lat: ${coordinates.lat}, Lng: ${coordinates.lng}`);
}

const user = JSON.parse(userData) as User;

function printSkills(skills: User["skills"]) {
  console.log(skills.map((skill) => skill.name));
}

function printSkill(skill: User["skills"][number]) {
  console.log(skill.name);
}

printSkills(user.skills);
printSkill(user.skills[0]);
