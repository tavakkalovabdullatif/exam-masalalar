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
// students arrayidan qizlarni o'zini o'qiydigan fanlarini alifbo tartibida tartiblaganda eng birinchida va eng oxirida turadigan qizlarning ismlari uzunligi o'rtasidagi farq qancha?

function task(students) {
  const includeMajors = [
    "Linguistics", "Education", "Philosophy", "Geography",
    "Music", "Sociology", "Medicine", "Law", "Art",
    "Economics", "Psychology", "Biology", "Chemistry"
  ];

  const filterStudents = students
    .filter(student => student.gender === "female" && !includeMajors.includes(student.major))
    .map(student => student.name)
    .sort((a, b) => a.localeCompare(b));

  if (filterStudents.length === 0) return 0;

  const firstNameLength = filterStudents[0].length; 
  const lastNameLength = filterStudents[filterStudents.length - 1].length;

  return Math.abs(firstNameLength - lastNameLength); 

}

const result = task(students)

console.log(result)
// result 0 chiqishi kerak. Siz alifbo bo'yicha o'qiydigan fanlarini tartiblasangiz birinchida Fotima ismli qiz, oxirgi o'rinda esa Madina ismli qiz turadi. Ikkalasining ham ismi 6 harf oradagi farq rostan ham 0.
