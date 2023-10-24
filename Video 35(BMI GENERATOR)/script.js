const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
   event.preventDefault()
  const height = parseInt( document.querySelector('#height').value)
  const weight = parseInt( document.querySelector('#Weight').value)
  const result = document.querySelector('#result')
  const bmi = (weight/((height*height)/10000)).toFixed(2)
  result.innerHTML =`<span>${bmi}</span>`   
  if(height === '' || height < 0 || isNaN(height)||weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = "Please Enter a Valid Height & Weight"   
  } else{
     console.log(bmi);
  }
 // Check BMI and display message


 if (bmi < 18.6) {
    const message = document.createElement('p');
    message.textContent = 'You are underweight.';
    result.appendChild(message);
} else if (bmi >= 18.6 && bmi <= 24.9) {
    const message = document.createElement('p');
    message.textContent = 'Your Weight is normal';
    result.appendChild(message);
} else {
    const message = document.createElement('p');
    message.textContent = 'You are overweight.';
    result.appendChild(message);
}
})