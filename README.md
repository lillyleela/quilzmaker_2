# 🧠 Quiz Maker Web Application

A modern **Quiz Maker Web Application** built using **React.js** where users can **create quizzes, attempt quizzes, and view results with analytics**.

This project demonstrates a **complete frontend quiz system** including quiz creation, quiz participation, result visualization, and question review.

---

# 🚀 Features

## 👨‍🎓 User Features
- View available quizzes
- Start and attempt quizzes
- Select answers interactively
- Navigate through quiz questions
- View quiz results with score
- Review correct answers

## ✏️ Quiz Creation
- Create custom quizzes
- Add multiple questions
- Add multiple options for each question
- Select the correct answer

## 📊 Result Analytics
- Score calculation
- Percentage display
- Pie chart visualization (Correct vs Wrong)
- Question review with correct answers

## 💾 Local Storage
- Quizzes stored in **browser localStorage**
- Data persists even after refreshing the page

---

# 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Bootstrap 5
- Chart.js
- CSS

### Storage
- Browser LocalStorage

---

# 📂 Project Structure

```text
quizmaker
│
├── frontend
│   └── src
│       │
│       ├── components
│       │   ├── Header.js
│       │   ├── Footer.js
│       │   ├── QuizCard.js
│       │   └── Question.js
│       │
│       ├── context
│       │   └── AuthContext.js
│       │
│       ├── data
│       │   └── quizzes.js
│       │
│       ├── pages
│       │   ├── HomePage.js
│       │   ├── QuizListing.js
│       │   ├── QuizCreation.js
│       │   ├── QuizTaking.js
│       │   ├── QuizResults.js
│       │   └── LoginRegister.js
│       │
│       ├── App.js
│       ├── index.js
│       └── App.css
│
├── backend
│   ├── node_modules
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── models
│   │   └── User.js
│   │
│   ├── routes
│   │   └── auth.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/quiz-maker.git
cd quiz-maker
```

---

# 💻 Install Dependencies

```bash
npm install
```

---

# ▶️ Run the Application

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

# 📊 Quiz Workflow

1. User opens the quiz list page
2. Selects a quiz
3. Answers questions one by one
4. Submits the quiz
5. Views results with score and chart
6. Reviews correct answers

---

# 🧪 Example Quiz Data Structure

Example quiz stored in LocalStorage:

```json
{
  "id": 1,
  "title": "JavaScript Quiz",
  "questions": [
    {
      "question": "Which keyword declares a variable?",
      "options": ["var", "let", "const", "All of these"],
      "answer": 3
    }
  ]
}
```

---

# 🎥 Demo

Example application screens.

### Home Page
Displays available quizzes.

![Home Page](screenshots/home.png)

---

### Quiz Page
User selects answers and navigates through questions.

![Quiz Page](screenshots/quiz-page.png)

---

### Result Page
Displays score, percentage, and pie chart.

![Result Page](screenshots/result-page.png)

---

# 🔧 Environment Notes

This project runs completely on the frontend.

- No backend required
- Data stored using **LocalStorage**
- Can be extended with **Node.js + MongoDB**

---

# 🔒 Security Notes

Basic development practices were followed.

- No sensitive data stored in code
- LocalStorage used only for quiz data
- No external API keys used

---

# 📈 Future Improvements

- User authentication
- Quiz timer
- Leaderboard
- Backend integration (Node.js + MongoDB)
- Admin dashboard
- Category based quizzes
- Question navigation panel

---

# 👩‍💻 Author

**Kummari Leelavathi**

MSc Computer Science

---

# 📜 License

This project is created for **educational and learning purposes**.
