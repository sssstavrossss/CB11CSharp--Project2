//Data - Creating Tables - Creating Forms - Manipulating Data


//Bellow ar the objects i need for the Assignments,
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
    Keys: ["ID", "First Name", "Last Name", "Birthdate", "Tuition Fees", "Courses", "Assignments"],
    RemoveSelf: function RemoveSelf(id) {
        this.Entities = $.grep(this.Entities, function (e) { //remove the specific entity from array where id taken from above
            return e.ID != id;
        });
    },
    RemoveCourses: function RemoveCourses(id) {
        for (var item of this.Entities) {
            item.Courses = $.grep(item.Courses, function (e) {
                return e.ID != id;
            });
        }
    },
    RemoveAssignments: function RemoveAssignments(id) {
        for (var item of this.Entities) {
            item.Assignments = $.grep(item.Assignments, function (e) {
                return e.ID != id;
            });
        }
    }
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
    Keys: ["ID", "Title", "Stream", "Type", "Start Date", "End Date", "Students", "Assignments", "Trainers"],
    RemoveSelf: function RemoveSelf(id) {
        this.Entities = $.grep(this.Entities, function (e) { //remove the specific entity from array where id taken from above
            return e.ID != id;
        });
    },
    RemoveAssignments: function RemoveAssignments(id) {
        for (var item of this.Entities) {
            item.Assignments = $.grep(item.Assignments, function (e) {
                return e.ID != id;
            });
        }
    },
    RemoveStudents: function RemoveStudents(id) {
        for (var item of this.Entities) {
            item.Students = $.grep(item.Students, function (e) {
                return e.ID != id;
            });
        }
    },
    RemoveTrainers: function Remove(id) {
        for (var item of this.Entities) {
            item.Trainers = $.grep(item.Trainers, function (e) {
                return e.ID != id;
            });
        }
    }
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
    Keys: ["ID", "First Name", "Last Name", "Subject", "Courses"],
    RemoveSelf: function RemoveSelf(id) {
        this.Entities = $.grep(this.Entities, function (e) { //remove the specific entity from array where id taken from above
            return e.ID != id;
        });
    },
    RemoveCourses: function RemoveCourses(id) {
        for (var item of this.Entities) {
            item.Courses = $.grep(item.Courses, function (e) {
                return e.ID != id;
            });
        }
    }
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
    Keys: ["ID", "Title", "Description", "Submission Date", "Students", "Courses"],
    RemoveSelf: function RemoveSelf(id) {
        this.Entities = $.grep(this.Entities, function (e) { //remove the specific entity from array where id taken from above
            return e.ID != id;
        });
    },
    RemoveCourses: function RemoveCourses(id) {
        for (var item of this.Entities) {
            item.Courses = $.grep(item.Courses, function (e) {
                return e.ID != id;
            });
        }
    },
    RemoveStudents: function RemoveStudents(id) {
        for (var item of this.Entities) {
            item.Students = $.grep(item.Students, function (e) {
                return e.ID != id;
            });
        }
    }
};

