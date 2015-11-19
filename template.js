/**
 *
 * Employee Constructor
 */
function Employee(firstName, lastName, employeeNumber,
                  employeeTitle, lastReview, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.employeeNumber = employeeNumber;
  this.employeeTitle = employeeTitle;
  this.lastReview = lastReview;
  this.salary = salary;
}

$(document).ready(function() {
  /**
   * initialize array with employees
   */
  var employeeArray = [];

  // Compile the template
  var employeeArrayTemplate = Handlebars.compile($('#currentEmployees').html());
  //renderEmployeeArray(employeeArray);

  /** --------- FORM SUBMISSION -----------**/
  $('form').on('submit', function(event) {
    try {

      firstName = $('#firstName').val();
      lastName = $('#lastName').val();
      employeeNumber = $('#employeeNumber').val();
      employeeTitle = $('#title').val();
      lastReview = $('input[name=rating]:checked').val();
      salary = $('#salary').val();

      employeeArray.push(new Employee(firstName, lastName,
                        employeeNumber, employeeTitle, lastReview, salary));

      console.log(employeeArray);
      renderEmployeeArray(employeeArray);
    } catch (exception) {
      console.log(exception);
    } finally {
      event.preventDefault();
    }
  });

  /** -------- REMOVE EMPLOYEE -------**/
  $('.currentEmps').on('click', '.remove', function(event) {
    console.log('working');
    try {
      var dataNum = $('.emps').data('empnum');
      console.log('dataNum: ' + dataNum);
      employeeArray.forEach(function(elem, index, array) {
        if (parseInt(elem.employeeNumber) === dataNum) {
          array.splice(index, 1);
        }

      });

      console.log(employeeArray);

      renderEmployeeArray(employeeArray);
    } catch (exception) {
      console.log(exception);
    } finally {
      event.preventDefault();
    }
  });

  /** --------- RENDER FUNCTION -----------**/
  function renderEmployeeArray(employeeArray) {
    // Pass data to template
    var compiledHtml = employeeArrayTemplate({employees: employeeArray});

    // Add compiled html to page
    $('.currentEmps').html(compiledHtml);
  }
});
