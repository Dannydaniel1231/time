let hr=document.getElementById("hours");
let mn=document.getElementById("mins");
let sc=document.getElementById("seconds");
let mon=document.getElementById("months");
let day=document.getElementById("days");
let yr=document.getElementById("years");
   console.log(yr);

   date = new Date().getFullYear;

   let month = [
    "January","Febuary","March","April","May","June","July","August","September","Octomber","November","December"];

    let tme= new Date().getMonth();

let days = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    let dys= new Date().getDay();

    let time=()=>{
        setTimeout(()=>{
            time();
            date = new Date();
            hr.innerText = date.getHours();
            mn.innerText = date.getMinutes();
            sc.innerText = date.getSeconds();
            mon.innerText = month[tme];
            yr.innerText = date.getFullYear();
            
            day.innerText = days[dys];
        },1000);
    } 
    time()