/* Set the width of the side navigation to 220px */
function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function Data () {

    var Students = {
        Constructor: function Students(SID, firstName, lastName, dateOfBirth, tuitionFees, Courses, Assignments) {
            this.ID = SID;
            this.firstName = firstName;
            this.lastName = lastName;
            this.dateOfBirth = dateOfBirth;
            this.tuitionFees = tuitionFees;
            this.Courses = Courses;
            this.Assignments = Assignments;
        },
        Entities: [],
        Return: function () { return this.Entities }
    };

    var Courses = {
        Constructor: function Courses(CID, title, stream, type, startDate, endDate, Students, Assignments, Trainers) {
            this.ID = CID;
            this.title = title;
            this.stream = stream;
            this.type = type;
            this.startDate = startDate;
            this.endDate = endDate;
            this.Students = Students;
            this.Assignments = Assignments;
            this.Trainers = Trainers;
        },
        Entities: [],
        Return: function () { return this.Entities }
    };

    var Trainers = {
        Constructor: function Trainers(TID, firstName, lastName, subject, Courses) {
            this.ID = TID;
            this.firstName = firstName;
            this.lastName = lastName;
            this.subject = subject;
            this.Courses = Courses;
        },
        Entities: [],
        Return: function () { return this.Entities }
    };

    var Assignments = {
        Constructor: function Assignments(AID, title, description, subDateTime, Courses, Students) {
            this.ID = AID;
            this.title = title;
            this.description = description;
            this.subDateTime = subDateTime;
            this.Courses = Courses;
            this.Students = Students;
        },
        Entities: [],
        Return: function () { return this.Entities }
    };

    (function () {
        Students.Entities.push(new Students.Constructor(1, "Stavros", "Vasileiadis", 1991, 2000, [], []));
        Students.Entities.push(new Students.Constructor(2, "Johann Sebastian", "Bach", 1986, 2500, [], []));
        Students.Entities.push(new Students.Constructor(3, "Nikolaos", "Skalkotas", 1977, 2100, [], []));
        Students.Entities.push(new Students.Constructor(4, "Giacinto", "Scelsi", 1955, 2400, [], []));
        Students.Entities.push(new Students.Constructor(5, "Edgard", "Varese", 1988, 3000, [], []));
        Students.Entities.push(new Students.Constructor(6, "Amadeus", "Mozart", 1991, 2000, [], []));
        Students.Entities.push(new Students.Constructor(7, "Ludwig", "van Beethoven", 1992, 2500, [], []));
        Students.Entities.push(new Students.Constructor(8, "Johann", "Stauess", 1999, 3000, [], []));
        Students.Entities.push(new Students.Constructor(9, "Igor", "Stravisky", 1974, 2100, [], []));
        Students.Entities.push(new Students.Constructor(10, "Krzysztof", "Penderecki", 1985, 2400, [], []));
        Courses.Entities.push(new Courses.Constructor(1, "C#", "Programming", "Part time", "01/02/2021", "01/08/2021", [], [], []));
        Courses.Entities.push(new Courses.Constructor(2, "Go", "Programming", "Full time", "05/03/2021", "15/06/2021", [], [], []));
        Courses.Entities.push(new Courses.Constructor(3, "Java", "Programming", "Full time", "05/03/2021", "15/06/2021", [], [], []));
        Trainers.Entities.push(new Trainers.Constructor(1, "Ioannes", "Philippidis", "Back End", []));
        Trainers.Entities.push(new Trainers.Constructor(2, "Constantine", "Palaiologos", "Front End", []));
        Trainers.Entities.push(new Trainers.Constructor(3, "Yorgo", "Papadopoulos", "Back End", []));
        Assignments.Entities.push(new Assignments.Constructor(1, "Invididual Project 1", "Individual Project 1 Description", "30/06/2021", [], []));
        Assignments.Entities.push(new Assignments.Constructor(2, "Idividual Project 2", "Individual Project 2 Description", "15/05/2021", []));
        Assignments.Entities.push(new Assignments.Constructor(3, "Team Project 1", "Team Project 1 Description", "15/06/2021", [], []));
        Assignments.Entities.push(new Assignments.Constructor(4, "Team Project 2", "Tean Project 2 Description", "01/08/2021", [], []));
        Assignments.Entities.push(new Assignments.Constructor(5, "Individual Project 3", "Individual Project 3 Description", "05/04/2021", [], []));
    })();

    return { Students: Students, Courses: Courses, Trainers: Trainers, Assignments: Assignments }; 

}
//CREATE TABLE SELF INVOKED FUNCTION

