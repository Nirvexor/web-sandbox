# Web Sandbox (Vanilla JS & CSS)

This repository serves as a digital laboratory for mastering fundamental Web Development concepts. It focuses on **Vanilla JavaScript** and **CSS Layouts** without the crutch of frameworks.

## Projects

### 01. The Monastery Toggle (DOM & Events)
**Goal:** Build a theme-switcher using pure JavaScript and CSS Flexbox.

#### Key Concepts Learned:
1.  **CSS Centering:**
    * Using `display: flex`, `justify-content: center`, and `align-items: center`.
    * **Crucial Fix:** Setting `min-height: 100vh` on the body to ensure vertical alignment works.
2.  **Event Listeners vs. Inline HTML:**
    * Moved from "Student Mode" (`onclick="..."` in HTML) to "Engineer Mode" (`addEventListener` in JS).
    * Separation of concerns: HTML handles structure, JS handles behavior.
3.  **Asynchronous Execution:**
    * Understanding why `addEventListener("click", changeColor())` fires immediately (bad).
    * The fix: Using **Arrow Functions** `() => changeColor()` to delay execution until the click occurs.
4.  **DRY Principle (Don't Repeat Yourself):**
    * Refactored 3 separate functions into 1 dynamic function that accepts arguments.

#### How to Run
Simply open `Monastery_toggle.html` in any browser.