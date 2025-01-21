# Kanban Board

Welcome to the Kanban Board project! This project is designed to help you manage tasks efficiently using the Kanban methodology.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Introduction

The Kanban Board is a visual tool that provides an overview of your tasks and their progress. It helps you to organize and prioritize your work, ensuring that you stay on track and meet deadlines.

## Features

- **Task Management**: Create, update, and delete tasks.
- **Update Status**: Easily move tasks between different stages.
- **Authentication**: Uses JWT authentication for secure access.

## Installation

To get started with the Kanban Board, follow these steps:

1. Clone the repository.

2. Navigate to the project directory:
    ```bash
    cd kanbanboard
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
3. Create an .env file in the client directory with this variable:
    ```bash
    VITE_API_URL='http://localhost:3001'
    ```
3. Create an .env file in the server directory with these variables:
    ```bash
    DB_NAME='kanban_db'
    DB_USER='your db user here'
    DB_PASSWORD='your password here'
    JWT_SECRET_KEY='your key here'
    ```

## Usage

To start the application, run the following command:
```bash
npm run start:dev
```
A new tab in your browser should automatically be opened at `http://localhost:3000` to login and view the Kanban Board.

From here you can edit existing requests or create a new ticket.
New tickets can be created with:
- Name
- Status
- Description
- User

## Screenshots

**Home Page** (without being logged in)

![Kanban screenshot 1](/assets/kanban1.PNG)

**Login page**

![Kanban screenshot 2](/assets/kanban2.PNG)

**Home Page / Kanban Board** (after log in)

![Kanban screenshot 3](/assets/kanban3.PNG)

**Creating a New Story/Ticket**

![Kanban screenshot 4](/assets/kanban4.PNG)