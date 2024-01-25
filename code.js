// phelay hum form ko lay gay kyun ki us k andar button hai form ko summit karnay leyh
// jab form summit hota hai toh two type sy summit hota hao ek post type sy summit hota
//hai ya get type sy 
//lakin jab bhi summit hota hai toh us ki value url mai ya server k pass chali jati hai
// us ko rokh nay k leyh event k uper method milta hai
//form k default action ko rknay k leyh e.preventdefault


// const myform= document.querySelector('form') 

// // const height =  parseInt(document.querySelector('#height').value)
// // const weight =  parseInt(document.querySelector('#weight').value)
// //this is not correct this use case will give youempty

//  myform.addEventListener('submit' , function(e){
//     e.preventDefault
//     //ab values chayeh
//  const height =  parseInt(document.querySelector('#height').value)
//  const weight =  parseInt(document.querySelector('#weight').value)
//  const result= document.querySelector('#result')


//  if (height ==='' || height < 0 || isNaN(height)){
//    result.innerHTML ='please give a valid height'
//  }

//  })








const myform = document.querySelector('form');

myform.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height + height) / 1000)).toFixed(2);

        // Categorize BMI
        let category = '';
        if (bmi < 18.6) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal Range';
        } else {
            category = 'Overweight';
        }

        // Display the result
        result.innerHTML = `<span>${bmi}</span> - ${category}`;
    }
});





// Add the logic for handling weight and further processing as needed
