# Java Quiz App (First JavaScript Project)

This is my first JavaScript project, created under **Syntax Club**.

The project is a simple browser-based Java quiz made with only:
- HTML
- JavaScript

I did **not** use CSS in this version because this assignment focuses on JavaScript logic and Browser APIs.

## Project Goal

Build a beginner-friendly quiz app that:
- Shows one question at a time
- Takes answer input using browser `prompt()`
- Calculates score
- Shows explanations at the end

## Features

- Start button to begin quiz
- 5 Java MCQ questions
- 4 options per question (A, B, C, D)
- Prompt-based input for answers
- Score display after quiz completion
- Explanations shown at the end
- Next question replaces previous one

## Files Used

- `endthis.html` - Quiz page structure
- `endthis.js` - Quiz logic, question flow, score calculation

## How to Run

1. Open `endthis.html` in a browser.
2. Click **Start Quiz**.
3. Enter answer number in prompt (`1`, `2`, `3`, or `4`).
4. After all questions, view score and explanations on the page.

## Notes

- This is a first version made for learning.
- No CSS/styling is added intentionally.
- Logic is kept simple and readable for beginner understanding.

## What I Learned

- DOM update using `getElementById()` and `innerHTML`
- Using arrays for questions/options
- Using functions to control quiz flow
- Difference between blocking (`prompt`) and page rendering
- Basic debugging in JavaScript

## Future Improvements

- Add CSS for cleaner UI
- Replace `prompt()` with on-page option click buttons
- Add timer per question
- Add restart button in UI
- Add topic selection and more questions
