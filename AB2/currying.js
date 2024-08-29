const studentGrades = [
  { name: "Joe", grade: 88 },
  { name: "Jen", grade: 94 },
  { name: "Steph", grade: 77 },
  { name: "Allen", grade: 60 },
  { name: "Gina", grade: 54 },
];

const NoteText = (Note) =>
  function congratulations(name) {
    if (Note >= 90) {
      return `Excellent Job ${name}, you got an a`;
    } else if (Note >= 80) {
      return `Nice Job ${name}, you got an b`;
    } else if (Note >= 70) {
      return `Well done ${name}, you got an c`;
    } else if (Note >= 60) {
      return `What happened ${name}, you got an d`;
    } else {
      return `Not good ${name}, you got an f`;
    }
  };
const NoteFeddback = studentGrades.map(({ name, grade }) =>
  NoteText(grade)(name)
);
console.log(NoteFeddback);
