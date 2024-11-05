{
  /**
     * Task 8: Intersection Types
    Objective: Practice using intersection types.

    Instructions:

    Create a type AdminUser that is an intersection of:
    User with properties name and email
    Admin with property adminLevel
    Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.
     */

  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: number;
  };

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `Admin ${user.name} with email ${user.email} has an admin level of ${user.adminLevel}`;
  };

  const adminUser: AdminUser = {
    name: "rokib",
    email: "rok@gmail.com",
    adminLevel: 2,
  };

  const res: string = describeAdmin(adminUser);
  console.log(res);
}
