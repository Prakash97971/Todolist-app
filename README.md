## iTask - Your Personal Todo List Manager

iTask is a full-stack web application designed to help users create, view, update, and delete their daily tasks in an intuitive interface.

---

## Overview

iTask provides a simple and responsive UI for managing todos. It features a Node.js/Express backend with MongoDB for data persistence, and a React front-end for interactive task management.

- **CRUD Operations**: Create, read, update, and delete todos.
- **Completion Tracking**: Mark tasks as completed and optionally hide/show completed items.
---

## What the Project Does

- Fetches all todos from the backend and displays them in a list.
- Allows users to add new todos with unique IDs and a default `iscompleted` status of `false`.
- Enables marking todos as completed or uncompleted, updating both UI and database.
- Supports editing the existing todos.
- Offers a toggle to show or hide completed tasks.

---

## Who It Is For

- Individuals who need a lightweight, self-hosted task manager.
- Developers looking for a hands-on example of React + Express + MongoDB integration.
- Anyone wanting to organize daily tasks with a simple web interface.

---

## Why It Is Useful

- **Task Organization**: Keep track of your daily tasks in one place.
- **Visual Feedback**: Completed tasks are visually crossed out and can be hidden.
- **Self-hosted**: Deploy on your own environment to keep full control.
- **Extensible**: Easy to add features like user authentication or due dates.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoClient)

---

## Installation and Setup

1. **Install backend dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables** by creating a `.env` file :
   ```ini
   MONGO_URI=your_mongodb_connection_uri
   DB_NAME=your_database_name
   PORT=3000
   ```

3. **Run the backend server**:
   ```bash
   node server.js
   ```

5. **Install frontend dependencies**:
   ```bash
   npm install
   ```

6. **Run the React development server**:
   ```bash
   npm run dev
   ```
---

## Usage

1. Navigate to the app in your browser.
2. Enter a new task in the input field and click **Save**.
3. Use the checkboxes to mark tasks as completed or uncompleted.
4. Click **Edit** to modify a task’s text; the input field will pre-fill and the original will be removed.
5. Click **Delete** to remove a task permanently.
6. Toggle **Show Completed Ones** to hide or display completed tasks.

---

## GitHub Repository

[https://github.com/Prakash97971/Todolist_app](https://github.com/Prakash97971/Todolist-app)

---

## Developed By

Prakash Shaw  
[GitHub Profile](https://github.com/Prakash97971)

![App Screenshot](assets/Screenshot%202025-06-23%20015350.png)
