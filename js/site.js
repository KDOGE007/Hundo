//get the values from the Page
//starts or controller function
function getValues() {
  //get value from the page as int
  let startValue = parseInt(document.getElementById('startValue').value)
  let endValue = parseInt(document.getElementById('endValue').value)

  //validate an input
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //call generateNumbers
    let numbers = generateNumbers(startValue, endValue)
    //call displayNumbers
    displayNumbers(numbers)
  } else {
    alert('You must enter intergers')
  }
}

//generate numbers from the start value to the end value
//logic function(s)
function generateNumbers(sValue, eValue) {
  let numbers = []
  //getting all numbers from start to end
  for (let i = sValue; i <= eValue; i++) {
    numbers.push(i)
  }
  return numbers
}

//display the number and mark the even numbers bold
//display or view functions
function displayNumbers(numbers) {
  let templateRows = ''
  for (let index = 0; index < numbers.length; index++) {
    let className = 'even'
    let number = numbers[index]
    if (number % 2 == 0) {
      className = 'even'
    } else {
      className = 'odd'
    }
    templateRows += `<tr><td class="${className}">${number}</tr></td>`
  }
  document.getElementById('results').innerHTML = templateRows
}
