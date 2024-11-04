// Task 1: Setup HTML Structure for the Ticket System (index.html)

// Task 2: Fetch Tickets Using Async/Await and Handle Errors

const ticketContainer = document.getElementById('ticketContainer'); // select the container to display tickets
const errorMessage = document.getElementById('errorMessage'); // select the element to display error messages
const loadingIndicator = document.getElementById('loadingIndicator'); // define the loading indicator variable

async function fetchTickets() { // create an async function to fetch tickets
    try {
        loadingIndicator.style.display = 'block';
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) { // check if the response is not okay
            throw new Error("Failed to fetch tickets. Please try again later.");
        }
        const tickets = await response.json(); 
        if (tickets.length === 0) {
            throw new Error("No tickets found.");
        }
        
        // Task 3: Display Tickets Dynamically on the Page
        tickets.forEach(ticket => { // display each ticket in the container
            const ticketElement = document.createElement('div');
            ticketElement.innerHTML = `
                <h3>Ticket ID: ${ticket.id}</h3>
                <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
                <p><strong>Issue Description:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p>
                <hr>
            `;
            ticketContainer.appendChild(ticketElement);
        });
    } catch (error) {
        errorMessage.textContent = error.message; // error message is displayed if there is an error
} finally { // Task 4: Use finally to Ensure Cleanup
    loadingIndicator.style.display = 'none'; 
}
    }
fetchTickets(); // function to fetch tickets
