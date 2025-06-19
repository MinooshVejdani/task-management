🗂️ Task Management Grid App

A modular, dynamic task management tool built with vanilla JavaScript, HTML, and CSS. This app provides an interactive, grid-based interface for organizing and tracking tasks by customizable attributes such as Task name, Status, Deadline, Time, Priority, and Completion.


Modern, dark-mode UI with editable, structured task data.

🚀 Features

🧱 Dynamic Grid Layout
Add or remove rows (tasks) and columns (task attributes) easily.
🔧 Modular Architecture
Each core functionality (e.g., date input, star ratings, dropdowns) is implemented in its own JavaScript module for clarity and scalability.
🎨 Dark Mode Design
Clean, modern UI that’s easy on the eyes.
🖱️ Interactive Components
Status dropdown
Date selector (YYYY-MM-DD)
Time picker (HH:MM)
Star-based priority rating
Completion checkbox
🧠 Object-Oriented Codebase
Uses classes and clean separation of concerns for maintainability.

---

📁 Project Structure

📦 task-management-grid/
├── 📄 index.html             # Main HTML structure
├── 🎨 styles.css             # Styling including dark theme
├── 📂 JS Modules
│   ├── main.js              # Entry point & event bindings
│   ├── grid.js              # Grid creation & layout logic
│   ├── gridCell.js          # GridCell class for cell logic & rendering
│   ├── task.js              # Input for task names
│   ├── status.js            # Status dropdown logic
│   ├── dateInput.js         # Date input rendering & behavior
│   ├── time.js              # Time picker functionality
│   ├── priority.js          # Priority logic & star container
│   ├── star.js              # Star rating behavior
│   ├── checkbox.js          # Checkbox UI & interaction
│   └── dropdown.js          # Reusable dropdown logic
└─ 📄 README.md              # Project overview (you're here!)


--- 

📸 Preview

[click here](https://github.com/MinooshVejdani/task-management.git)

---


🧠 How It Works

Each row represents a task.
Each column represents an attribute (Task, Status, Deadline, Time, Priority, Checkbox).
A "+" button adds a new row; columns can also be added or removed dynamically.
Each cell is an instance of the GridCell class, styled and populated based on its type.
Separate modules manage their own DOM elements and logic (e.g., priority.js creates the star rating, checkbox.js manages completion state, etc.).

---

🛠️ Tech Stack

HTML / CSS – Layout and styling
JavaScript (Vanilla) – Logic, user interaction
Object-Oriented Programming – Clean, modular code with methods and states

---

🧩 What I Learned

- DOM manipulation (createElement, appendChild, querySelectorAll)
- JavaScript Object-Oriented Programming
- Modular programming and file separation
- Dynamic styling and component-based design without a framework
- Handling date, time, and input states manually

---

🔮 Future Improvements

✅ Task saving using localStorage
🔄 Drag-and-drop reordering
📝 Inline editing for titles
