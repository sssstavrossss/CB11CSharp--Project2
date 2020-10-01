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
        Keys: ["ID", "Title", "Description", "Submission Date", "Students", "Courses"]
    };

    (function () {
        Students.Entities.push(new Students.Constructor(1, "Stavros", "Vasileiadis", 1991, 2000, [1], [2,3]));
        Students.Entities.push(new Students.Constructor(2, "Johann Sebastian", "Bach", 1986, 2500, [2], [1,4]));
        Students.Entities.push(new Students.Constructor(3, "Nikolaos", "Skalkotas", 1977, 2100, [3], [2,4]));
        Students.Entities.push(new Students.Constructor(4, "Giacinto", "Scelsi", 1955, 2400, [1,2], [2,3]));
        Students.Entities.push(new Students.Constructor(5, "Edgard", "Varese", 1988, 3000, [2], [1,3,4]));
        Students.Entities.push(new Students.Constructor(6, "Amadeus", "Mozart", 1991, 2000, [3], [1,2]));
        Students.Entities.push(new Students.Constructor(7, "Ludwig", "van Beethoven", 1992, 2500, [2,3], [2,3]));
        Students.Entities.push(new Students.Constructor(8, "Johann", "Stauess", 1999, 3000, [1,2], [1,4]));
        Students.Entities.push(new Students.Constructor(9, "Igor", "Stravisky", 1974, 2100, [1,3], [2,4]));
        Students.Entities.push(new Students.Constructor(10, "Krzysztof", "Penderecki", 1985, 2400, [1], [1,5]));
        Courses.Entities.push(new Courses.Constructor(1, "C#", "Programming", "Part time", "01/02/2021", "01/08/2021", [1,4,8,9,10], [2,3,1,5], [1]));
        Courses.Entities.push(new Courses.Constructor(2, "Go", "Programming", "Full time", "05/03/2021", "15/06/2021", [2,4,5,7,8], [1,4,2,3], [1,3]));
        Courses.Entities.push(new Courses.Constructor(3, "Java", "Programming", "Full time", "05/03/2021", "15/06/2021", [3,6,7,9], [2,4,1,3], [2]));
        Trainers.Entities.push(new Trainers.Constructor(1, "Ioannes", "Philippidis", "Back End", [1,2]));
        Trainers.Entities.push(new Trainers.Constructor(2, "Constantine", "Palaiologos", "Front End", [3]));
        Trainers.Entities.push(new Trainers.Constructor(3, "Yorgo", "Papadopoulos", "Back End", [2]));
        Assignments.Entities.push(new Assignments.Constructor(1, "Invididual Project 1", "Individual Project 1 Description", "30/06/2021", [1,2,3], [2,5,6,8,10]));
        Assignments.Entities.push(new Assignments.Constructor(2, "Idividual Project 2", "Individual Project 2 Description", "15/05/2021", [1,2,3], [1,3,4,6,7,9]));
        Assignments.Entities.push(new Assignments.Constructor(3, "Team Project 1", "Team Project 1 Description", "15/06/2021", [1,2,3], [1,4,5,7]));
        Assignments.Entities.push(new Assignments.Constructor(4, "Team Project 2", "Tean Project 2 Description", "01/08/2021", [2,3], [2,3,5,8,9]));
        Assignments.Entities.push(new Assignments.Constructor(5, "Individual Project 3", "Individual Project 3 Description", "05/04/2021", [5], [10]));
    })();
    
    return [ { Students }, { Courses }, { Trainers }, { Assignments } ]; 

}

//table creation self invoked funtion
(function (Data) {

    console.log(Data);

    var HeaderHtml = `<th><i class="icofont-plus-circle icofont-2x" title="add"></i></th>`;
    var BodyHtml = `<td><i class="icofont-gear icofont-2x" title="edit"></i>
                    <i class="icofont-bin icofont-2x" title="remove"></i></td>`;


    jQuery.map(Data, function (Obj, i) { CreateTable(Obj) });

    function CreateTable(Obj) {

        var objkey = Object.keys(Obj);
        var divid = `#table_div_${objkey}`;
        var tableid = `table_data_${objkey}`;
        var div = $(divid);

        var table = $('<table>');
        table.attr('id', tableid);

        //CREATE HEAD
        var tharray = CreateTHeadTh(); //to create an array of th elements and append them to thead tr

        var thead = $('<thead>')
            .append($('<tr>')
                .append([
                    tharray,
                    HeaderHtml
                ]));

        function CreateTHeadTh() {
            var ar = [];
            jQuery.map(Obj[objkey].Keys, function (v, i) { ar.push(`<th>${v}</th>`) });
            return ar;
        }

        //CREATE BODY

        var trarray = CreateTBodyTr(); //to create an array of tr elements and append them to tbody

        var tbody = $('<tbody>')
            .append([
                trarray
            ]);

        //console.log(Obj[objkey].Entities);

        function CreateTBodyTr() {
            var ar = [];
            for (var item of Obj[objkey].Entities) {
                //console.log(item);
                //console.log(Object.keys(item));
                ar.push(`<tr>${CreateTBodyTh(item, Object.keys(item))}</tr>`);
            }
            return ar;
        }

        function CreateTBodyTh(item, key) {
            var ar = [];
            jQuery.map(item, function (v, i) {
                if (jQuery.isArray(v)) {
                    ar.push(`<td><ul class="no-bullets">${v}</ul></td>`);
                } else {
                    ar.push(`<td>${v}</td>`);
                }
            });
            ar.push(BodyHtml);
            return ar;
        }

        function GetUl(item) {
            var li;
            for (var val of item) {
                console.log(val);
                li += `<li>${val}</li>`;
            }
            return li;
        }

        table.append([
            thead,
            tbody
        ]);
        div.append(table);
        
    }

})(Data());



