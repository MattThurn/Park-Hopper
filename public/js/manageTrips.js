const newParkHandler = async (event) => {
    event.preventDefault();

    console.log("new trip form submitted");
  
    /* const name = document.querySelector('#project-name').value.trim();
    const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
   */

    // FORM VALUES HARD-CODED FOR TESTING
    // ASSUMED: FUTURE TRIP
    /* const user_id = "2"; // this will come from a data attribute
    const park_id = "2";
    const park_name = "Glacier National Park"; // not being used
    const activity_list = "Swimming and freezing";
    const lodging = "Holiday Inn";
    const companion_info = "Bob and Linda"; */


    const user_id = "2"; // HARD-CODED TILL WE CONNECT USERS AND TRIPS
    const park_name = document.querySelector('#park-name').value.trim();
    const activity_list = document.querySelector('#activity-list').value.trim();
    const lodging= document.querySelector('#lodging').value.trim();
    const companion_info = document.querySelector('#companion-info').value.trim();

    const tripData = {
        'activity_list': activity_list,
        'lodging': lodging,
        'companion_info': companion_info,
        'user_id': user_id,
        'park_name': park_name
    }
    
    const response = await fetch(`/api/futureRoutes`, {
    method: 'POST',
    body: JSON.stringify(tripData),
    headers: {
        'Content-Type': 'application/json'
    }
    });

    if (response.ok) {
    document.location.replace('/planned-trips');
    } else {
    alert('Failed to create new trip');
    }
    
  };
  
  const delButtonHandler = async (event) => {

    // TO-DO: CHECK TO FIND OUT IF USER CLICKED EDIT OR DELETE BUTTON
    // THEN ADD EDIT FUNCTIONALITY 

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  


if(document.querySelector('.new-park-form')) {
    document
        .querySelector('.new-park-form')
        .addEventListener('submit', newParkHandler);
}

  
// THIS IS FOR A BUTTON ON PAST AND PLANNED TRIPS THAT LETS THE USER EDIT AND DELETE TRIPS
if(document.querySelector('.project-list')) {
    document
        .querySelector('.project-list')
        .addEventListener('click', delButtonHandler);
}

  