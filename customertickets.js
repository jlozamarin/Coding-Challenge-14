// Task 1: Setup HTML Structure for the Ticket System (index.html)

// Task 2: Fetch Tickets Using Async/Await and Handle Errors

const ticketContainer = document.getElementById('ticketContainer'); // select the container to display tickets
const errorMessage = document.getElementById('errorMessage'); // select the element to display error messages

async function fetchTickets() { // create an async function to fetch tickets
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) { // check if the response is not okay
            throw new Error("Failed to fetch tickets. Please try again later.");
        }
        const tickets = await response.json(); 
        if (tickets.length === 0) {
            throw new Error("No tickets found.");
        }
        
        // Display tickets in the container if data is found
        tickets.forEach(ticket => {
            const ticketElement = document.createElement('div');
            ticketElement.textContent = `Ticket ID: ${ticket.id}, Title: ${ticket.title}`;
            ticketContainer.appendChild(ticketElement);
        });
    } catch (error) {
        errorMessage.textContent = error.message; // error message is displayed if there is an error
    }
}
fetchTickets(); // function to fetch tickets
