// first chart
const chartBtns = document.querySelector('.chart-btns');
const weekly = document.getElementById('weekly');
const daily = document.getElementById('daily');
// var hourly = document.getElementById('hourly');
// var monthly = document.getElementById('monthly');
const trafficSel = document.querySelector('.chart-btns');
let trafficLabel = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
let trafficSet = [200, 500, 1200, 2300, 2000, 2100, 400, 650, 900, 1230, 2345, 2430];

trafficSel.addEventListener('click', (e) =>{
  if(e.target.tagName === 'BUTTON'){
    e.target.classList.add('active');
    const button = document.querySelectorAll('.chartSel');
    for(let i =0; i<button.length; i++){
      if(button[i] === e.target){
        continue;
      }else{
        button[i].classList.remove('active');
      }
    }
  }

});
//charts
const trafficChar = document.getElementById('areaChart');

makeNewChart();
function makeNewChart(){
  let trafficData = {
    labels: trafficLabel,
    datasets: [{
      data: trafficSet,
      borderColor: '#037574',
      fill: true,
      borderWidth: 1
    }]
  };
  let trafficOptions ={
    responsive: true,
    legend : {
      display: false
    }

};
let  areaChart = new Chart(trafficChar, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
  });
}
//button selects weekly
chartBtns.addEventListener('click', e =>{
  const element = e.target;
  if(element.id === 'weekly'){
    trafficSet = [200, 500, 1200, 2300, 2000, 2100, 400, 650, 900, 1230, 2345, 2430];
    trafficLabel =['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    makeNewChart();
  }

});
//
chartBtns.addEventListener('click', e =>{
  const element = e.target;
  if(element.id === 'daily'){
    trafficSet = [55, 120, 100, 190, 240, 242, 150];
    trafficLabel =['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
    makeNewChart();
  }

});

chartBtns.addEventListener('click', e =>{
  const element = e.target;
  if(element.id === 'hourly'){
    trafficSet = [40, 155, 178, 170, 189, 180, 200, 245, 100, 90, 20];
    trafficLabel =['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
    makeNewChart();
  }

});

chartBtns.addEventListener('click', e =>{
  const element = e.target;
  if(element.id === 'monthly'){
    trafficSet = [1200, 4500, 3200, 2300, 5000, 2100, 4700, 3650, 4900, 4230, 2345, 2430];
    trafficLabel =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    makeNewChart();
  }

});


//daily chart
var ctx = document.getElementById("barChart");
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: 'Users',
        backgroundColor: ['#037574', '#037574', '#037574', '#037574', '#037574','#037574', '#037574'],
        data: [55, 120, 100, 190, 240, 242, 150]
      }
    ]
  },
  options: {
    responsive: true
  }


});

//pie chart
var ctx = document.getElementById("doughnutChart");
var doughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Tablets', 'Phones'],
    datasets: [
      {
        label: 'Users',
        backgroundColor:['#037574', '#3B0375', '#750304'],
        data: [1000, 750, 250]
      }
    ]
  },
  options: {
    responsive: true,
    legend: {
      position: 'right'
    }
  }
});

//message user
const user = document.getElementById('user');
const message = document.getElementById('message');
const send = document.getElementById('send');

send.addEventListener('click', () =>{
  if(user.value === "" && message.value === ""){
    alert("Please fill out both user and text field before sending");
  }else if(user.value === ""){
    alert("Please fill out user field before sending");
  }else if(message.value ===""){
    alert("Please fill out message before sending");
  }else{
    alert(`Message was sent to : ${user.value}`);
  }

});


//notification center
const bells = document.querySelector('header');
const notificationBox = document.getElementById('new-notifications');
const newN = [
  'Victoria Chambers commented on your status',
  'Dan Oliver posted to your profile',
  'Dawn viewed your profile',
  'Dale liked Victoria Chambers comment',
];

bells.addEventListener('click', e => {
  const element = e.target;
  if(element.classList.contains('icon-badge')){
    if(notificationBox.innerHTML === ""){
      const div = document.createElement('DIV');
      div.classList.add('notificationList');
      notificationBox.appendChild(div);
      for(i = 0; i< newN.length; i++){
        const notificationText = document.createElement('DIV');
        notificationText.classList.add('notificationText');
        const p = document.createElement('P');
        p.innerHTML = newN[i];
        div.appendChild(notificationText);
        notificationText.appendChild(p);
      }
    }else{
      notificationBox.firstChild.remove();
    }
  }
});