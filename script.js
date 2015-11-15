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

      $ul = $('<ul>');

      $firstName = $('<li>');
      $lastName = $('<li>');
      $employeeNumber = $('<li>');
      $title = $('<li>');
      $lastReview = $('<li>');
      $salary = $('<li>');

      $firstName.text(employee.firstName);
      $lastName.text(employee.lastName);
      $employeeNumber.text(employee.employeeNumber);
      $title.text(employee.employeeTitle);
      $lastReview.text(employee.lastReview);
      $salary.text(employee.salary);

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

      $remove = $('<button name="remove" class="remove">Delete User</button>');
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
      } catch (exception) {
        console.log(exception);
      } finally {
        event.preventDefault();
      }
    });

  });
});
