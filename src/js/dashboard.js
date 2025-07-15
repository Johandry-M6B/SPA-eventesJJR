import axios from "axios";
import { events } from "../main";
//imports of main.js and axios for making HTTP requests



export function loaderDashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = '/login';
        // If the user is not logged in, redirect to login page
        return;
    }

    app.innerHTML = `
        <h2>Welcome,${user.name} </h2>
        <button id="logoutBtn">log out</button>

        <main class="container mt-5">
        <h2>Create New Event</h2>
        <form id="event-form">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" id="event-name" placeholder="Title of the event" required>
            </div>
            <div class="product-form">
                <label>Description</label>
                <input type="text" class="form-control" id="event-description" placeholder="Enter description event" required>
            </div>
            <div class="form-group">
                <label>Image URL</label>
                <input type="text" class="form-control" id="event-image" placeholder="Enter event image URL" required>
            </div>
            <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control" id="event-date" placeholder="Enter event date" required>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" class="form-control" id="event-location" placeholder="Enter location of the evente" required>
            </div>
            <button type="submit" class="btn btn-primary">Save Product</button>
        </form>

    </main>  
`;

}
// Render the dashboard with a form to create new events
// The form includes fields for title, description, image URL, date, and location
// When the form is submitted, it will call the dashboardRender function to handle the event creation
export function dashboardRender() {
    document.getElementById('event-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const newEvent = {
            title: document.getElementById('event-name').value,
            description: document.getElementById('event-description').value,
            image: document.getElementById('event-image').value,
            date: document.getElementById('event-date').value,
            location: document.getElementById('event-location').value
        };

        try {
            const {data} = await axios.get(`${events}?title=${newEvent.title}`);
            // Check if an event with the same name already exists
            if(data.length > 0) {
                alert('Event with this name already exists');
                return;
            }
            await axios.post(events, newEvent);
            alert('Event created successfully');
            window.location.href = '/dashboard';    
        } catch (error) {
            console.log('Error creating event:', error);
            alert('An error occurred while creating the event. Please try again.');
            
        }
         
    })
}
