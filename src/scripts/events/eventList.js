import { Event } from './event.js';
import { getEvents, useEvents } from './eventsDataProvider.js'
import { Eventdate } from './event.js';
import { Eventdatetest } from './event.js';
export const EventList = () => {

    getEvents().then(() => {
        // criminals is an array of objects
        let eventsToPrint = useEvents();


         // If we get input from the convictions filter, filter our criminals so that we only see ones with that conviction
      


        // criminalsToPrint = criminalsThatCommittedSpecificCrime

       
const sortByDate= eventsToPrint.sort(function(a,b){
   
    let date2= new Date(a.date) - new Date(b.date);
     
    

     return date2
})
console.log(sortByDate)

        const eventsContainer = document.querySelector("#events-printing")

        let htmlBuilder = ""
var todayDate = new Date()

todayDate = FormDate(todayDate)
        for(let i =0; i < eventsToPrint.length; i++){
// console.log(eventsToPrint[i])
var RealDate = eventsToPrint[i].date
RealDate =  new Date(RealDate)
RealDate.setDate(RealDate.getDate()+1)
// RealDate.setHours(RealDate.getHours()+6)
RealDate =  FormDate(RealDate)

if(RealDate === todayDate)
{

    htmlBuilder += Eventdate(eventsToPrint[i])
}

 if(RealDate > todayDate ){
    htmlBuilder += Event(eventsToPrint[i])
}


            // console.log(htmlBuilder)
        }

        eventsContainer.innerHTML = htmlBuilder

// eventsContainer.innerHTML=eventsToPrint.map(eventNote=>Event(eventNote))

    })
}

function FormDate(date1)
{


    var dd = date1.getDate() 
    var mm = date1.getMonth() + 1
    var yy = date1.getFullYear()


    if(dd<10)
    {
        dd = '0' + dd
    }

    if(mm<10)
    {

        mm = '0' + mm
    }
date1 = mm + '/' + dd + '/' + yy

var d = Date.parse(date1);
console.log("Parse :"+ d)

    return date1

   

}

/*{ <script>

var today = new Date();

var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

</script> }*/

