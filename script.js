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

function compTotalSalary(array) {
  var totalSalary = 0;
  array.forEach(function(elem) {
    totalSalary += parseInt(elem.salary);
  });
  return totalSalary;
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
    console.log('working');
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

      renderEmployeeArray(employeeArray, compTotalSalary(employeeArray));
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
      console.log(this);
      var dataNum = $(this).parent().data('empnum');
      console.log('dataNum: ' + dataNum);
      employeeArray.forEach(function(elem, index, array) {
        if (parseInt(elem.employeeNumber) === dataNum) {
          array.splice(index, 1);
        }

      });

      console.log(employeeArray);

      renderEmployeeArray(employeeArray, compTotalSalary(employeeArray));
    } catch (exception) {
      console.log(exception);
    } finally {
      event.preventDefault();
    }
  });

  /** --------- RENDER FUNCTION -----------**/
  function renderEmployeeArray(employeeArray, salaryTotal) {
    // Pass data to template
    var compiledHtml = employeeArrayTemplate({employees: employeeArray,
                                              salaryTotal: salaryTotal});

    // Add compiled html to page
    $('.currentEmps').html(compiledHtml);
  }
});
