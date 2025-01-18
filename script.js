const headerHTML = `<div class="navbar">
        <ul>
        <a href="introduction.html"> Introduction</a>
        <a href="medical_tests.html">Medical tests</a>    
        <a href="happy_livingtips.html">Happy and healthy living tips</a>   
        <a href="weather_and_seasonal_effects.html">Weather </a>
        <a href="waterintake.html">Water Intake </a>
        <a href="emotional_wellness.html">Emotional wellness </a>
        <a href="spiritual_focus.html">Spiritual focus </a>
        <a href="travelcare.html">Travel care</a>
            <div class="dropdown">
                <button class="dropbtn">
                    <i class="fa fa-caret-down"></i>
                </button>
                <a href="falls.html">Falls </a>
                <div class="dropdown-content">
                    <a href="falls_causes.html">Causes </a>
                    <a href="falls_prevention.html">Preventive tips </a>
                    <a href="falls_if.html">Falls if </a>
                </div>
            </div>
        </ul>
    </div>`;

const headerElement = document.getElementById("header");
headerElement.innerHTML = headerHTML;
