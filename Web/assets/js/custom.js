/* Set the width of the side navigation to 220px */
function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var Entities = (function () {

    function Students (SID, firstName, lastName, dateOfBirth, tuitionFees, Courses, Assignments) {
        this.SID = SID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.tuitionFees = tuitionFees;
        this.Courses = Courses;
        this.Assignments = Assignments;
    }

    function Courses (CID, title, stream, type, startDate, endDate, Students, Assignments, Trainers) {
        this.CID = CID;
        this.title = title;
        this.stream = stream;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.Students = Students;
        this.Assignments = Assignments;
        this.Trainers = Trainers;
    }

    var c1 = new Courses(1, "C#", "Programming", "Part time", "01/02/2021", "01/08/2021", [st1, st2, st3], [], []);
    var c2 = new Courses(2, "Go", "Programming", "Full time", "05/03/2021", "15/06/2021", [st4, st3], [], []);

    var st1 = new Students(1, "Stavros", "Vasileiadis", 1991, 2000, [c1], []);
    var st2 = new Students(2, "Johann Sebastian", "Bach", 1986, 2500, [c1], []);
    var st3 = new Students(3, "Nikolaos", "Skalkotas", 1977, 2100, [c2], []);
    var st4 = new Students(4, "Giacinto", "Scelsi", 1955, 2400, [c1, c2], []);

    var AllSt = [st1, st2, st3, st4];
    var AllC = [ c1, c2 ];
    var All = { Students: [st1, st2, st3, st4], Courses: [ c1, c2 ] };

    return All;
    
})();

(function (Entities) {
    //console.log(Entities['Students']);
    //Entities['AllSt'].forEach(func);

    //function func(item, index) {
    //    document.getElementById("TableBody").appendChild(item);
    //};

    for (var item of Entities['Students']) {
        document.getElementById('TableBody').innerHTML += createHTML(item);
    }

    function createHTML(item) {
        var string = 
            `
            <tr>
                <td> ` + item.SID + `</td>
                <td>` + item.firstName + `</td>
                <td>` + item.lastName + `</td>
                <td>` + item.dateOfBirth + `</td>
                <td>` + item.tuitionFees + `</td>
                <td>` + GetCourses(item) + `</td>
                <td class="margin-auto d-flex justify-content-center">
                    <div class="margin-auto d-flex justify-content-center" title="Edit">
                        <i class="fa fa-pencil fa-lg align-self-center" aria-hidden="true"></i>
                    </div>
                    <div class="margin-auto d-flex justify-content-center" title="Delete">
                        <i class="fa fa-trash fa-lg align-self-center" aria-hidden="true"></i>
                    </div>
                </td>
         </tr >
        `;
        return string;
        
    };

    function GetCourses(item) {
        var f = "";
        var i = 1;
        for (var v of item.Courses) {
            var f = f + v.title;
            if (i >= 1 && i < item.Courses.length) {
                f = f + ', ';
            }
            i++;
        }
        return f;
    }

})(Entities);



