// CODE here for your Lambda Classes

// instructors and students be the siblings (with pm's being the child of instructor)?

class Person {
    constructor(attributes) {
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location,
        this.subject = attributes.subject
    }
    intro () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }
    demo () {
        return `Today we are learning about ${this.subject}`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className, 
        this.favSubjects = attributes.favSubjects
        
    }
    listsSubjects () {
        console.log(this.favSubjects);
    }
    PRAssignment () {
        return `${this.name} has submitted a PR for ${this.subjects}`;
    }
    sprintChallenge () {
        return `${this.name} has begun sprint challenge on ${this.subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName, 
        this.favInstructor = attributes.favInstructor
    }
    standUp () {
        return `${this.name} announces to ${this.gradClassName}, @channel standby times!`;
    }
    debugsCode () {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// My 3 test objects(People) 

const roku = new Instructor ({
    name: 'Roku',
    age: 200,
    location: 'Fire Nation', 
    subject: 'Python',
    specialty: 'Fire Bending',
    favLanguage: 'Elm',
    catchPhrase: 'Aang, we need you!', 
});

const aang = new Student ({
    name: 'Aang',
    age: 112, 
    location: 'Air Temples',
    subject: 'Python',
    previousBackground: 'Stuck in ice',
    className: 'Web23', 
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript',
        ],
});

const appa = new ProjectManager ({
    name: 'Appa',
    age: 102,
    location: 'The Air',
    subject: 'Python',
    gradClassName: 'Web2',
    favInstructor: 'Avatar Kyoshi'
});

console.log(appa.standUp());
console.log(aang.listsSubjects());
console.log(aang.PRAssignment());
console.log(aang.sprintChallenge());
console.log(roku.catchPhrase);
console.log(roku.grade(aang, 'Python'));