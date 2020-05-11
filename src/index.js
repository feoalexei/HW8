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

        const getIndex = (array) => array.findIndex(element => element === undefined)

        this.mark = ball => this.marksArr[getIndex(this.marksArr)] = ball;

        this.visiting = visit => {
            visit ? this.visitArr[getIndex(this.visitArr)] = '+'
                : this.visitArr[getIndex(this.visitArr)] = '-';
        }
    }

    get averageVisit() {
        const lessons = this.visitArr.filter(lesson => lesson !== undefined);
        const trueVisits = this.visitArr.filter(visit => visit === '+');
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

    set addGroup(groupName) {
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

// george.addGroup = 'Front-End Pro';
// george.addGroup = 'Front-End Basic';
// george.addGroup = 'DevOps';

// george.changeStatus('Front-End Pro', false);
// george.changeStatus('Front-End Pro');
// george.changeStatus('DevOps', false);

// winston.mark(5);
// winston.mark(10);

// winston.visiting(true);
// winston.visiting(false);ls

// console.log(george);
// console.log(george.groups);
// console.log(george.activeGroups);











