console.log("Hello everyone")

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
//studentGrace is a class. Whatever is passed into that interpolation is linked to CSS and will change the color depending.
let studentGrade 
const createStudentComponent = (studentArray) => {
    return `
        <div class="student">
            <h1 class="xx-large ${studentGrade}">${studentArray.name}</h1>
            <section class="bordered dashed section--padded">${studentArray.subject}</section>
            <aside class="pushRight">${studentArray.info}</aside>
        </div>
    `
}

//The assignment was to pass one argument in the above function, instead of four different arguments. I originally had two forEach loops, but I consolidated by moving one down here. That way, I can iterate over the objects and determine if the students are passing or failing, but also pass the objects into the above function.
let studentComponentInnerHtml = ""
const renderStudentsToDom = (items) => {
    items.forEach(student => {
        if (student.score >= 60) {
            studentGrade = "passing"
        } else {
            studentGrade = "failing"
        }
        studentComponentInnerHtml += createStudentComponent(student)
    })
//originally tried to do a regular loop down here, but didn't work. Commented out some code that didn't work.
const studentContainer = document.querySelector(".container")
// for (let i = 0; i < students.length; i++) {
    // const student = students[0]
    studentContainer.innerHTML = studentComponentInnerHtml
}
//Phew!
renderStudentsToDom(students)

// let studentComponent = ""
// for (const student of students) {
//     if (student.score >= 60) {
//         studentComponent = "passing"
//     } else {
//         studentComponent = "failing"
//     }
// }

// .${studentComponent}

// const gradeColor = document.querySelector(".container");
// gradeColor.innerHTML = studentComponent;