# ToDo App

This is a **ToDo App** built with [Next.js](https://nextjs.org/), leveraging modern React features and best practices. The app allows users to manage their tasks efficiently with features like adding, deleting, and managing todos.

---

## 🚀 Features

- **Add Todos**: Create new tasks with a title.
- **Delete Todos**: Remove tasks from the list.
- **Optimistic UI Updates**: Instant feedback for user actions using React Query.
- **Responsive Design**: Fully responsive layout for mobile and desktop.
- **Feedback Modal**: A simple feedback form displayed in a modal.
- **Productivity Tips**: A section for helpful productivity tips.

---

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [React Query](https://tanstack.com/query)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons and Images**: [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- **Fonts**: [Geist Sans](https://vercel.com/font) and [Geist Mono](https://vercel.com/font)

---

## 📦 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: `>= 16.x`
- **npm**, **yarn**, or **pnpm**

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:ingridnovak/todo-app.git
   cd todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

---

## 🚀 Running the App

### Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Production Build

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To test the production build:

```bash
npm start
# or
yarn start
# or
pnpm start
```

---

### Styling

- Used **Tailwind CSS** for consistent and responsive styling.
- Avoid inline styles unless necessary.

### State Management

- Used **React Query** for server state management and caching.
- Implement optimistic updates for a better user experience.

### Accessibility

- Used semantic HTML.

### Performance

- Optimized images using Next.js's `Image` component.
- Used dynamic imports (`next/dynamic`) for large components to reduce initial load time.

---

## 📂 Project Structure

```
todo-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Footer/
│   │   │   │   └── footer.js
│   │   │   └── CreateToDo/
│   │   │   │   └── create.js
│   │   │   ├── List/
│   │   │   │   └── list.js
│   │   │   └── Pagination/
│   │   │   │   └── pagination.js
│   │   ├── feedback/
│   │   │   └── page.js
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── tips/
│   │   │   └── page.js
│   │   ├── ui/
│   │   │   └── about.js
│   │   │   └── feedback.js
│   │   │   └── modal.js
│   │   │   └── tips.js
│   │   └── layout.js
│   ├── hooks/
│   │   ├── useCreateTodo.js
│   │   └── useDeleteTodo.js
│   └── globals.css
│   └── layout.js
│   └── page.js
│
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── todo.jpg
│   └── window.svg
├── .next/ (generated after build)
├── README.md
└── package.json
```

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---
