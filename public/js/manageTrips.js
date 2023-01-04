const pastFields = document.getElementById('past-trip-fields');
const futureFields = document.getElementById('future-trip-fields');
var typeOfTrip = '';

// Handle form data and send to database
const newParkHandler = async (event) => {
    event.preventDefault();

    console.log("new trip form submitted");

    const user_id = "2"; // HARD-CODED TILL WE CONNECT USERS AND TRIPS
    const park_name = document.querySelector('#park-name').value.trim();
    const travel_month = document.querySelector('#trip-month').value;
    const travel_year = document.querySelector('#trip-year').value.trim();
    const activity_list = document.querySelector('#activity-list').value.trim();
    const trip_review = document.querySelector('#trip-review').value.trim();
    const lodging= document.querySelector('#lodging').value.trim();
    const companion_info = document.querySelector('#companion-info').value.trim();

    switch (typeOfTrip) {
      case "past":

        const pastTripData = {
            'travel_month': travel_month,
            'travel_year': travel_year,
            'activity_list': activity_list,
            'review': trip_review,
            'lodging': lodging,
            'companion_info': companion_info,
            'user_id': user_id,
            'park_name': park_name
        }
        console.log(pastTripData);
        
        const pResponse = await fetch(`/api/pastRoutes`, {
        method: 'POST',
        body: JSON.stringify(pastTripData),
        headers: {
            'Content-Type': 'application/json'
        }
        });
    
        if (pResponse.ok) {
        document.location.replace('/past-trips');
        } else {
        alert('Failed to create new trip');
        }

        break;
      
      case "future":

        const futureTripData = {
            'activity_list': activity_list,
            'lodging': lodging,
            'companion_info': companion_info,
            'user_id': user_id,
            'park_name': park_name
        }
        
        const fResponse = await fetch(`/api/futureRoutes`, {
        method: 'POST',
        body: JSON.stringify(futureTripData),
        headers: {
            'Content-Type': 'application/json'
        }
        });
    
        if (fResponse.ok) {
        document.location.replace('/planned-trips');
        } else {
        alert('Failed to create new trip');
        }

        break;
    
      default:
        // FORM CHECKING NEEDED! - Form not submitted to database.
        // Prompt user to select trip type and complete all fields
        break;
    }
  };
  
  const pastDelButtonHandler = async (event) => {
    event.preventDefault();
    console.log("clicked");

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const idNum = parseInt(id, 10);
  
      const response = await fetch(`/api/pastRoutes/${idNum}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete project');
      }
    }
  };

  const futureDelButtonHandler = async (event) => {
    event.preventDefault();
    console.log("clicked");

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const idNum = parseInt(id, 10);
  
      const response = await fetch(`/api/futureRoutes/${idNum}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete project');
      }
    }
  };

// Adjust form for type of trip being added by user
function addFieldsPast() {
  typeOfTrip = "past";
  var radioFuture = document.querySelector('input[type=radio][name="trip-future"]');
  radioFuture.checked = false;
  pastFields.style.display = 'block';
  futureFields.style.display = 'none';
}

function addFieldsFuture() {
  typeOfTrip = "future";
  var radioPast = document.querySelector('input[type=radio][name="trip-past"]');
  radioPast.checked = false;
  futureFields.style.display = 'block';
  pastFields.style.display = 'none';
}


if(document.querySelector('.new-park-form')) {

    // Find out if it's a past or future trip and adjust form accordingly
    document
        .querySelector('input[name="trip-past"]')
        .addEventListener('change', addFieldsPast);
    document
        .querySelector('input[name="trip-future"]')
        .addEventListener('change', addFieldsFuture);

    // Handle the form data and save to database
    document
        .querySelector('.new-park-form')
        .addEventListener('submit', newParkHandler);
}

  
// delete trip by id
if(document.querySelector('.past-trip-delete')) {
    document
        .querySelector('.past-trip-delete')
        .addEventListener('click', pastDelButtonHandler);
}
if(document.querySelector('.future-trip-delete')) {
  document
      .querySelector('.future-trip-delete')
      .addEventListener('click', futureDelButtonHandler);
}