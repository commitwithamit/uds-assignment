# 🧩 UI Component Assignment – InputField & DataTable

Live Demo: [https://uds-assignment-a784.vercel.app](https://uds-assignment-a784.vercel.app)

## 📝 Description

This project is part of a front-end assignment to build two reusable and accessible UI components using **React + TypeScript + TailwindCSS**:

1. **InputField** – A form input component with props to handle label, placeholder, helper text, error messages, states (disabled, loading, invalid), and variants (filled, outlined, ghost).
2. **DataTable** – A generic, type-safe table component that supports:
   - Dynamic column rendering
   - Serial number generation
   - Row selection with checkbox
   - Column sorting
   - Empty state and loading state

The goal was to follow best practices around component reusability, prop-based styling, type safety, and minimal UI design.

---

## 🛠 Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- React Icons (for sort icon)

---

## 🚀 Setup Instructions

1. **Clone the repository**
```
git clone https://github.com/commitwithamit/uds-assignment.git
cd uds-assignment
```
2. Install dependencies
```
npm install
```

3. Run locally
```
npm run dev
```

4. Build for production
```
npm run build
```

**Components Implemented**

**1. InputField**

**Props:**

* `label`, `placeholder`, `helperText`, `errorMessage`
* `disabled`, `invalid`, `loading`
* `variant`: `'filled' | 'outlined' | 'ghost'`
* `size`: `'sm' | 'md' | 'lg'`

**Features:**

* Spinner during loading
* Conditional styles based on props
* Responsive and accessible

**2. DataTable**

**Props:**

* `data`, `columns`, `loading`, `selectable`, `onRowSelect`

**Features:**

* Dynamic headers and rows
* Row selection via checkboxes
* Sorting via clickable headers
* Custom serial number column
* Graceful handling of empty and loading states

---

**🧠 Approach**

The project focused on:

* Creating fully reusable and prop-driven components
* Using TypeScript generics for type-safe data table rendering
* Leveraging TailwindCSS utility classes for fast styling
* Handling multiple UI states and conditions cleanly
* Preparing the components for future extension (like Storybook integration)
