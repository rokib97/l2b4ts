// You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

{
  interface IStudentInfo {
    name: string;
    age: number;
    grades: number[];
  }

  const studentInfo: IStudentInfo = {
    name: "rokib",
    age: 26,
    grades: [88, 86, 87, 89, 90],
  };

  function calculateAverageGrade(student: IStudentInfo): number {
    return (
      student.grades.reduce((total, grade) => total + grade, 0) /
      student.grades.length
    );
  }
}
