// Theme section

const body=document.querySelector('body');
const theme=document.querySelector('#theme');
const colors=['violet','red','green','pink','black','yellow','blue'];

body.style.backgroundColor='violet';

theme.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
})


function addone(){
    const foo = document
}
// celender section

const today = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDay = dayNames[today.getDay()];
const currentMonth = monthNames[today.getMonth()];
const currentDate = today.getDate();
const currentYear = today.getFullYear();
const formattedDate = `${currentMonth} ${currentDate} ${currentYear}`;
document.getElementById('ami-parina').textContent = currentDay;
document.getElementById('ami-pari').textContent = formattedDate;


// taske section

const complete = document.getElementById('Complete');
complete.addEventListener('click', function(event){
    event.preventDefault();
    const currentTime = new Date().toLocaleDateString([], {hour: "2-digit" , minute: "2-digit", second: "2-digit"});
    const complete = document.getElementById("Complete").innerText;
    const newEl =document.createElement("div");
    newEl.innerHTML = `<h3 class= "p-4 bg-slate-100 rounded-xl">You have Complete The Task Add Dark Mode  <span class= "font-semibold">${complete}</span>" at ${currentTime}</h3>`;
    document.getElementById("cardone").appendChild(newEl);
    Complete.disabled = true;
    Complete.innerText= "Completed"


    const task=document.getElementById('task-no').innerText;
    const taskValue=parseInt(task);

    const afterClick=taskValue - 1;
    document.getElementById('task-no').innerText = afterClick

    const result=document.getElementById('result').innerText;
    const resultValue=parseInt(result);

    const AfterClick=resultValue + 1;
    document.getElementById('result').innerText = AfterClick
    
    alert("Board updated successfully")


    if(afterClick==0){
        alert('All complited')
    }
    
});

const completeButton = document.getElementById('Complete-1');
completeButton.addEventListener('click', function(event){
    event.preventDefault();
    const currentTime = new Date().toLocaleDateString([], {hour: "2-digit" , minute: "2-digit", second: "2-digit"});
    const complete = document.getElementById("Complete-1").innerText;
    const newEl =document.createElement("div");
    newEl.innerHTML = `<h3 class= "p-4 bg-slate-100 rounded-xl">Add Dark Mode <span class= "font-semibold">${complete}</span>" at ${currentTime}</h3>`;
    document.getElementById("cardone").appendChild(newEl);
    completeButton.disabled = true;
    Complete.innerText= "Completed"


    const task=document.getElementById('task-no').innerText;
    const taskValue=parseInt(task);

    const afterClick=taskValue - 1;
    document.getElementById('task-no').innerText = afterClick

    const result=document.getElementById('result').innerText;
    const resultValue=parseInt(result);

    const AfterClick=resultValue + 1;
    document.getElementById('result').innerText = AfterClick


    alert("Board updated successfully")

    if(afterClick==0){
        alert('All complited')
    }
    
});


const CompleteButton = document.getElementById('Complete-2');
CompleteButton.addEventListener('click', function(event){
    event.preventDefault();
    const currentTime = new Date().toLocaleDateString([], {hour: "2-digit" , minute: "2-digit", second: "2-digit"});
    const complete = document.getElementById("Complete-2").innerText;
    const newEl =document.createElement("div");
    newEl.innerHTML = `<h3 class= "p-4 bg-slate-100 rounded-xl">Optimize  Home page  <span class= "font-semibold">${complete}</span>" at ${currentTime}</h3>`;
    document.getElementById("cardone").appendChild(newEl);
    CompleteButton.disabled = true;
    Complete.innerText= "Completed"


    const task=document.getElementById('task-no').innerText;
    const taskValue=parseInt(task);

    const afterClick=taskValue - 1;
    document.getElementById('task-no').innerText = afterClick

    const result=document.getElementById('result').innerText;
    const resultValue=parseInt(result);

    const AfterClick=resultValue + 1;
    document.getElementById('result').innerText = AfterClick


    alert("Board updated successfully")

    if(afterClick==0){
        alert('All complited')
    }
    
});


const CompleteButton1 = document.getElementById('Complete-3');
CompleteButton1.addEventListener('click', function(event){
    event.preventDefault();
    const currentTime = new Date().toLocaleDateString([], {hour: "2-digit" , minute: "2-digit", second: "2-digit"});
    const complete = document.getElementById("Complete-3").innerText;
    const newEl =document.createElement("div");
    newEl.innerHTML = `<h3 class= "p-4 bg-slate-100 rounded-xl">Add new emoji 🤲  <span class= "font-semibold">${complete}</span>" at ${currentTime}</h3>`;
    document.getElementById("cardone").appendChild(newEl);
    CompleteButton1.disabled = true;
    Complete.innerText= "Completed"

    const task=document.getElementById('task-no').innerText;
    const taskValue=parseInt(task);

    const afterClick=taskValue - 1;
    document.getElementById('task-no').innerText = afterClick

    const result=document.getElementById('result').innerText;
    const resultValue=parseInt(result);

    const AfterClick=resultValue + 1;
    document.getElementById('result').innerText = AfterClick


    alert("Board updated successfully")

    if(afterClick==0){
        alert('All complited')
    }
    
});


const CompleteButton2 = document.getElementById('Complete-4');
CompleteButton2.addEventListener('click', function(event){
    event.preventDefault();
    const currentTime = new Date().toLocaleDateString([], {hour: "2-digit" , minute: "2-digit", second: "2-digit"});
    const complete = document.getElementById("Complete-4").innerText;
    const newEl =document.createElement("div");
    newEl.innerHTML = `<h3 class= "p-4 bg-slate-100 rounded-xl">Integrate OpenAI API   <span class= "font-semibold">${complete}</span>" at ${currentTime}</h3>`;
    document.getElementById("cardone").appendChild(newEl);
    CompleteButton2.disabled = true;
    Complete.innerText= "Completed"

    const task=document.getElementById('task-no').innerText;
    const taskValue=parseInt(task);

    const afterClick=taskValue - 1;
    document.getElementById('task-no').innerText = afterClick

    const result=document.getElementById('result').innerText;
    const resultValue=parseInt(result);

    const AfterClick=resultValue + 1;
    document.getElementById('result').innerText = AfterClick


    alert("Board updated successfully")

    if(afterClick==0){
        alert('All complited')
    }
    
});


const CompleteButton3 = document.getElementById('Complete-5');
CompleteButton3.addEventListener('click', function(event){
    event.preventDefault();
    const currentTime = new Date().toLocaleDateString([], {hour: "2-digit" , minute: "2-digit", second: "2-digit"});
    const complete = document.getElementById("Complete-5").innerText;
    const newEl =document.createElement("div");
    newEl.innerHTML = `<h3 class= "p-4 bg-slate-100 rounded-xl">Improve Job searching  <span class= "font-semibold">${complete}</span>" at ${currentTime}</h3>`;
    document.getElementById("cardone").appendChild(newEl);
    CompleteButton3.disabled = true;
    Complete.innerText= "Completed"


    const task=document.getElementById('task-no').innerText;
    const taskValue=parseInt(task);

    const afterClick=taskValue - 1;
    document.getElementById('task-no').innerText = afterClick

    const result=document.getElementById('result').innerText;
    const resultValue=parseInt(result);

    const AfterClick=resultValue + 1;
    document.getElementById('result').innerText = AfterClick


    alert("Board updated successfully")

    if(afterClick==0){
        alert('All complited')
    }
    
});



document.getElementById('Clearst').addEventListener('click', function(event){
    event.preventDefault();
    const clearstory = document.getElementById('cardone');
    clearstory.innerHTML='';
})

















