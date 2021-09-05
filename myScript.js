function myFunction(){
    
    function greeting(name) {
        document.getElementById("greeting").innerHTML = "Hello " + name;
    }
        let person = prompt("Please enter your name:", "Your Name");
        greeting(person);  
                
        let day;
        switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case  6:
            day = "Saturday";
    }
    document.getElementById("day").innerHTML = "Today is " + day;

    function toCelsius(fahrenheit) {
        return (5/9) * (fahrenheit-32);
    }
        let temp = prompt("Enter today's temperature in fahrenheit (will calculate to celsius", "77");
        document.getElementById("celsius").innerHTML = "The temperature is " + toCelsius(temp) + " degree celsius";
    
}

