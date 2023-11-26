/*зробити конструктор сутності "Студент".
Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. 
І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, 
але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо 
метод .present() на чергове порожнє місце, в масив записується true, 
коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, 
щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість,
present та absent – ​​методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування
(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 
0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - 
"Добре, але можна краще ", якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів)
і показати використання цих методів.
*/

class Student {
    constructor (name, surname, birthYear, grades) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attending = [];
        this.attending.length = 25;
        this.attendingDay = 0;
    }

    ageStudent (date) {
        console.log(`Student's age is ${date - this.birthYear}`);
    }

    getAverageGrade () {
        this.averageGrade = this.grades.reduce((acc, grade) => acc + grade, 0)/this.grades.length;
        console.log(`Average grade for student ${this.name} ${this.surname} is ${this.averageGrade}`);
    }

    present () {
        if (this.attendingDay < this.attending.length) {
        this.attending.splice(this.attendingDay, 1, true);
        this.attendingDay++;
        } else console.log("You can't enter data");
    }

    absent () { 
        if (this.attendingDay < this.attending.length) {
            this.attending.splice(this.attendingDay, 1, false);
            this.attendingDay++;
        } else console.log("You can't enter data");
    }

    getAverageAttending () {
        let presentDays = 0
        this.attending.forEach(element => {
            if (element === true) {
            presentDays++} 
        });
        this.averageAttending = presentDays/this.attending.length;
        console.log(this.averageAttending);
    }

    summary () {
        if (this.averageGrade > 90 && this.averageAttending > 0.9) {
            console.log(`Молодець!`)
        } else if (this.averageGrade > 90 || this.averageAttending > 0.9) {
            console.log(`Добре, але можна краще `);
        } else {
            console.log(`Редиска!`);
        }
    }
}

const grades1 = [100,90,95,98,100];
const student1 = new Student('Stive', 'Marks', 2003, grades1);

console.log(student1);
student1.ageStudent(2023);
student1.getAverageGrade();
student1.present(); student1.present(); student1.absent (); student1.present();
student1.present(); student1.present (); student1.present(); student1.present ();
student1.present(); student1.present(); student1.present (); student1.present();
student1.present(); student1.present(); student1.present (); student1.present();
student1.present(); student1.present (); student1.present(); student1.present ();
student1.present(); student1.present(); student1.absent (); student1.present();
student1.present(); student1.present(); 
student1.getAverageAttending ();
student1.summary();


const grades2 = [100,90,95,98,100,89,100,85];
const student2 = new Student('Nik', 'Markus', 2007, grades2);

console.log(student2);
student2.ageStudent(2023);
student2.getAverageGrade();
student2.present(); student2.present(); student2.absent (); student2.present();
student2.present(); student2.present (); student2.present(); student2.present ();
student2.present(); student2.present(); student2.present (); student2.present();
student2.getAverageAttending ();
student2.summary();

const grades3 = [80,90,95,98,80,20,89];
const student3 = new Student('Olga', 'Maroka', 2005, grades3);

console.log(student3);
student3.ageStudent(2023);
student3.getAverageGrade();
student3.absent(); student3.absent(); student3.absent (); student3.absent();
student3.absent(); student3.present (); student3.absent(); student3.absent ();
student3.present(); student3.absent(); student3.present (); student3.absent();
student3.getAverageAttending ();
student3.summary();