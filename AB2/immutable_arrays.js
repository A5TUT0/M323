const OS = [
  {
    id: 1,
    name: "Ubuntu Linux",
    Creator: "Linus Tovalds",
  },
];

const addOS = [...OS, { id: 2, name: "Windows", Creator: "Microsoft" }];
console.log(addOS);

const NewOS = OS.map(ChangeOS);
function ChangeOS(OS) {
  if (OS.id === 1) {
    return { ...OS, name: "ArchLinux" };
  }
  return OS;
}
console.log(NewOS);

const reduceOS = addOS.filter((addOS) => {
  return addOS.id !== 1;
});
console.log(reduceOS);

const reviews = [
  4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0,
];

const total = reviews.reduce((a, g) => a + g);
const avarage = total / reviews.length;
console.log(avarage);

const groupReviews = (groups, reviews) => {
  const { Good = 0, Ok = 0, Bad = 0 } = groups;
  if (reviews >= 4) {
    return { ...groups, Good: Good + 1 };
  } else if (reviews >= 2.5) {
    return { ...groups, Ok: Ok + 1 };
  } else {
    return { ...groups, Bad: Bad + 1 };
  }
};
const reviewsGroups = reviews.reduce(groupReviews, {});
console.log(reviewsGroups);
