// App.js

import React, { Component } from "react";
import annyang from "annyang";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
    };
  }

  componentDidMount() {
    if (annyang) {
      // Add voice commands and corresponding actions
      const commands = {
        "open calculator": () => {
          this.setState({ response: "Opening calculator..." });
          // Implement logic to open calculator
          // Assuming you want to open a web-based calculator
          window.open("https://www.google.com/search?q=calculator");
          console.log("Opening calculator...");
        },
        "open YouTube": () => {
          this.setState({ response: "Opening YouTube..." });
          // Implement logic to open YouTube
          window.open("https://www.youtube.com", "_blank");
          console.log("Opening YouTube...");
        },
        "open Music": () => {
          this.setState({ response: "Opening RolMusic..." });
          // Open the RolMusic web application
          window.open("https://rolmusic.vercel.app", "_blank");
          console.log("Opening RolMusic...");
        },
        "open Chrome": () => {
          this.setState({ response: "Opening Chrome..." });
          // Open Google Chrome browser
          window.open("https://www.google.com", "_blank");
          console.log("Opening Chrome...");
        },
        "open Google": () => {
          this.setState({ response: "Opening Google..." });
          // Open Google website
          window.open("https://www.google.com", "_blank");
          console.log("Opening Google...");
        },
        "*query": (query) => {
          const searchQuery = encodeURIComponent(query);
          const googleSearchUrl = `https://www.google.com/search?q=${searchQuery}`;
          this.setState({ response: `Searching for "${query}" on Google...` });
          window.open(googleSearchUrl, "_blank");
          console.log(`Searching for "${query}" on Google...`);
        },
        
        // Add more commands as needed
      };

      // Add commands to annyang
      annyang.addCommands(commands);

      // Start listening for voice commands
      annyang.start();

      // Set up callbacks for speech recognition events
      annyang.addCallback("result", this.handleResult);
    } else {
      console.log("Annyang not supported");
    }
  }

  // Handle speech recognition result
  handleResult = (userSaid) => {
    console.log("User said:", userSaid);
    // You can add additional processing or filtering here if needed
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/ROLLOGO.png" alt="ROL Assistant" className="logo" />
          <h1>ROL Assistant</h1>
          <p>There for you at any moment</p>
          <div className="response">{this.state.response}</div>
        </header>
      </div>
    );
  }
}

export default App;
