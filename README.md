I'll create a README.md file with instructions for setting up and running the URL shortener project:

```markdown:README.md
# URL Shortener

A simple URL shortener application built with React (frontend) and Express (backend).

## Features

- Shorten long URLs
- Copy shortened URLs to clipboard
- Simple and responsive design

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)

## Project Structure


## Installation

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

### Frontend Setup

1. Open a new terminal and navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The client will run on `http://localhost:3001`

## Usage

1. Open your browser and go to `http://localhost:3001`
2. Enter a URL in the input field
3. Click "Shorten"
4. Copy and use your shortened URL

## API Endpoints

- `POST /shorten`: Creates a shortened URL
  - Body: `{ "originalUrl": "https://example.com" }`
  - Response: `{ "originalUrl": "https://example.com", "shortUrl": "http://localhost:3000/abc123" }`

- `GET /:shortId`: Redirects to the original URL

## Technologies Used

- Frontend:
  - React
  - CSS
  - fetch API

- Backend:
  - Node.js
  - Express
  - nanoid (for generating unique IDs)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
```
