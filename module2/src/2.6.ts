{
  type UserMustHaveValue = {
    id: number;
    name: string;
    email: string;
  };
  const addCourseToStudent = <T extends UserMustHaveValue>(student: T): T => {
    const course: string = "Next Level WebDev";
    return {
      ...student,
      course,
    };
  };

  type StudentOne = {
    id: number;
    name: string;
    email: string;
    isMarried: boolean;
  };

  const student1 = addCourseToStudent<StudentOne>({
    id: 102,
    name: "Rokib",
    email: "rok@gmail.com",
    isMarried: false,
  });

  interface StudentTWo {
    id: number;
    name: string;
    email: string;
    devType: string;
  }

  const student2 = addCourseToStudent<StudentTWo>({
    id: 103,
    name: "Rokib",
    email: "rok@gmail.com",
    devType: "Full Stack",
  });

  type StudentThree = {
    id: number;
    name: string;
    email: string;
    emni: string;
  };

  const student3 = addCourseToStudent<StudentThree>({
    id: 104,
    name: "hasan",
    email: "h@gmail.com",
    emni: "Emni",
  });
}
