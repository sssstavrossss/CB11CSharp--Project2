/* Set the width of the side navigation to 220px */
function openNav() {
    document.getElementById("mySidenav").style.width = "220px";
    $('#myForms').width('0px');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//select table head icon 'plus'
$('thead > tr > th > i').click(function () {
    closeNav();
    $('#myForms').width('400px');
});

//select table body icon first child 'gear'
$('tbody > tr > td > i').eq(0).click(function () {
    closeNav();
    $('#myForms').width('400px');
});

//select table body icon second child 'bin'
$('tbody > tr > td > i').eq(1).click(function () {
    closeNav();
    $('#myForms').width('400px');
});

//select forms close btn
$('#myForms a').eq(0).click(function () {
    $('#myForms').width('0px');
});

//$('tbody > tr > td > i').last().click(function () {
//    console.log('tbody > tr > td > i');
//});

//Display $Querry
//Courses Table
$("#mySidenav :nth-child(3)").click(function () {
    $("#table_div_Students").hide();
    $("#table_div_Assignments").hide();
    $("#table_div_Trainers").hide();
    $("#table_div_Courses").show();
});
//Students Table
$("#mySidenav :nth-child(4)").click(function () {
    $("#table_div_Courses").hide();
    $("#table_div_Assignments").hide();
    $("#table_div_Trainers").hide();
    $("#table_div_Students").show();
});
//Trainres Table
$("#mySidenav :nth-child(5)").click(function () {
    $("#table_div_Students").hide();
    $("#table_div_Assignments").hide();
    $("#table_div_Courses").hide();
    $("#table_div_Trainers").show();
});
//Assignments Table
$("#mySidenav :nth-child(6)").click(function () {
    $("#table_div_Courses").hide();
    $("#table_div_Assignments").hide();
    $("#table_div_Trainers").hide();
    $("#table_div_Assignments").show();
});