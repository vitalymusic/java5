import  {DialogBox}  from "./class.js";
import { errorAlert,confirmAlert } from "./alerts.js";

document.addEventListener('DOMContentLoaded',()=>{

let dialog1 = new DialogBox("red","red","your webpage is under construction");

dialog1.addDialog();

let dialog2 = new DialogBox("blue","red","another dialog");

dialog2.addDialog();



//errorAlert("Vy chto sovsem kuku???");

confirmAlert("Vai jums ir 18 gadu?");


})