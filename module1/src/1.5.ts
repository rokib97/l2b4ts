// Reference Type ==> Obejct
const userInfo: {
  readonly company: "Phero"; //tyep ==> literal type/ fixed value as type
  firstName: string;
  middleName?: string; // Optional Type
  lastName: string;
  isMarried: boolean;
  readonly userId: number;
} = {
  company: "Phero",
  firstName: "rokibul",
  lastName: "rokib",
  isMarried: true,
  userId: 69,
};
// userInfo.userId = 120;  can't chnage access modifier readony value
console.log(userInfo.middleName);
