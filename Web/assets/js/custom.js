//Data and Creating Tables

//Main data function with objects and initiation of objects
function Data() {

    //Bellow ar the objects i need for the Assignments, which this function returns as list of objects
    //They include the entity contructor, the entity list so i can store the values, and the key list so i have proper table 'head tr th' values

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

    //Stupid long function to add data to objects above :(
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
        Assignments.Entities.push(new Assignments.Constructor(2, "Idividual Project 2", "Individual Project 2 Description", "15/05/2021", [], []));
        Assignments.Entities.push(new Assignments.Constructor(3, "Team Project 1", "Team Project 1 Description", "15/06/2021", [], []));
        Assignments.Entities.push(new Assignments.Constructor(4, "Team Project 2", "Tean Project 2 Description", "01/08/2021", [], []));
        Assignments.Entities.push(new Assignments.Constructor(5, "Individual Project 3", "Individual Project 3 Description", "05/04/2021", [], []));
        Students.Entities[0].Courses.push(Courses.Entities[0]);
        Students.Entities[0].Assignments.push(Assignments.Entities[1]);
        Students.Entities[0].Assignments.push(Assignments.Entities[2]);
        Students.Entities[1].Courses.push(Courses.Entities[1]);
        Students.Entities[1].Assignments.push(Assignments.Entities[0]);
        Students.Entities[1].Assignments.push(Assignments.Entities[3]);
        Students.Entities[2].Courses.push(Courses.Entities[2]);
        Students.Entities[2].Assignments.push(Assignments.Entities[1]);
        Students.Entities[2].Assignments.push(Assignments.Entities[3]);
        Students.Entities[3].Courses.push(Courses.Entities[0]);
        Students.Entities[3].Courses.push(Courses.Entities[1]);
        Students.Entities[3].Assignments.push(Assignments.Entities[1]);
        Students.Entities[3].Assignments.push(Assignments.Entities[2]);
        Students.Entities[4].Courses.push(Courses.Entities[1]);
        Students.Entities[4].Assignments.push(Assignments.Entities[0]);
        Students.Entities[4].Assignments.push(Assignments.Entities[2]);
        Students.Entities[4].Assignments.push(Assignments.Entities[3]);
        Students.Entities[5].Courses.push(Courses.Entities[2]);
        Students.Entities[5].Assignments.push(Assignments.Entities[0]);
        Students.Entities[5].Assignments.push(Assignments.Entities[1]);
        Students.Entities[6].Courses.push(Courses.Entities[1]);
        Students.Entities[6].Courses.push(Courses.Entities[2]);
        Students.Entities[6].Assignments.push(Assignments.Entities[1]);
        Students.Entities[6].Assignments.push(Assignments.Entities[2]);
        Students.Entities[7].Courses.push(Courses.Entities[0]);
        Students.Entities[7].Courses.push(Courses.Entities[1]);
        Students.Entities[7].Assignments.push(Assignments.Entities[0]);
        Students.Entities[7].Assignments.push(Assignments.Entities[3]);
        Students.Entities[8].Courses.push(Courses.Entities[0]);
        Students.Entities[8].Courses.push(Courses.Entities[2]);
        Students.Entities[8].Assignments.push(Assignments.Entities[1]);
        Students.Entities[8].Assignments.push(Assignments.Entities[3]);
        Students.Entities[9].Courses.push(Courses.Entities[0]);
        Students.Entities[9].Assignments.push(Assignments.Entities[0]);
        Students.Entities[9].Assignments.push(Assignments.Entities[4]);
        Courses.Entities[0].Students.push(Students.Entities[0]);
        Courses.Entities[0].Students.push(Students.Entities[3]);
        Courses.Entities[0].Students.push(Students.Entities[7]);
        Courses.Entities[0].Students.push(Students.Entities[8]);
        Courses.Entities[0].Students.push(Students.Entities[9]);
        Courses.Entities[0].Assignments.push(Assignments.Entities[0]);
        Courses.Entities[0].Assignments.push(Assignments.Entities[1]);
        Courses.Entities[0].Assignments.push(Assignments.Entities[2]);
        Courses.Entities[0].Assignments.push(Assignments.Entities[4]);
        Courses.Entities[0].Trainers.push(Trainers.Entities[0]);
        Courses.Entities[1].Students.push(Students.Entities[1]);
        Courses.Entities[1].Students.push(Students.Entities[3]);
        Courses.Entities[1].Students.push(Students.Entities[4]);
        Courses.Entities[1].Students.push(Students.Entities[6]);
        Courses.Entities[1].Students.push(Students.Entities[7]);
        Courses.Entities[1].Assignments.push(Assignments.Entities[0]);
        Courses.Entities[1].Assignments.push(Assignments.Entities[1]);
        Courses.Entities[1].Assignments.push(Assignments.Entities[2]);
        Courses.Entities[1].Assignments.push(Assignments.Entities[3]);
        Courses.Entities[1].Trainers.push(Trainers.Entities[0]);
        Courses.Entities[1].Trainers.push(Trainers.Entities[2]);
        Courses.Entities[2].Students.push(Students.Entities[2]);
        Courses.Entities[2].Students.push(Students.Entities[5]);
        Courses.Entities[2].Students.push(Students.Entities[6]);
        Courses.Entities[2].Students.push(Students.Entities[8]);
        Courses.Entities[2].Assignments.push(Assignments.Entities[0]);
        Courses.Entities[2].Assignments.push(Assignments.Entities[2]);
        Courses.Entities[2].Assignments.push(Assignments.Entities[3]);
        Courses.Entities[2].Assignments.push(Assignments.Entities[4]);
        Courses.Entities[2].Trainers.push(Trainers.Entities[1]);
        Trainers.Entities[0].Courses.push(Courses.Entities[0]);
        Trainers.Entities[0].Courses.push(Courses.Entities[1]);
        Trainers.Entities[1].Courses.push(Courses.Entities[2]);
        Trainers.Entities[2].Courses.push(Courses.Entities[1]);
        Assignments.Entities[0].Courses.push(Courses.Entities[0]);
        Assignments.Entities[0].Courses.push(Courses.Entities[1]);
        Assignments.Entities[0].Courses.push(Courses.Entities[2]);
        Assignments.Entities[0].Students.push(Students.Entities[1]);
        Assignments.Entities[0].Students.push(Students.Entities[4]);
        Assignments.Entities[0].Students.push(Students.Entities[5]);
        Assignments.Entities[0].Students.push(Students.Entities[7]);
        Assignments.Entities[0].Students.push(Students.Entities[9]);
        Assignments.Entities[1].Courses.push(Courses.Entities[0]);
        Assignments.Entities[1].Courses.push(Courses.Entities[1]);
        Assignments.Entities[1].Courses.push(Courses.Entities[2]);
        Assignments.Entities[1].Students.push(Students.Entities[0]);
        Assignments.Entities[1].Students.push(Students.Entities[2]);
        Assignments.Entities[1].Students.push(Students.Entities[3]);
        Assignments.Entities[1].Students.push(Students.Entities[5]);
        Assignments.Entities[1].Students.push(Students.Entities[6]);
        Assignments.Entities[1].Students.push(Students.Entities[8]);
        Assignments.Entities[2].Courses.push(Courses.Entities[0]);
        Assignments.Entities[2].Courses.push(Courses.Entities[1]);
        Assignments.Entities[2].Courses.push(Courses.Entities[2]);
        Assignments.Entities[2].Students.push(Students.Entities[0]);
        Assignments.Entities[2].Students.push(Students.Entities[3]);
        Assignments.Entities[2].Students.push(Students.Entities[4]);
        Assignments.Entities[2].Students.push(Students.Entities[6]);
        Assignments.Entities[3].Courses.push(Courses.Entities[1]);
        Assignments.Entities[3].Courses.push(Courses.Entities[2]);
        Assignments.Entities[3].Students.push(Students.Entities[1]);
        Assignments.Entities[3].Students.push(Students.Entities[2]);
        Assignments.Entities[3].Students.push(Students.Entities[4]);
        Assignments.Entities[3].Students.push(Students.Entities[7]);
        Assignments.Entities[3].Students.push(Students.Entities[9]);
        Assignments.Entities[4].Courses.push(Courses.Entities[2]);
        Assignments.Entities[4].Students.push(Students.Entities[9]);
    })();

    return { Students: Students, Courses: Courses, Trainers: Trainers, Assignments: Assignments }; 

}

