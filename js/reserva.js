// Function to handle reservation options
function handleReservationOptions() {
  // Get form elements
  const checkIn = document.getElementById("check-in").value;
  const checkOut = document.getElementById("check-out").value;
  const people = document.getElementById("people").value;
  const roomType = document.getElementById("room-type").value;
  const total = document.getElementById("total").value;

  // Store values in localStorage
  localStorage.setItem("checkIn", checkIn);
  localStorage.setItem("checkOut", checkOut);
  localStorage.setItem("people", people);
  localStorage.setItem("roomType", roomType);
  localStorage.setItem("total", total);

  // Calculate total for number of people
  const totalPerPerson = total / people;

  // Print options in 'Reservation Summary' section
  document.getElementById("check-in-summary").innerHTML = checkIn;
  document.getElementById("check-out-summary").innerHTML = checkOut;
  document.getElementById("people-summary").innerHTML = people;
  document.getElementById("room-type-summary").innerHTML = roomType;
  document.getElementById("total-summary").innerHTML = totalPerPerson;

  // Handle 'Additional Services' button click
  document.getElementById("additional-services-btn").addEventListener("click", () => {
    // Show modal with at least 5 additional service options
    const services = [
      { name: "Laundry Service", price: 20 },
      { name: "Room Service", price: 30 },
      { name: "Spa Service", price: 40 },
      { name: "Airport Shuttle", price: 50 },
      { name: "Gym Access", price: 10 },
    ];

    // Store chosen services and their values in localStorage
    localStorage.setItem("services", JSON.stringify(services));

    // Calculate total for additional services
    let serviceTotal = 0;
    for (const service of services) {
        serviceTotal += service.price;
    }

    // Print chosen services and their values in 'Reservation Summary' section
    document.getElementById("services-summary").innerHTML = services.map(s => `${s.name} - ${s.price}`).join(', ');
    document.getElementById("services-total-summary").innerHTML = serviceTotal;

    // Handle 'Continue' button click
    document.getElementById("continue-btn").addEventListener("click", () => {
      // Open modal with reservation details
      // Display accommodation title, photo, and description
      // Display number of people, check-in, check-out, and additional services
      // Display individual item values and total reservation cost
    });
  });
}

// Retrieve information from localStorage and fill 'Reservation Summary' and modal on page load
window.addEventListener("load", () => {
  const checkIn = localStorage.getItem("checkIn");
  const checkOut = localStorage.getItem("checkOut");
  const people = localStorage.getItem("people");
  const roomType = localStorage.getItem("roomType");
  const total = local
