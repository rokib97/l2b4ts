{
  //  function with generics
  const createArry = (param: string): string[] => {
    return [param];
  };
  const createArryWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res = createArryWithGeneric<number>(120);

  const res2 = createArryWithGeneric<string>("Bangladesh");
  type User = {
    id: number;
    name: string;
  };
  const res3 = createArryWithGeneric<User>({
    id: 120,
    name: "rokib",
  });

  const createArryWithTuple = <T, X>(param1: T, param2: X): [T, X] => {
    return [param1, param2];
  };

  const res10 = createArryWithTuple<number, string>(100, "Rokib");
  const res11 = createArryWithTuple<number, { name: string }>(100, {
    name: "rokib",
  });

  const addCourseToStudent = <T>(student: T): T => {
    const course: string = "Next Level WebDev";
    return {
      ...student,
      course,
    };
  };

  type StudentOne = {
    name: string;
    email: string;
    isMarried: boolean;
  };

  const student1 = addCourseToStudent<StudentOne>({
    name: "Rokib",
    email: "rok@gmail.com",
    isMarried: false,
  });

  interface StudentTWo {
    name: string;
    email: string;
    devType: string;
  }

  const student2 = addCourseToStudent<StudentTWo>({
    name: "Rokib",
    email: "rok@gmail.com",
    devType: "Full Stack",
  });
}