//table creation self invoked funtion
(function (Data) {

    //Creating static text for elements for buttons in last column of table
    var HeaderHtml = `<th><i class="icofont-plus-circle icofont-2x" title="add"></i></th>`;
    var BodyHtml = `<td><i class="icofont-gear icofont-2x" title="edit"></i>
                    <i class="icofont-bin icofont-2x" title="remove"></i></td>`;

    //To loop accordingly to Data return objects
    jQuery.map(Data, function (value, index) { CreateTable(value, index) });

    function CreateTable(DtValue, DtIndex) {

        //Creating proper ids 
        var divid = `#table_div_${DtIndex}`;
        var tableid = `table_data_${DtIndex}`;
        var div = $(divid);

        //Create Header
        var header = `<h2 class="pt-1">Manage ${DtIndex} Data</h2>`;

        //Initiate Table
        var table = $('<table>');
        table.attr('id', tableid);

        //Create Head
        var tharray = CreateTHeadTh(); //to create an array of th elements and append them to thead tr

        var thead = $('<thead>') //Doing head Appends
            .append($('<tr>')
                .append([
                    tharray,
                    HeaderHtml
                ]));

        function CreateTHeadTh() { //To get each head th
            var ar = [];
            jQuery.map(DtValue.Keys, function (v) { ar.push(`<th>${v}</th>`) });
            return ar;
        }

        //Create Body
        var trarray = CreateTBodyTr(); //to create an array of tr elements and append them to tbody

        var tbody = $('<tbody>') //Doing body Appends
            .append([
                trarray
            ]);

        function CreateTBodyTr() { //To get each body tr
            var ar = [];
            jQuery.map(DtValue.Entities, function (val) { ar.push(`<tr>${CreateTBodyTrTd(val)}</tr>`) });
            return ar;
        }

        function CreateTBodyTrTd(val) { //To get each body tr td
            var ar = [];
            jQuery.map(val, function (v, i) { ar.push(`<td>${GetTBodyTrTd(v, i)}</td>`) });
            ar.push(BodyHtml);
            return ar;
        }

        function GetTBodyTrTd(v, i) { //To add proper value to body tr td
            var td = "";
            if (jQuery.isArray(v)) {
                td += `<ul class="no-bullets">${GetTBodyTrTdUl(v, i)}</ul>`;
            } else {
                td = v;
            }
            return td;
        }

        function GetTBodyTrTdUl(v, i) { //To add ul in case body tr td is a list
            var li = "";
            if (i === "Courses" || i === "Assignments") {
                for (var item of v) {
                    li += `<li>${item.title}</li>`;
                }
            } else {
                for (var item of v) {
                    li += `<li>${item.firstName + " " + item.lastName}</li>`;
                }
            }
            return li;
        }

        //Doing Appends
        table.append([
            thead,
            tbody
        ]);

        div.append([
            header,
            table]);

    }

})(Data());



