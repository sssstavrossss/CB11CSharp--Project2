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

    var div = document.getElementById('table_div');
    var table = document.createElement('table');
    table.setAttribute('id', 'table');


    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    var th3b = document.createElement('th');
    var th4 = document.createElement('th');
    var th5 = document.createElement('th');
    var th6 = document.createElement('th');
    var th7 = document.createElement('th');
    var th1text = document.createTextNode('ID');
    var th2text = document.createTextNode('First Name');
    var th3text = document.createTextNode('Last Name');
    var th3btext = document.createTextNode('Birthdate');
    var th4text = document.createTextNode('Tuition Fees');
    var th5text = document.createTextNode('Courses');
    var th6text = document.createTextNode('Assignments');
    th1.appendChild(th1text);
    th2.appendChild(th2text);
    th3.appendChild(th3text);
    th3b.appendChild(th3btext);
    th4.appendChild(th4text);
    th5.appendChild(th5text);
    th6.appendChild(th6text);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th3b);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    tr.appendChild(th7);
    thead.appendChild(tr);
    table.appendChild(thead);
    th7.innerHTML = `<div title="Add" class="margin-auto d-flex justify-content-center">
                    <i class="fa fa-plus fa-lg align-self-center" aria-hidden="true"></i>
                </div>`;
    th7.classList.add('margin-auto', 'd-flex', 'justify-content-center');

    var tbody = document.createElement('tbody');
    var tr2 = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td3b = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td1text = document.createTextNode(Data.Students.Entities[0].ID);
    var td2text = document.createTextNode(Data.Students.Entities[0].firstName);
    var td3text = document.createTextNode(Data.Students.Entities[0].lastName);
    var td3btext = document.createTextNode(Data.Students.Entities[0].dateOfBirth);
    var td4text = document.createTextNode(Data.Students.Entities[0].tuitionFees);
    var td5text = document.createTextNode('Courses');
    var td6text = document.createTextNode('Assignments');
    td1.appendChild(td1text);
    td2.appendChild(td2text);
    td3.appendChild(td3text);
    td3b.appendChild(td3btext);
    td4.appendChild(td4text);
    td5.appendChild(td5text);
    td6.appendChild(td6text);
    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td3b);
    tr2.appendChild(td4);
    tr2.appendChild(td5);
    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tbody.appendChild(tr2);
    table.appendChild(tbody);
    td7.innerHTML = `<div class="margin-auto d-flex justify-content-center" title="Edit">
                    <i class="fa fa-pencil fa-lg align-self-center" aria-hidden="true"></i>
                </div>
                <div class="margin-auto d-flex justify-content-center" title="Delete">
                    <i class="fa fa-trash fa-lg align-self-center" aria-hidden="true"></i>
                </div>`;
    td7.classList.add('margin-auto', 'd-flex', 'justify-content-center');

    var tr3 = document.createElement('tr');
    var atd1 = document.createElement('td');
    var atd2 = document.createElement('td');
    var atd3 = document.createElement('td');
    var atd3b = document.createElement('td');
    var atd4 = document.createElement('td');
    var atd5 = document.createElement('td');
    var atd6 = document.createElement('td');
    var atd7 = document.createElement('td');
    var atd1text = document.createTextNode(Data.Students.Entities[1].ID);
    var atd2text = document.createTextNode(Data.Students.Entities[1].firstName);
    var atd3text = document.createTextNode(Data.Students.Entities[1].lastName);
    var atd3btext = document.createTextNode(Data.Students.Entities[1].dateOfBirth);
    var atd4text = document.createTextNode(Data.Students.Entities[1].tuitionFees);
    var atd5text = document.createTextNode('Courses');
    var atd6text = document.createTextNode('Assignments');
    atd1.appendChild(atd1text);
    atd2.appendChild(atd2text);
    atd3.appendChild(atd3text);
    atd3b.appendChild(atd3btext);
    atd4.appendChild(atd4text);
    atd5.appendChild(atd5text);
    atd6.appendChild(atd6text);
    tr3.appendChild(atd1);
    tr3.appendChild(atd2);
    tr3.appendChild(atd3);
    tr3.appendChild(atd3b);
    tr3.appendChild(atd4);
    tr3.appendChild(atd5);
    tr3.appendChild(atd6);
    tr3.appendChild(atd7);
    tbody.appendChild(tr3);
    table.appendChild(tbody);
    atd7.innerHTML = `<div class="margin-auto d-flex justify-content-center" title="Edit">
                    <i class="fa fa-pencil fa-lg align-self-center" aria-hidden="true"></i>
                </div>
                <div class="margin-auto d-flex justify-content-center" title="Delete">
                    <i class="fa fa-trash fa-lg align-self-center" aria-hidden="true"></i>
                </div>`;
    atd7.classList.add('margin-auto', 'd-flex', 'justify-content-center');



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



