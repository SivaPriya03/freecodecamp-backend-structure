const userId = '6145f2411c6c2c31112d341b'
function getRandomEle(array){
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
}
function getRandomDate(){
    let start = new Date(2021, 2, 1)
    let end = new Date(2021, 1, 1)
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function addExercise(userId = '613e28b8ca68ce93226dbfd7'){
    const exercise = getRandomEle(['Swimming', 'Cardio', 'Cycling' , 'Skipping']);
    const minutes = getRandomEle([15, 30, 45, 28, 20, 60, 120, 160 ]);

    // const dates = [];
    // for(let i = 0; i< 30; i++){
    //     dates.push(i+1);
    // }
    // const dateMin = getRandomEle(dates) * -1;
    // const date = new Date();
    // date.setDate(dateMin);
    const date = getRandomDate(); 
    const dateStr = date.toISOString().split('T')[0];

    const userIdElement = document.getElementById('uid');
    const exerciseElement = document.getElementById('desc');
    const minutesElement = document.getElementById('dur');
    const dateElement = document.getElementById('date');
    
    userIdElement.value = userId;
    exerciseElement.value = exercise;
    minutesElement.value = minutes;
    dateElement.value = dateStr;

    const submitElement = document.querySelectorAll("input[type='submit'")[1];
    submitElement.click();
    
}
addExercise(userId);