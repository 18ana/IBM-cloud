# IBM Cloud Chatbot Application

A front-end web application built with HTML, CSS, and JavaScript, featuring an AI-powered chatbot integrated using **IBM Watson Assistant**.

## 🤖 About

This project implements a conversational chatbot interface powered by IBM Watson Assistant. The chatbot is embedded into the web app and allows users to interact with a Watson-trained assistant directly from the browser.

## 📁 Project Structure

```
IBM-cloud/
├── index.html      # Main HTML entry point with Watson chatbot embed
├── styles.css      # Stylesheet for the application UI
└── script.js       # JavaScript logic and Watson Assistant integration
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- An [IBM Cloud account](https://cloud.ibm.com/registration) (to set up or modify the Watson Assistant)

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/18ana/IBM-cloud.git
   cd IBM-cloud
   ```

2. **Open the application**

   Simply open `index.html` in your browser:
   ```bash
   open index.html
   ```
   Or drag and drop `index.html` into your browser window.

> **Note:** The Watson Assistant chatbot requires a valid IBM Watson integration ID and region configured in `script.js`. Make sure your Watson Assistant instance is active on IBM Cloud.

## 🛠️ Built With

- **HTML** – Page structure and chatbot embed markup
- **CSS** – Styling and layout
- **JavaScript** – Application logic and Watson Assistant integration
- **IBM Watson Assistant** – AI-powered chatbot backend

## ☁️ IBM Watson Assistant Setup

To connect your own Watson Assistant instance:

1. Go to [IBM Cloud](https://cloud.ibm.com) and create a **Watson Assistant** service.
2. Launch the Watson Assistant tool and create a new assistant with your desired intents, entities, and dialog flows.
3. Go to **Integrations → Web chat** in your assistant and copy the embed script snippet.
4. Update `script.js` (or `index.html`) with your own:
   - `integrationID`
   - `region`
   - `serviceInstanceID`

   It will look something like this:
   ```javascript
   window.watsonAssistantChatOptions = {
     integrationID: "your-integration-id",
     region: "your-region",         // e.g. "us-south"
     serviceInstanceID: "your-service-instance-id",
     onLoad: function(instance) { instance.render(); }
   };
   ```

## ☁️ Deploying to IBM Cloud

To deploy this app to IBM Cloud:

1. Install the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli)
2. Log in to your IBM Cloud account:
   ```bash
   ibmcloud login
   ```
3. Deploy using IBM Cloud Foundry or IBM Cloud Object Storage Static Website hosting.

## 📄 License

This project is open source. Feel free to use and modify it.

## 🙋 Author

**18ana** – [GitHub Profile](https://github.com/18ana)
