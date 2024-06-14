# React Quiz App

This a practice project for a simple React-based quiz application. The quiz includes a timer for each question, prevents changes to answers after submission, and provides a summary of the results at the end.

## Feature

1. Timed Questions: Each question has a time limit for answering. If the time runs out, the quiz will automatically move to the next question.
2. Locked Answers: Once an answer is submitted, it cannot be changed. The selected answer will be highlighted in a different color to indicate whether it was correct or incorrect.
3. Result Summary: After all questions are answered, the application will display a summary showing the percentage of skipped, correct, and incorrect answers. Additionally, it will list each question along with the user's selected answer.

## Installation

1. Clone the repository

```bash
    git clone https://github.com/ritacc12/Quiz_App.git
```

2. Used terminal to open the file

```bash
   cd Quiz_App
```

3. Install the dependencies

```bash
    npm install
```

4. Start the development server

```bash
    npm run dev
```

Runs the app in the development mode. Open http://localhost:5173/ to view it in your browser.

## Usage

1. Starting the Quiz: When the quiz starts, the first question will be displayed with a countdown timer.

2. Answering Questions: Select an answer by clicking on the desired option. The answer will be locked immediately after selection.

3. Color Indication:
   Correct answers will be highlighted in green.
   Incorrect answers will be highlighted in red.

4. Time Out: If the time expires before an answer is selected, the quiz will automatically proceed to the next question.

5. Completion: After answering all questions, the result summary will be displayed, showing the percentages of skipped, correct, and incorrect answers. The detailed list of questions with the user's answers and the correct answers will also be provided.
