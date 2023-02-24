// Write your JavaScript code here.
// Remember to pay attention to page loading!
document.addEventListener("DOMContentLoaded", function()){
    const takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(event){
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        document.getElementById("flightStatus") = "Shuttle in flight.";
        event.target.style.shuttleBackground = "blue";
        document.getElementById("spaceShuttleHeight") += 10000;
    });


}