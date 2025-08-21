const students = [
  {
    name: "Fotima",
    gender: "female",
    id: 1,
    age: 45,
    major: "Computer Science",
    grade: "A",
  },
  {
    name: "Aziz",
    gender: "male",
    id: 4,
    age: 32,
    major: "Business",
    grade: "B+",
  },
  {
    name: "Zuhra",
    gender: "female",
    id: 2,
    age: 23,
    major: "Mathematics",
    grade: "A-",
  },
  {
    name: "Malika",
    gender: "female",
    id: 3,
    age: 78,
    major: "History",
    grade: "C",
  },
  {
    name: "Mavlon",
    gender: "male",
    id: 7,
    age: 43,
    major: "Physics",
    grade: "B",
  },
  {
    name: "Adiba",
    gender: "female",
    id: 54,
    age: 26,
    major: "Biology",
    grade: "A+",
  },
  {
    name: "Rustam",
    gender: "male",
    id: 8,
    age: 29,
    major: "Engineering",
    grade: "B-",
  },
  {
    name: "Nodira",
    gender: "female",
    id: 9,
    age: 34,
    major: "Literature",
    grade: "A",
  },
  {
    name: "Shohjahon",
    gender: "male",
    id: 10,
    age: 21,
    major: "Chemistry",
    grade: "C+",
  },
  {
    name: "Dilnoza",
    gender: "female",
    id: 11,
    age: 27,
    major: "Economics",
    grade: "B",
  },
  {
    name: "Javlon",
    gender: "male",
    id: 12,
    age: 38,
    major: "Art",
    grade: "A-",
  },
  {
    name: "Saida",
    gender: "female",
    id: 13,
    age: 19,
    major: "Psychology",
    grade: "A+",
  },
  { name: "Bekzod", gender: "male", id: 14, age: 41, major: "Law", grade: "B" },
  {
    name: "Gulnora",
    gender: "female",
    id: 15,
    age: 25,
    major: "Medicine",
    grade: "A",
  },
  {
    name: "Otabek",
    gender: "male",
    id: 16,
    age: 30,
    major: "Sociology",
    grade: "C",
  },
  {
    name: "Lola",
    gender: "female",
    id: 17,
    age: 22,
    major: "Music",
    grade: "B+",
  },
  {
    name: "Timur",
    gender: "male",
    id: 18,
    age: 35,
    major: "Geography",
    grade: "A-",
  },
  {
    name: "Shahnoza",
    gender: "female",
    id: 19,
    age: 28,
    major: "Philosophy",
    grade: "B",
  },
  {
    name: "Alisher",
    gender: "male",
    id: 20,
    age: 24,
    major: "Education",
    grade: "A",
  },
  {
    name: "Madina",
    gender: "female",
    id: 21,
    age: 31,
    major: "Linguistics",
    grade: "B+",
  },
];

// ------------------
// Tushuntirish
// 1. students arrayidan bahosi "A"ga teng qizlarning yoshini 3 ga oshirib [misol uchun 22 bo'lsa 25 qilib qo'ying], xuddi shu qizlarni yangi arrayda qaytaring.
// 2. Keyin shu qizlarni  alifbo tartibida tartiblab yangi array qaytaring. Ismlari bo'yicha tartiblaysiz. Yangi array qaytarasiz.

function task(students) {
  const filterStudents = students
    .filter(student => student.grade === "A" && student.gender === "female") 
    .map((student) => {
      return { ...student, age: student.age + 3 };
    });
  
  filterStudents.sort((a, b) => a.name.localeCompare(b.name));

  return filterStudents;
}

const result = task(students);

console.log(result);

// Natija shu array bilan bir xil bo'lishi kerak. Masala to'g'ri ishlangan bo'lsa natija shunday bo'ladi
// [
//   {
//     name: "Fotima",
//     gender: "female",
//     id: 1,
//     age: 48,
//     major: "Computer Science",
//     grade: "A",
//   },
//   {
//     name: "Nodira",
//     gender: "female",
//     id: 9,
//     age: 37,
//     major: "Literature",
//     grade: "A",
//   },
//   {
//     name: "Gulnora",
//     gender: "female",
//     id: 15,
//     age: 28,
//     major: "Medicine",
//     grade: "A",
//   },
// ];
