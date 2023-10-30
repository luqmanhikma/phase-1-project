// This event listener waits for the DOM content to be fully loaded before executing the code inside.
document.addEventListener("DOMContentLoaded", function() {

  // Getting references to HTML elements using their IDs
  const jokeContainer = document.getElementById("joke"); // Reference to the element where the joke will be displayed
  const btn = document.getElementById("btn"); // Reference to the button that triggers fetching a joke
  const url = "https://official-joke-api.appspot.com/jokes/random"; // URL to fetch a random joke from

  // Function to fetch and display a joke
  let getJoke = () => {
      // Remove the "fade" class to make the joke container visible
      jokeContainer.classList.remove("fade");
      
      // Fetch a random joke from the specified URL
      fetch(url)
      .then(data => data.json()) // Parse the response as JSON
      .then(item =>{
          // Set the text content of the joke container with the setup and punchline
          jokeContainer.textContent = `${item.setup} ${item.punchline}`;
          // Add the "fade" class to create a fade-in effect for the joke
          jokeContainer.classList.add("fade");
      });
  }

  // Event listener for the button click event, which triggers fetching a joke
  btn.addEventListener("click",getJoke);
  btn.addEventListener("click",getJoke);
  // Call the getJoke function once to display an initial joke when the page loads
  getJoke();
});