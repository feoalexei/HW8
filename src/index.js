function Student(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.getAge = () => (new Date).getFullYear() - yearOfBirth;
    this.marksArr = new Array(30); // eslint-disable-line
    this.visitArr = new Array(30); // eslint-disable-line
    const getIndexOfVisiting = () => this.visitArr.findIndex(element => element === undefined); // eslint-disable-line
    const getIndexOfMarks = () => this.marksArr.findIndex(element => element === undefined); // eslint-disable-line
    this.present = () => this.visitArr[getIndexOfVisiting()] = true;
    this.absent = () => this.visitArr[getIndexOfVisiting()] = false;
    this.mark = ball => this.marksArr[getIndexOfMarks()] = ball;

    this.getAverageVisiting = function () {
        let realVisit = 0;
        let possibleVisit = 0;
        for (let i = 0; i < this.visitArr.length; i++) {
            if (this.visitArr[i] === true) {
                realVisit++;
                possibleVisit++;
            } else if (this.visitArr[i] === false) {
                possibleVisit++;
            }
        }
        return realVisit / possibleVisit;
    };

    this.getAverageMark = function () {
        let receivedMarksArr = this.marksArr.slice(0, getIndexOfMarks()); // eslint-disable-line
        return receivedMarksArr.reduce((prev, elem) => prev + elem) / receivedMarksArr.length;
    };

    const goodMark = 9;
    const goodVisiting = .9;
    this.summary = function () {
        if ((this.getAverageMark() >= goodMark) && (this.getAverageVisiting() >= goodVisiting)) {
            return 'OMG, wtf a good student you are!';
        } else if ((this.getAverageMark() < goodMark) || (this.getAverageVisiting() < goodVisiting)) {
            return 'Not bad, but you can do it better';
        } else return 'Bad student';
    };
}

const heruntz = new Student('Erik', 'Heruntz', '1984');

heruntz.absent();
heruntz.present();
heruntz.present();
heruntz.present();
heruntz.present();

heruntz.mark(0); // eslint-disable-line
heruntz.mark(10); // eslint-disable-line
heruntz.mark(5); // eslint-disable-line
heruntz.mark(9); // eslint-disable-line
heruntz.mark(8); // eslint-disable-line

console.log('Student\'s attendance: ' + heruntz.visitArr.join(' | ')); // eslint-disable-line
console.log('Student\'s good studing: ' + heruntz.marksArr.join(' | ')); // eslint-disable-line
console.log('Student\'s average mark: ' + heruntz.getAverageMark()); // eslint-disable-line
console.log('Student\'s average attendance: ' + heruntz.getAverageVisiting()); // eslint-disable-line
console.log('Student\'s rating: ' + heruntz.summary()); // eslint-disable-line

console.log(heruntz); // eslint-disable-line