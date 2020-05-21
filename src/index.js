/* eslint-disable */
'use strict'

class User {
    constructor(name, surname, yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
    }

    get age() {
        return (new Date).getFullYear() - this.yearOfBirth;
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

class Student extends User {
    constructor(name, surname, yearOfBirth) {
        super(name, surname, yearOfBirth);

        this.marksArr = new Array(30);
        this.visitArr = new Array(30);
    }

    mark(ball) {
        const markIndex = this.marksArr.findIndex(element => element === undefined);
        this.marksArr[markIndex] = ball;
    } 

    visiting(visit) { // visiting argument may be 'true' or 'false'
        const visitIndex = this.visitArr.findIndex(element => element === undefined);
        if (visit) {
            this.visitArr[visitIndex] = true;
        } else {this.visitArr[visitIndex] = false;}
    }

    get averageVisit() {
        const lessons = this.visitArr.filter(lesson => lesson !== undefined);
        const trueVisits = this.visitArr.filter(visit => visit === true);
        return trueVisits.length / lessons.length;
    }

    get averageMark() {
        const receivedMarksArr = this.marksArr.filter(mark => mark !== undefined);
        return receivedMarksArr.reduce((prev, elem) => prev + elem) / receivedMarksArr.length;
    }
}

class Teacher extends User {
    constructor(name, surname, yearOfBirth) {
        super(name, surname, yearOfBirth);
        this.activeGroups = [];
        this.groups = [];
    }

    addGroup(groupName) {
        this.groups.push({
            name: groupName,
            isActive: true
        }),
        
        this.activeGroups = this.groups.slice(0)   
    }

    changeStatus(groupName, status = true) {
        if (!status)
            this.activeGroups.forEach((group,index) => {
                if (group.name === groupName) {
                    group.isActive = false;
                    this.activeGroups.splice(index, 1);
                }
            });
        else
            this.groups.forEach(group => {
                if (group.name === groupName && !(this.activeGroups.includes(group))) {
                    group.isActive = true;
                    this.activeGroups.push(group);
                }
            })
    }
}

// const winston = new Student('Winston', 'Smith', 1954);
// const george = new Teacher('George', 'Orwell', 1984);

// george.addGroup('Front-End Pro');
// george.addGroup('Front-End Basic');
// george.addGroup('DevOps');
// george.addGroup('PHP');

// george.changeStatus('Front-End Pro', false);
// george.changeStatus('Front-End Pro');
// george.changeStatus('DevOps', false);


// winston.mark(5);
// winston.mark(10);

// winston.visiting(true);
// winston.visiting(false);
// winston.visiting(false);

// console.log(winston);
// console.log(winston.visitArr);
// console.log(winston.averageVisit);
// console.log(winston.averageMark);

// console.log(george);
// console.log(george.groups);
// console.log(george.activeGroups);











