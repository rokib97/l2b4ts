{
  // Union type
  type FrontendDeveloper = "Fakibaz Developer" | "Junior Developer";
  type FullStackDeveloper = "Frontend Developer" | "Expert Developer";

  type Developer = FrontendDeveloper | FullStackDeveloper;
  const newDeveloper: Developer = "Expert Developer";

  type User = {
    name: string;
    age: number;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user: User = {
    name: "rokib",
    age: 24,
    gender: "Male",
    bloodGroup: "O+",
  };

  //   intersection type
  type BatsMan = {
    name: string;
    roles: string[];
    designation1: "Opening Batsman";
  };
  type Bowler = {
    roles: string[];
    designation2: "Opening Bowler";
  };

  type Allrounder = BatsMan & Bowler;

  const player: Allrounder = {
    name: "rokib",
    roles: ["bat", "bowl", "field"],
    designation1: "Opening Batsman",
    designation2: "Opening Bowler",
  };
}