(function (Data) {
        //Data
    //Data.Students.Entities[0].firstName = 'gigi';
    //console.log(Data.Students.Entities);

    //console.log(Entities['Students']);
    //Entities['AllSt'].forEach(func);

    var div = document.getElementById('zzz');
    var table = document.createElement('table');
    table.classList.add('table');


    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th4 = document.createElement('th');
    var th5 = document.createElement('th');
    var th6 = document.createElement('th');
    var th7 = document.createElement('th');
    var th1text = document.createTextNode('ID');
    var th2text = document.createTextNode('First Name');
    var th3text = document.createTextNode('Last Name');
    var th4text = document.createTextNode('Tuition Fees');
    var th5text = document.createTextNode('Courses');
    var th6text = document.createTextNode('Assignments');
    var th7text = document.createTextNode(' ');
    th1.appendChild(th1text);
    th2.appendChild(th2text);
    th3.appendChild(th3text);
    th4.appendChild(th4text);
    th5.appendChild(th5text);
    th6.appendChild(th6text);
    th7.appendChild(th7text);
    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    thead.appendChild(th4);
    thead.appendChild(th5);
    thead.appendChild(th6);
    thead.appendChild(th7);
    tr.appendChild(thead);
    table.appendChild(tr);

    var thead = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td1text = document.createTextNode(Data.Students.Entities[0].ID);
    var td2text = document.createTextNode('First Name');
    var td3text = document.createTextNode('Last Name');
    var td4text = document.createTextNode('Tuition Fees');
    var td5text = document.createTextNode('Courses');
    var td6text = document.createTextNode('Assignments');
    var td7text = document.createTextNode(' ');



    div.appendChild(table);
    

    //function func(item, index) {
    //    document.getElementById("TableBody").appendChild(item);
    //};

    //for (var item of Entities['Students']) {
    //    document.getElementById('TableBody').innerHTML += createHTML(item);
    //}

    //function createHTML(item) {
    //    var string = 
    //        `
    //        <tr>
    //            <td> ` + item.SID + `</td>
    //            <td>` + item.firstName + `</td>
    //            <td>` + item.lastName + `</td>
    //            <td>` + item.dateOfBirth + `</td>
    //            <td>` + item.tuitionFees + `</td>
    //            <td>` + GetCourses(item) + `</td>
    //            <td class="margin-auto d-flex justify-content-center">
    //                <div class="margin-auto d-flex justify-content-center" title="Edit">
    //                    <i class="fa fa-pencil fa-lg align-self-center" aria-hidden="true"></i>
    //                </div>
    //                <div class="margin-auto d-flex justify-content-center" title="Delete">
    //                    <i class="fa fa-trash fa-lg align-self-center" aria-hidden="true"></i>
    //                </div>
    //            </td>
    //     </tr >
    //    `;
    //    return string;
        
    //};

    //function GetCourses(item) {
    //    var f = "";
    //    var i = 1;
    //    for (var v of item.Courses) {
    //        var f = f + v.title;
    //        if (i >= 1 && i < item.Courses.length) {
    //            f = f + ', ';
    //        }
    //        i++;
    //    }
    //    return f;
    //}

})(Data());



