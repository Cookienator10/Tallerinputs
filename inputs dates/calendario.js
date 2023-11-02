function generateCalendarDays(year, month) {
    var daysContainer = document.createElement("div");
    daysContainer.classList.add("days");
  
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var numDays = lastDay.getDate();
  
    for (var i = 1; i <= numDays; i++) {
      var day = document.createElement("div");
      day.classList.add("day");
      day.textContent = i;
      daysContainer.appendChild(day);
    }
  
    return daysContainer;
  }
  
  function updateCalendar() {
    var dateInput = document.getElementById("fecha");
    var selectedDate = new Date(dateInput.value);
    var year = selectedDate.getFullYear();
    var month = selectedDate.getMonth();
  
    var monthHeader = document.getElementById("month-header");
    monthHeader.textContent = selectedDate.toLocaleString("default", { month: "long" });
  
    var daysContainer = document.getElementById("days-container");
    daysContainer.innerHTML = "";
  
    var calendarDays = generateCalendarDays(year, month);
    daysContainer.appendChild(calendarDays);
  }
  
  function verificarEdad() {
    var fechaNacimiento = new Date(document.getElementById("fecha").value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
  
    if (edad >= 18) {
      alert("Es mayor de edad en Colombia");
    } else {
      alert("No es mayor de edad en Colombia");
    }
  
    updateCalendar();
  }
  
  // Actualizar el calendario al cargar la página
  updateCalendar();
  