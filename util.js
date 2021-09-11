function getRandomEle(array){
    return Math.floor(Math.random() * array.length);
}

function addExercise(userId = '613862e3ab07b705634d462b'){
    const exercise = getRandomEle(['Swimming', 'Cardio', 'Cycling' , 'Skipping']);
    const minutes = getRandomEle([15, 30, 45, 28, 20, 60, 120, 160 ]);

    const date = new Date();
    date.setHours(-1);
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

addExercise();