//Stupid long function to add data to objects above :(
(function() {
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


// DATA Main data function with objects and initiation of objects
function Data(Students, Courses, Asignments, Trainers) {
    return { Students: this.Students, Courses: this.Courses, Trainers: this.Trainers, Assignments: this.Assignments }; 
}


//Display & Create Table $Querry
//Instructions
$("nav ul :nth-child(1) a").click(function () {
    $('#myForms').hide();
    $(".instructions").show();
    $("#table_div").hide();
    //CreateTable(Data());
});
//Courses Table
$("nav ul :nth-child(2) a").click(function () {
    $('#myForms').hide();
    $(".instructions").hide();
    var DtIndex = "Courses";
    CreateTable(Data(), Data().Courses, DtIndex);
});
//Students Table
$("nav ul :nth-child(3) a").click(function () {
    $('#myForms').hide();
    $(".instructions").hide();
    var DtIndex = "Students";
    CreateTable(Data(), Data().Students, DtIndex);
});
//Trainers Table
$("nav ul :nth-child(4) a").click(function () {
    $('#myForms').hide();
    $(".instructions").hide();
    var DtIndex = "Trainers";
    CreateTable(Data(), Data().Trainers, DtIndex);
});
//Assignments Table
$("nav ul :nth-child(5) a").click(function () {
    $('#myForms').hide();
    $(".instructions").hide();
    var DtIndex = "Assignments";
    CreateTable(Data(), Data().Assignments, DtIndex);
});

//CREATING TABLES
function CreateTable(Data, DtValue, DtIndex) {

    //console.log(Data);

    //Creating static text for elements for buttons in last column of table
    var HeaderHtml = `<th><i class="icofont-plus-circle icofont-2x" title="add" id="openForms"></i></th>`;
    var BodyHtml = `<td><i class="icofont-gear icofont-2x" title="edit"></i>
                    <i class="icofont-bin icofont-2x" title="remove"></i></td>`;

    //Creating proper ids 
    var divid = `#table_div`;
    var tableid = `table_data_${DtIndex}`;
    var div = $(divid);
    div.hide();
    div.empty(); //emptying table div to create a new one

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
        //console.log(DtValue.Keys);
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

    (function () {
        //console.log(`#table_data_${DtIndex}`);
        $(`#table_data_${DtIndex}`).DataTable();
    })();


    div.show();

    //DISPLAY - CREATING FORMS 
    //select table head icon 'plus'
    $('thead > tr > th > i').click(function () {
        CreateRowForm(Data, DtValue, DtIndex, 1);
        $('#myForms').width('400px');
        $('#myForms').show();
    });

    //select table body icon first child 'gear'
    $('tbody > tr > td > i:even').click(function () {
        var id = parseInt($(this).closest('tr').find('td:first').html());
        //console.log(id, DtIndex);
        //jQuery.map(DtValue.Entities[id], function (v, i) { console.log(v, i) });
        CreateRowForm(Data, DtValue, DtIndex, 2);

        var val = DtValue.Entities; // I need to isolate the specific entity

        Remove(id);

        function Remove(id) {
            val = $.grep(val, function (e) {
                return e.ID == id;
            });
        }

        ManipulateRowForm(val, DtIndex);
        $('#myForms').width('400px');
        $('#myForms').show();
    });

    //select table body icon second child 'bin'
    $('tbody > tr > td > i:odd').click(function () {
        var id = parseInt($(this).closest('tr').find('td:first').html()); //to get the row id i want to delete
        $(this).closest('tr').remove(); // removing the row
        DtValue.RemoveSelf(id);
        DynamicData(DtIndex, id); //function to remove the specific deleted field from other tables entries
    });

    //select forms close btn
    $('#myForms a').eq(0).click(function () {
        $('#myForms').width('0px');
        $('#myForms').hide();
    });

    

}

//CREATING FORMS
//Add entity form
function CreateRowForm(Data, DtValue, DtIndex, k) {
    //console.log(k);

    var div = $('#form-data');
    div.empty();

    var form = $('<form>');

    var input = "";

    var key = Object.keys(DtValue.Entities[0])

    if (key.includes("firstName")) {
        input += `<label for="firstName class="font-weight-bold">First Name</label>
                    <input type="text" id="firstName" name="firstName" minlength="3" maxlength="25" pattern="[a-zA-Z]+" required
                    placeholder="eg Steven"/><br>`;
    }
    if (key.includes("lastName")) {
        input += `<label for="lastName" class="font-weight-bold">Last Name</label>
                    <input type="text" id="lastName" name="lastName"  minlength="3" maxlength="25" pattern="[a-zA-Z]+" required
                    placeholder="eg Papadopoulos"/><br>`;
    }
    if (key.includes("title")) {
        input += `<label for="title" class="font-weight-bold">Title</label>
                    <input type="text" id="title" name="title"  minlength="3" maxlength="25" pattern="[a-zA-Z0-9]+" required
                    placeholder="eg Javascript"/><br>`;
    }
    if (key.includes("description")) {
        input += `<label for="description" class="font-weight-bold">Description</label>
                    <input type="text" id="description" name="description"  minlength="3" maxlength="50" pattern="[a-zA-Z0-9]+" required
                    placeholder="eg Web development and front end"/><br>`;
    }
    if (key.includes("tuitionFees")) {
        input += `<label for="tuitionFees" class="font-weight-bold">Tuition Fees</label>
                    <input type="text" id="tuitionFees" name="tuitionFees"  minlength="3" maxlength="4" pattern="[0-9]+" required
                    placeholder="eg 3000"/><br>`;
    }
    if (key.includes("dateOfBirth")) {
        input += `<label for="dateOfBirth" class="font-weight-bold">Birth Year</label>
                    <input type="text" id="dateOfBirth" name="dateOfBirth"  minlength="4" maxlength="4"  pattern="[0-9]+" required
                    placeholder="eg 1991"/><br>`;
    }
    if (key.includes("subject")) {
        input += `<label for="subject" class="font-weight-bold">Subject</label>
                    <input type="text" id="subject" name="subject"  minlength="3" maxlength="25"  pattern="[a-zA-Z]+" required
                    placeholder="eg Front End"/><br>`;
    }
    if (key.includes("stream")) {
        input += `<label for="stream" class="font-weight-bold">Stream</label>
                    <input type="text" id="stream" name="stream"  minlength="3" maxlength="25"  pattern="[a-zA-Z]+" required
                    placeholder="eg Stream"/><br>`;
    }
    if (key.includes("type")) {
        input += `<label for="type" class="font-weight-bold">Type</label>
                    <input type="text" id="type" name="type"  minlength="3" maxlength="25"  pattern="[a-zA-Z]+" required
                    placeholder="eg Web development"/><br>`;
    }
    if (key.includes("subDateTime")) {
        input += `<label for="subDateTime" class="font-weight-bold">Submission Date</label>
                    <input type="date" id="subDateTime" name="subDateTime" required/><br>`;
    }
    if (key.includes("startDate")) {
        input += `<label for="startDate" class="font-weight-bold">Start Date</label>
                    <input type="date" id="startDate" name="startDate" required/><br>`;
    }
    if (key.includes("endDate")) {
        input += `<label for="endDate" class="font-weight-bold">End Date</label>
                    <input type="date" id="endDate" name="endDate" required/><br>`;
    }
    if (key.includes("Students")) {
        input += `<label class="pt-2 font-weight-bold">Assign Students</label><br>
                    ${PickStudents(Data.Students.Entities)}`;
    }
    if (key.includes("Courses")) {
        input += `<label class="pt-2 font-weight-bold">Assign Courses</label><br>
                    ${PickCourses(Data.Courses.Entities)}`;
    }
    if (key.includes("Assignments")) {
        input += `<label class="pt-2 font-weight-bold">Assign Assignments</label><br>
                    ${PickAssignments(Data.Assignments.Entities)}`;
    }
    if (key.includes("Trainers")) {
        input += `<label class="pt-2 font-weight-bold">Assign Trainers</label><br>
                    ${PickTrainers(Data.Trainers.Entities)}`;
    }

    function PickStudents(Entities) {
        var input = "";
        jQuery.map(Entities, function (v, i) {
            input += `<label style="width: 90%;" for="Students${v.ID}">${v.firstName + " " + v.lastName}</label>
                     <input type="checkbox" id="Students${v.ID}" name="Students${v.ID}" value="${v.ID}" /></br>`;
        });
        return input;
    }

    function PickTrainers(Entities) {
        var input = "";
        jQuery.map(Entities, function (v, i) {
            input += `<label style="width: 90%;" for="Trainers${v.ID}">${v.firstName + " " + v.lastName}</label>
                     <input type="checkbox" id="Trainers${v.ID}" name="Trainers${v.ID}" value="${v.ID}" /></br>`;
        });
        return input;
    }

    function PickCourses(Entities) {
        var input = "";
        jQuery.map(Entities, function (v, i) {
            input += `<label style="width: 90%;" for="Courses${v.ID}">${v.title}</label>
                     <input type="checkbox" id="Courses${v.ID}" name="Courses${v.ID}" value="${v.ID}" /></br>`;
        });
        return input;
    }

    function PickAssignments(Entities) {
        var input = "";
        jQuery.map(Entities, function (v, i) {
            input += `<label style="width: 90%;" for="Assignments${v.ID}">${v.title}</label>
                     <input type="checkbox" id="Assignments${v.ID}" name="Assignments${v.ID}" value="${v.ID}" /></br>`;
        });
        return input;
    }

    form.attr('id', 'form');

    $('#form-data').addClass('pl-3 pl-4 mt-1');



    form.append([
        input
    ]);

    var btn = `<button type="submit" form="form" value="Submit" class="mt-5 ml-3" id="form-submit">Submit</button>`;

    div.append([
        form,
        btn
    ]);

    //Prevent Default
    $('#form').submit(function (event) {
        event.preventDefault();

        if (k === 1) {

            if (DtIndex === "Courses") {
                var ID;
                var arID = [];
                var title;
                var stream;
                var type;
                var startDate;
                var endDate;
                var Students = [];
                var Assignments = [];
                var Trainers = [];
                jQuery.map(DtValue.Entities, function (v) {
                    arID.push(v.ID);
                });

                ID = Math.max.apply(Math, arID) + 1;
                title = $('#title').val();
                stream = $('#stream').val();
                type = $('#type').val();
                startDate = $('#startDate').val();
                endDate = $('#endDate').val();
                //console.log(Data.Students.Entities);

                var st = $('[id^="Students"]');
                var arst = [];

                for (var item of st) {
                    //console.log(item.checked)
                    if (item.checked) {
                        arst.push(item.value);
                    }
                }

                jQuery.map(Data.Students['Entities'], function (v) {
                    for (var item of arst) {
                        if (item == v.ID) {
                            Students.push(v);
                        }
                    }
                });

                var as = $('[id^="Assignments"]');
                var aras = [];

                for (var item of as) {
                    //console.log(item.checked)
                    if (item.checked) {
                        aras.push(item.value);
                    }
                }

                jQuery.map(Data.Assignments['Entities'], function (v) {
                    for (var item of aras) {
                        if (item == v.ID) {
                            Assignments.push(v);
                        }
                    }
                });

                var tr = $('[id^="Trainers"]');
                var artr = [];

                for (var item of tr) {
                    //console.log(item.checked)
                    if (item.checked) {
                        artr.push(item.value);
                    }
                }

                jQuery.map(Data.Trainers['Entities'], function (v) {
                    for (var item of aras) {
                        if (item == v.ID) {
                            Trainers.push(v);
                        }
                    }
                });

                Data.Courses.Entities.push(new Data.Courses.Constructor(ID, title, stream, type, startDate, endDate, Students, Assignments, Trainers));

                for (var item of Students) {
                    jQuery.map(Data.Students['Entities'], function (v) {
                        if (v.ID === item.ID) {
                            jQuery.map(Data.Courses['Entities'], function (v) {
                                item.Courses.push(v);
                            })
                        }
                    })
                }

                for (var item of Assignments) {
                    jQuery.map(Data.Assignments['Entities'], function (v) {
                        if (v.ID === item.ID) {
                            jQuery.map(Data.Courses['Entities'], function (v) {
                                item.Courses.push(v);
                            })
                        }
                    })
                }

                for (var item of Trainers) {
                    jQuery.map(Data.Trainers['Entities'], function (v) {
                        if (v.ID === item.ID) {
                            jQuery.map(Data.Courses['Entities'], function (v) {
                                item.Courses.push(v);
                            })
                        }
                    })
                }

                //console.log(Data.Courses);

            }

            if (DtIndex === "Students") {
                var ID;
                var arID = [];
                var firstName;
                var lastName;
                var dateOfBirth;
                var tuitionFees;
                var Courses = [];
                var Assignments = [];
                jQuery.map(DtValue.Entities, function (v) {
                    arID.push(v.ID);
                });

                ID = Math.max.apply(Math, arID) + 1;
                firstName = $('#firstName').val();
                lastName = $('#lastName').val();
                dateOfBirth = $('#dateOfBirth').val();
                tuitionFees = $('#tuitionFees').val();
                //console.log(Data.Students.Entities);

                var cr = $('[id^="Courses"]');
                var arcr = [];

                for (var item of cr) {
                    //console.log(item.checked)
                    if (item.checked) {
                        arcr.push(item.value);
                    }
                }

                jQuery.map(Data.Courses['Entities'], function (v) {
                    for (var item of arcr) {
                        if (item == v.ID) {
                            Courses.push(v);
                        }
                    }
                });

                var as = $('[id^="Assignments"]');
                var aras = [];

                for (var item of as) {
                    //console.log(item.checked)
                    if (item.checked) {
                        aras.push(item.value);
                    }
                }

                jQuery.map(Data.Assignments['Entities'], function (v) {
                    for (var item of aras) {
                        if (item == v.ID) {
                            Assignments.push(v);
                        }
                    }
                });

                Data.Students.Entities.push(new Data.Students.Constructor(ID, firstName, lastName, dateOfBirth, tuitionFees, Courses, Assignments));

                for (var item of Assignments) {
                    jQuery.map(Data.Assignments['Entities'], function (v) {
                        if (v.ID === item.ID) {
                            jQuery.map(Data.Students['Entities'], function (v) {
                                item.Students.push(v);
                            })
                        }
                    })
                }

                for (var item of Courses) {
                    jQuery.map(Data.Courses['Entities'], function (v) {
                        if (v.ID === item.ID) {
                            jQuery.map(Data.Students['Entities'], function (v) {
                                item.Students.push(v);
                            })
                        }
                    })
                }

                //console.log(Data.Courses);

            }

            if (DtIndex === "Assignments") {
                var ID;
                var arID = [];
                var title;
                var description;
                var subDateTime;
                var Courses = [];
                var Students = [];
                jQuery.map(DtValue.Entities, function (v) {
                    arID.push(v.ID);
                });

                ID = Math.max.apply(Math, arID) + 1;
                title = $('#title').val();
                description = $('#description').val();
                subDateTime = ('#subDateTime');
                //console.log(Data.Students.Entities);

                var cr = $('[id^="Courses"]');
                var arcr = [];

                for (var item of cr) {
                    //console.log(item.checked)
                    if (item.checked) {
                        arcr.push(item.value);
                    }
                }

                jQuery.map(Data.Courses['Entities'], function (v) {
                    for (var item of arcr) {
                        if (item == v.ID) {
                            Courses.push(v);
                        }
                    }
                });

                var st = $('[id^="Students"]');
                var arst = [];

                for (var item of st) {
                    //console.log(item.checked)
                    if (item.checked) {
                        arst.push(item.value);
                    }
                }

                jQuery.map(Data.Students['Entities'], function (v) {
                    for (var item of arst) {
                        if (item == v.ID) {
                            Students.push(v);
                        }
                    }
                });

                Data.Assignments.Entities.push(new Data.Assignments.Constructor(ID, title, description, subDateTime, Students, Courses));

                //console.log(Data.Courses);

                for (var item of Courses) {
                    jQuery.map(Data.Courses['Entities'], function (v) {
                        if (v.ID === item.ID) {
                            jQuery.map(Data.Assignments['Entities'], function (v) {
                                item.Assignments.push(v);
                            })
                        }
                    })
                }

                for (var item of Students) {
                    jQuery.map(Data.Students['Entities'], function (v) {
                        if (v.ID === item.ID) {
                            jQuery.map(Data.Assignments['Entities'], function (v) {
                                item.Assignments.push(v);
                            })
                        }
                    })
                }

            }

            if (DtIndex === "Trainers") {
                var ID;
                var arID = [];
                var firstName;
                var lastName;
                var subject;
                var Courses = [];
                jQuery.map(DtValue.Entities, function (v) {
                    arID.push(v.ID);
                });

                ID = Math.max.apply(Math, arID) + 1;
                firstName = $('#firstName').val();
                lastName = $('#lastName').val();
                subject = $('#subject').val();
                //console.log(Data.Students.Entities);

                var cr = $('[id^="Courses"]');
                var arcr = [];

                for (var item of cr) {
                    //console.log(item.checked)
                    if (item.checked) {
                        arcr.push(item.value);
                    }
                }

                jQuery.map(Data.Courses['Entities'], function (v) {
                    for (var item of arcr) {
                        if (item == v.ID) {
                            Courses.push(v);
                        }
                    }
                });

                Data.Trainers.Entities.push(new Data.Trainers.Constructor(ID, firstName, lastName, subject, Courses));

                //console.log(Data.Courses);

                for (var item of Courses) {
                    jQuery.map(Data.Courses['Entities'], function (v) {
                        if (v.ID === item.ID) {
                            jQuery.map(Data.Trainers['Entities'], function (v) {
                                item.Trainers.push(v);
                            })
                        }
                    })
                }

            }

            $('#myForms').width('0px');
            $('#myForms').hide();
            CreateTable(Data, DtValue, DtIndex);

        }
        if (k === 2) {
           
        }

    });

}

function ManipulateRowForm(val, DtIndex) {

    if ($('#title')) {
        //console.log(DtValue.Entities[id - 1].title);
        $('#title').val(val[0].title);
    }
    if ($('#description')) {
        $('#description').val(val[0].description)
    }
    if ($('#stream')) {
        $('#stream').val(val[0].stream)
    }
    if ($('type')) {
        $('#type').val(val[0].type)
    }
    if ($('#firstName')) {
        $('#firstName').val(val[0].firstName)
    }
    if ($('#lastName')) {
        $('#lastName').val(val[0].lastName)
    }
    if ($('#tuitionFees')) {
        $('#tuitionFees').val(val[0].tuitionFees)
    }
    if ($('#dateOfBirth')) {
        $('#dateOfBirth').val(val[0].dateOfBirth)
    }
    if ($('#subject')) {
        $('#subject').val(val[0].subject)
    }
    //console.log(DtValue.Entities[id - 1]);
    if (DtIndex === "Courses") {
        for (var item of val[0].Students) {
            $(`#Students${item.ID}`).prop('checked', true);
        }
        for (var item of val[0].Assignments) {
            $(`#Assignments${item.ID}`).prop('checked', true);
        }
        for (var item of val[0].Trainers) {
            $(`#Trainers${item.ID}`).prop('checked', true);
        }
    }
    if (DtIndex === "Students") {
        for (var item of val[0].Courses) {
            $(`#Courses${item.ID}`).prop('checked', true);
        }
        for (var item of val[0].Assignments) {
            $(`#Assignments${item.ID}`).prop('checked', true);
        }
    }
    if (DtIndex === "Trainers") {
        for (var item of val[0].Courses) {
            $(`#Courses${item.ID}`).prop('checked', true);
        }
    }
    if (DtIndex === "Assignments") {
        for (var item of val[0].Students) {
            $(`#Students${item.ID}`).prop('checked', true);
        }
        for (var item of val[0].Courses) {
            $(`#Courses${item.ID}`).prop('checked', true);
        }
    }
}

//Dynamic Data Table Function
function DynamicData(index, id) {
    //console.log(Students);
    if (index === "Courses") {
        Students.RemoveCourses(id);
        Assignments.RemoveCourses(id);
        Trainers.RemoveCourses(id);
    }
    if (index === "Assignments") {
        Students.RemoveAssignments(id);
        Courses.RemoveAssignments(id);
    }
    if (index === "Trainers") {
        Courses.RemoveTrainers(id);
    }
    if (index === "Students") {
        Courses.RemoveStudents(id);
        Assignments.RemoveAssignments(id);
    }
}
