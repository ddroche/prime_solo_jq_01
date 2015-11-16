function Employee(firstName, lastName, employeeNumber,
                  employeeTitle, lastReview, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.employeeNumber = employeeNumber;
  this.employeeTitle = employeeTitle;
  this.lastReview = lastReview;
  this.salary = salary;
}

// initialize array that saves all created employee objects
var employeeArray = [];

$(document).ready(function() {
  var $br = $('<br>');
  $('input').after($br);

  $('form').on('submit', function(event) {
    try {

      // serialize data from form
      var data = $(this).serializeArray();

      // create an array of only value properties returned from serialized
      // array
      var dataArray = [];
      data.forEach(function(elem) {
        dataArray.push(elem.value);
      });

      // console.log(dataArray);

      // create a new Employee object using data from dataArray
      var employee = new Employee(dataArray[0], dataArray[1], dataArray[2],
                                  dataArray[3], dataArray[4], dataArray[5]);

      console.log(employee);

      // console.log(employee.firstName + ' Number: ' + employee.employeeNumber);

      // save employee objects in an array of employee objects
      employeeArray.push(employee);

      var $ul = $('<ul class="emps">');

      var $firstName = $('<li class="empName">');
      var $lastName = $('<li class="empName">');
      var $employeeNumber = $('<li class="empNum">');
      var $title = $('<li class="title">');
      var $lastReview = $('<li class="lastReview">');
      var $salary = $('<li class="salary">');

      $firstName.text('First Name: ' + employee.firstName);
      $lastName.text('Last Name: ' + employee.lastName);
      $employeeNumber.text('Employee Number: ' + employee.employeeNumber);
      $title.text('Employee Title: ' + employee.employeeTitle);
      $lastReview.text('Latest Review: ' + employee.lastReview);
      $salary.text('Salary: ' + employee.salary);

      // if rating 4 or 5, good
      // if rating 2 or 3, needs improvement
      // if rating 1, bad

      switch (employee.lastReview) {
        case '5':
        case '4':
          $lastReview.addClass('good');
          break;
        case '3':
        case '2':
          $lastReview.addClass('needsImprovement');
          break;
        case '1':
          $lastReview.addClass('bad');
      }

      $ul.append($firstName).append($lastName).append($employeeNumber)
         .append($title).append($lastReview).append($salary);

      var $remove = $('<button name="remove" class="remove">Delete User</button>');
      $ul.append($remove);

      $('.currentEmps').append($ul);

      // console.log(employeeArray);
      //
      // data.forEach(function(elem, i) {
      //   console.log(elem.name + ': ' + elem.value);
      // });
      //
      // console.log(data);
    } catch (exception) {
      console.log(exception);
    } finally {
      event.preventDefault();
    }

    // click REMOVE button to remove a specific employee
    $('.remove').on('click', function(event) {
      try {
        $(this).parent().remove(); // use traversal to find the employee's index in employeeArray

        // find employee object via employee Number
        var $info = $(this).parent().find('li').first().next().next().text();

        // console.log($info); // Employee Number: 001
        var $numb = $info.substr(17);

        // console.log($numb);
        employeeArray.forEach(function(elem, index, array) {
          if (elem.employeeNumber === $numb) {
            array.splice(index, 1);
          }

        });

        console.log(employeeArray);
      } catch (exception) {
        console.log(exception);
      } finally {
        event.preventDefault();
      }
    });

    var $salaryView = $('section.salaryView article p');
    var totalSalary = 0;
    var eachSalary = employeeArray.forEach(function(elem) {
      totalSalary += parseInt(elem.salary);
    });

    $salaryView.text('Total Salary: ' + totalSalary);

    //TODO: use $.ajax and include CORS header
    // call random name generator API when random button clicked
    // var nameAPI = 'http://api.uinames.com';
    // $('.random').on('click', function() {
    //   $.getJSON(nameAPI)
    //    .done(function(json) {
    //       console.log('JSON Data: ' + json.name);
    //     })
    //   .fail(function(jqxhr, textStatus, error) {
    //     var err = textStatus + ', ' + error;
    //     console.log('Request Failed: ' + err);
    //   });
    // });

  });
});

//TODO: Generate Random Employee
//TODO: Alphabetically Sort
