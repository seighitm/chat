# Chat App

## Technologies used

- **Client**: React.js, Typescript, TailwindCSS, Zustand
- **Server**: Express.js, Typescript, ws, zod

## How to use

Follow these steps to set up and run the application:

### Prerequisites

- Node.js

1. Clone the repository:
    ```bash
    git clone https://github.com/seighitm/chat.git
    ```

2. Client:

    ```bash
    cd client
    yarn install
    yarn dev
    ```

3. Server:

    ```bash
    cd server
    yarn install
    yarn dev
    ```


## Available Routes

### HTTP Routes

1. **Create a New Message**
    - **Method**: POST
    - **Path**: `/api/messages`
    - **Description**: Creates a new message.

2. **Get All Messages**
    - **Method**: GET
    - **Path**: `/api/messages`
    - **Description**: Get all messages.
