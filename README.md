# SummarAI: Article Summarization Web App

SummarAI is a cutting-edge web application designed to simplify the process of summarizing articles. Leveraging the capabilities of OpenAI GPT-4, React, and Redux, this application enables users to obtain concise summaries of articles by simply entering the article's URL.

## Features

- **Article Summarization:** Users can input the URL of an article, and SummarAI's AI-powered by OpenAI GPT-4 will generate a summary of the content.

- **User-friendly Interface:** Built using React, the frontend provides an intuitive and responsive interface for users to interact with the application effortlessly.

- **State Management:** Redux efficiently manages the application's state, ensuring smooth data flow and enhanced performance.

## Prerequisites

- Node.js installed on your machine
- API key for OpenAI GPT-4 (instructions for obtaining this key can be [found here](https://rapidapi.com/restyler/api/article-extractor-and-summarizer))

## Installation

#### 1. Clone this repository:

```
git clone https://github.com/Stephenice/AI_Articles_Summarize.git
```

#### 2. Navigate to the project directory:

```
cd AI_Articles_Summarize
```

#### 3. Install dependencies:

```
npm install
```

#### 4. Set up environment variables:

Create a .env file in the root directory and add your API key:

```
VITE_RAPID_API_ARTICLE_KEY=your-api-key-here
```

#### 5. Start the application:

```
npm start
```

#### 6. Start the application:

Open your web browser and visit http://localhost:3000

## Usage

1. Open SummarAI in your web browser.
2. Enter the URL of the article you want to summarize.
3. Click the "Enter" button.
4. View the generated summary on the screen.

## Live Demo

`Url:` https://aitextarticle.netlify.app/
