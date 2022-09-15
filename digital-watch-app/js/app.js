const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri", "Sat"
];
let date=new Date();
let string =`${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]}`
document.getElementById('fecha').innerHTML=string;
let timesito=()=>{
    let hour = new Date();
    let hora="", minuto="", segundo="";
    if (hour.getHours()<10) {
      hora=`0${hour.getHours()}`;
    }
    else{
      hora=`${hour.getHours()}`
    }
    if (hour.getMinutes()<10) {
      minuto=`0${hour.getMinutes()}`;
    }
    else{
      minuto=`${hour.getMinutes()}`;
    }
    if (hour.getSeconds()<10) {
      segundo=`0${hour.getSeconds()}`;
    }
    else{
      segundo=`${hour.getSeconds()}`;

    }
    let horita=`${hora}:${minuto}:${segundo}`
    document.getElementById('contenedor').classList.toggle('animar');
    document.getElementById('hora').innerHTML=horita;
}
setInterval(timesito,1000);