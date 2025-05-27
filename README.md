# React Coding Tasks – Summary and Approach

This project contains solutions for three React component tasks, focusing on clean, maintainable, and user-friendly code using React functional components and hooks.

---

## Task 1: Data Fetch and Display

**Goal:** Fetch data from an API and display a limited subset.

**Approach:**

- Used `useState` to manage fetched data, loading state, and error messages.
- Used `useEffect` to trigger API call once on component mount.
- Applied `async/await` syntax with `try/catch` for clean error handling.
- Added a loading indicator during data fetching.
- Limited displayed items to the first 5 entries by slicing the array.
- Used conditional rendering to handle loading, error, and data states.
- Kept code readable with meaningful variable names and comments.

---

## Task 2: User List with Search Functionality

**Goal:** Display a list of users with a search box filtering by name or email.

**Approach:**

- Stored the original user list in state and maintained a search query state.
- Filtered users dynamically based on case-insensitive matches in name or email.
- Displayed a clear message when no users matched the search.
- Used controlled input for the search box.
- Structured components and logic to be reusable and easy to maintain.
- Added minimal inline styling for clarity and usability.

---

## Task 3: Simple Countdown Timer

**Goal:** Build a countdown timer from 10 to 0 with start and reset controls.

**Approach:**

- Managed countdown state and running status with `useState`.
- Used `useRef` to store the interval ID for proper clearing.
- Used `useEffect` to start and clean up the interval based on timer state.
- Ensured timer stops automatically at zero and shows a "Done!" message.
- Disabled start button during countdown or when time is zero to prevent bugs.
- Typed interval ID correctly as `number` to match browser environment (React + Vite).
- Styled the component simply to enhance user experience without clutter.

---

## General Notes

- All components are written as React functional components with hooks.
- TypeScript is used for type safety and maintainability.
- Path aliases (`@/`) were configured in Vite and TypeScript for cleaner imports.
- Proper cleanup of timers and side effects ensures no memory leaks.
- Code emphasizes readability, meaningful naming, and modular structure.

---

Feel free to explore and reach out if you want enhancements or explanations on any part!
