//Dataset

//Main data function with objects and initiation of objects
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
        Return: function () { return this.Entities },
        Keys: ["ID", "Title", "Stream", "Type", "Start Date", "End Date", "Students", "Assignments", "Trainers"]
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
        Return: function () { return this.Entities },
        Keys: ["ID", "First Name", "Last Name", "Subject", "Courses"]
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
        Return: function () { return this.Entities },
        Keys: ["ID", "Title", "Description", "Submission Date", "Students", "Courses"]
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

    (function () {
        Students.Entities[0].Courses.push(Courses.Entities[0]);
        Students.Entities[0].Assignments.push(Assignments.Entities[0]);
        Students.Entities[0].Assignments.push(Assignments.Entities[2]);
        Students.Entities[1].Courses.push(Courses.Entities[0]);
        Students.Entities[1].Assignments.push(Assignments.Entities[0]);
        Students.Entities[1].Assignments.push(Assignments.Entities[1]);
        Students.Entities[2].Courses.push(Courses.Entities[1]);
        Students.Entities[2].Assignments.push(Assignments.Entities[2]);
        Students.Entities[3].Courses.push(Courses.Entities[1]);
        Students.Entities[3].Assignments.push(Assignments.Entities[3]);
        Students.Entities[3].Assignments.push(Assignments.Entities[4]);
        Students.Entities[4].Courses.push(Courses.Entities[0]);
        Students.Entities[4].Courses.push(Courses.Entities[1]);
        Students.Entities[4].Assignments.push(Assignments.Entities[1]);
        Students.Entities[5].Courses.push(Courses.Entities[1]);
        Students.Entities[5].Courses.push(Courses.Entities[0]);
        Students.Entities[5].Assignments.push(Assignments.Entities[4]);
        Students.Entities[5].Assignments.push(Assignments.Entities[0]);
        Students.Entities[6].Courses.push(Courses.Entities[0]);
        Students.Entities[6].Assignments.push(Assignments.Entities[0]);
        Students.Entities[6].Assignments.push(Assignments.Entities[2]);
        Students.Entities[6].Assignments.push(Assignments.Entities[3]);
        Students.Entities[7].Courses.push(Courses.Entities[1]);
        Students.Entities[7].Assignments.push(Assignments.Entities[4]);
        Students.Entities[8].Courses.push(Courses.Entities[0]);
        Students.Entities[8].Assignments.push(Assignments.Entities[3]);
        Students.Entities[9].Courses.push(Courses.Entities[0]);
        Students.Entities[9].Assignments.push(Assignments.Entities[2]);
    })();
    
    return [Students , Courses , Trainers , Assignments ]; 

}

//table creation self invoked funtion
(function (Data) {

    var HeaderHtml = `<i class="icofont-plus-circle icofont-2x" title="add"></i>`;
    var BodyHtml = `<i class="icofont-gear icofont-2x" title="edit"></i>
                    <i class="icofont-bin icofont-2x" title="remove"></i>`;

    //var Key = ["Trainers","Assignments","Students","Courses"];

    var i = 0;

    for (var Dt of Data) {

        //console.log(Object.keys(Dt.Entities[0]));

        var table = document.createElement('table');

        if (i == 0) {
            var div = document.getElementById('table_div_Students');
            table.setAttribute('id', 'table_data_Students');
        } else if (i == 1) {
            var div = document.getElementById('table_div_Courses');
            table.setAttribute('id', 'table_data_Courses');
        } else if (i == 2) {
            var div = document.getElementById('table_div_Trainers');
            table.setAttribute('id', 'table_data_Trainers');
        } else if (i == 3) {
            var div = document.getElementById('table_div_Assignments');
            table.setAttribute('id', 'table_data_Assignments');
        }
        
        //var n = Object.keys(Dt);
        //console.log(Dt.Keys);

        (function () {
            var thead = document.createElement('thead');
            var tr = document.createElement('tr');
            for (var item of Dt.Keys) {
                var th = document.createElement('th');
                var thtext = document.createTextNode(item);
                th.appendChild(thtext);
                tr.appendChild(th);
            }
            var thLast = document.createElement('th');
            tr.appendChild(thLast);
            thead.appendChild(tr);
            table.appendChild(thead);
            thLast.innerHTML = HeaderHtml;
        })();

        //var st = Object.keys(Data[0]);

        (function () {
            var tbody = document.createElement('tbody');
            var EntitiesKeys = Object.keys(Dt.Entities[0]);
            for (var item of Dt.Entities) {
               // console.log(item['ID']);
                (function () {
                    var tr = document.createElement('tr');
                    for (var item2 of EntitiesKeys) {
                        //console.log(item[item2]);
                        var text = "";
                        if (Array.isArray(item[item2])) {
                           //console.log(1);
                            var ul = document.createElement('ul')
                            for (var item3 of item[item2]) {
                                if (item3.title) {
                                    var li = document.createElement('li');
                                    var litext = document.createTextNode(item3.title);
                                    li.appendChild(litext);
                                }
                                if (item3.firstName) {
                                    text = text + item.fistName + " " + item.lastName;
                                }
                                ul.appendChild(li);
                            }
                        } else {
                            //console.log(2);
                            text = item[item2];

                        }
                        if (text) {
                            var td = document.createElement('td');
                            var tdtext = document.createTextNode(text);
                            td.appendChild(tdtext);
                            tr.appendChild(td);
                        }
                        if (ul) {
                            ul.classList.add('no-bullets');
                            var td = document.createElement('td');
                            td.appendChild(ul);
                            tr.appendChild(td);
                        }
                    }
                    var tdLast = document.createElement('td');
                    tr.appendChild(tdLast);
                    tbody.appendChild(tr);
                    table.appendChild(tbody);
                    tdLast.innerHTML = BodyHtml;
                    tr.setAttribute('data-id', item.ID);
                    if (i === 0) {
                        tr.setAttribute('data-type', 'Students');
                    } else if (i === 1) {
                        tr.setAttribute('data-type', 'Courses');
                    } else if (i === 2) {
                        tr.setAttribute('data-type', 'Trainers');
                    } else if (i === 3) {
                        tr.setAttribute('data-type', 'Assignments');
                    }
                })();
            }
            table.appendChild(tbody);
        })();
        //console.log(div);

        div.appendChild(table);
        i++;
    }

})(Data());



