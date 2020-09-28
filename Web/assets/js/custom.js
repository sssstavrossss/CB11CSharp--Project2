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
        Return: function () { return this.Entities }, 
        Keys: ["ID", "First Name", "Last Name", "Birthdate", "Tuition Fees", "Courses", "Assignments"]
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

    var div = document.getElementById('table_div');
    var table = document.createElement('table');
    table.setAttribute('id', 'table');

    //var EntitiesKeys = Object.keys(Data.Students.Entities[0]);
    //console.log(EntitiesKeys);
    //EntitiesKeys.push()

    var StudentHeaderHtml = `<div title="Add" class="margin-auto d-flex justify-content-center">
                    <i class="fa fa-plus fa-lg align-self-center" aria-hidden="true"></i>
                </div>`;
    var StudentBodyHtml = `<div class="margin-auto d-flex justify-content-center" title="Edit">
                    <i class="fa fa-pencil fa-lg align-self-center" aria-hidden="true"></i>
                </div>
                <div class="margin-auto d-flex justify-content-center" title="Delete">
                    <i class="fa fa-trash fa-lg align-self-center ml-1" aria-hidden="true"></i>
                </div>`;

    var HeaderClasses1 = 'margin-auto';
    var HeaderClasses2 = 'd-flex';
    var HeaderClasses3 = 'justify-content-center';

    (function () {
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        for (var item of Data.Students.Keys) {
            var th = document.createElement('th');
            var thtext = document.createTextNode(item);
            th.appendChild(thtext);
            tr.appendChild(th);
        }
        var thLast = document.createElement('th');
        tr.appendChild(thLast);
        thead.appendChild(tr);
        table.appendChild(thead);
        thLast.innerHTML = StudentHeaderHtml;
        thLast.classList.add(HeaderClasses1, HeaderClasses2, HeaderClasses3);
    })();

    (function (Data) {
        var tbody = document.createElement('tbody');
        var EntitiesKeys = Object.keys(Data.Students.Entities[0]);
        for (var item of Data.Students.Entities) {
            (function (item, key) {
                var tr = document.createElement('tr');
                for (var item2 of key) {
                    var td = document.createElement('td');
                    var tdtext = document.createTextNode(item[item2]);
                    td.appendChild(tdtext);
                    tr.appendChild(td);
                }
                var tdLast = document.createElement('td');
                tr.appendChild(tdLast);
                tbody.appendChild(tr);
                table.appendChild(tbody);
                tdLast.innerHTML = StudentBodyHtml;
                tdLast.classList.add(HeaderClasses1, HeaderClasses2, HeaderClasses3);
            })(item, EntitiesKeys);
        }
        table.appendChild(tbody);
    })(Data);

    div.appendChild(table);

})(Data());



