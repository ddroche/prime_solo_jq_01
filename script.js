function Employee(firstName, lastName, employeeNumber,
                  title, lastReview, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.employeeNumber = employeeNumber;
  this.title = title;
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

      console.log(dataArray);

      // create a new Employee object using data from dataArray
      var employee = new Employee(dataArray[0], dataArray[1], dataArray[2],
                                  dataArray[3], dataArray[4], dataArray[5]);

      console.log(employee);

      // save employee objects in an array of employee objects
      employeeArray.push(employee);

      console.log(employeeArray);

      data.forEach(function(elem, i) {
        console.log(elem.name + ': ' + elem.value);
      });

      //TODO: change data from array to object
      //TODO: create employee class
      //TODO: on submit, instantiate new employee

      console.log(data);
    } catch (exception) {
      console.log(exception);
    } finally {
      event.preventDefault();
    }

    // click REMOVE button to remove a specific employee
    $('#remove').on('click', function(event) {
      try {
        var index = employeeArray.indexOf(); // use traversal to find the employee's index in employeeArray
      } catch (exception) {
        console.log(exception);
      } finally {
        event.preventDefault();
      }
    });
  });
});
