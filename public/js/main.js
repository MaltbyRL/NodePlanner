'use strict';

$(document).ready(init);

function init() {
  populateplanner();
  $('#newTask').click(addTask);
  $('#delTask').click(delTask);
  $('#dropdown').on('click', dropDown);
  $("div").on('click', "#addTues", tues);
  $("div").on('click', "#addWed", wed);
  $("div").on('click', "#addThurs", thurs);
  $("div").on('click', "#addFri", fri);
  $("#tuesday").on('dblclick', "li", removeTask);
  $("#wednesday").on('dblclick', "li", removeTask);
  $("#thursday").on('dblclick', "li", removeTask);
  $("#friday").on('dblclick', "li", removeTask);

}

function tues(e) {
  e.stopPropagation();
  var aTask = $('#addAtask').val();
  console.log("TuesClick working", aTask);
  $.post('/tuesday', {name: aTask})
  .success(function(data) {
    var $li = $('<li>').text(aTask);
    $('#tuesday').append($li);
    $('#taskField').empty();
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}

function wed(e) {
  e.stopPropagation();
  var aTask = $('#addAtask').val();
  console.log("WedClick working");
  $.post('/wednesday', {name: aTask})
  .success(function(data) {
    var $li = $('<li>').text(aTask);
    $('#wednesday').append($li);
    $('#taskField').empty();
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}
function thurs(e) {
  e.stopPropagation();
  var aTask = $('#addAtask').val();
  console.log("ThursClick working");
  $.post('/thursday', {name: aTask})
  .success(function(data) {
    var $li = $('<li>').text(aTask);
    $('#thursday').append($li);
    $('#taskField').empty();
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}
function fri(e) {
  e.stopPropagation();
  var aTask = $('#addAtask').val();
  console.log("FriClick working");
  $.post('/friday', {name: aTask})
  .success(function(data) {
    var $li = $('<li>').text(aTask);
    $('#friday').append($li);
    $('#taskField').empty();
  })
  .fail(function(err) {
    alert('something went wrong :(')
  });
}





function populateplanner() {

  $.get('/tuesday', function(data) {
    var $tuesday = data.map(function(name) {
      return $('<li>').text(name);
    });
    $('#tuesday').append($tuesday);
    $('#taskField').empty();
  });

  $.get('/wednesday', function(data) {
    var $wednesday = data.map(function(name) {
      return $('<li>').text(name);
    });
      $('#wednesday').append($wednesday);
      $('#taskField').empty();
  });

  $.get('/thursday', function(data) {
    var $thursday = data.map(function(name) {
      return $('<li>').text(name);
    });
    $('#thursday').append($thursday);
    $('#taskField').empty();
  });

  $.get('/friday', function(data) {
    var $friday = data.map(function(name) {
      return $('<li>').text(name);
    });
    $('#friday').append($friday);
    $('#taskField').empty();
  });
}



function dropDown() {
 console.log('Dropdown Working')
  var text = $(this).text();
  if (text === "New Contact"){
    $('tr[data="neg"]').css('display', 'none');
    $('tr[data="pos"]').css('display', 'table-row');
  } else if (text === "Delete Contact"){
    $('tr[data="pos"]').css('display', 'none');
    $('tr[data="neg"]').css('display', 'table-row');
  } else if (text === "Search"){
    $('tr[data="pos"]').css('display', 'none');
    $('tr[data="neg"]').css('display', 'table-row');
  } else {
    $('tr[data="pos"]').css('display', 'table-row');
    $('tr[data="neg"]').css('display', 'table-row');
  }

};

function addTask(){
  console.log('add bar working');
var textInput = '<input type="text" id="addAtask" placeholder="Add Task"><br>'
var checkTuesday = '<button id="addTues">Add Tuesday</button><br>'
var checkWednesday = '<button id="addWed">Add Wednesday</button><br>'
var checkThursday = '<button id="addThurs">Add Thursday</button><br>'
var checkFriday = '<button id="addFri">Add to Friday</button><br>'
  var $addATask = $(textInput + checkTuesday + checkWednesday + checkThursday + checkFriday );
  $('#taskField').empty();
  $('#taskField').append($addATask);

}
function delTask(e){
  e.stopPropagation();
  $('#taskField').empty();
  $("#taskField").text("double Click Item to remove")
}

function removeTask(){
  console.log("dblclick", event.target)
  event.target.remove();

}
