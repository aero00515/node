﻿$(function () {
    $("#header").load("common.html #header>div");
    $("#footer").load("common.html #footer>div");
    $.getJSON("/api/tips/", function(data) {
    	$("body").append("<div id=\"tips\">" + data + "</div>");
    });
});