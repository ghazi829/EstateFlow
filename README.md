# 🏢 EstateFlow - Modern Real Estate Solutions

EstateFlow is a premium, high-performance real estate platform built with modern web technologies. It provides a seamless experience for users to browse, search, and inquire about properties, while offering agents a robust interface to showcase their listings.

![EstateFlow Hero](https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80) 

## ✨ Key Features

-   🔍 **Advanced Property Search**: Filter properties by location, price, type, and more.
-   📋 **Comprehensive Listings**: Detailed property cards with high-quality images and essential details.
-   🏠 **Property Details Page**: Deep dive into property specifics, amenities, and location data.
-   📧 **Agent Contact System**: Integrated forms to quickly connect potential buyers with estate agents.
-   📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
-   🎨 **Modern UI/UX**: Clean, professional design powered by shadcn/ui and Tailwind CSS.

## 🚀 Tech Stack

-   **Frontend**: [React 19](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) / Tailwind Animate
-   **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 🛠️ Getting Started

### Prerequisites

-   Node.js (v20 or higher recommended)
-   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/estateflow.git
    cd estateflow/app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to `http://localhost:5173` to see the application in action.

## 📁 Project Structure

```text
src/
├── components/      # Reusable UI components (shadcn/ui)
│   ├── ui/          # Low-level UI primitives
│   └── ...          # Feature-specific components (PropertyCard, Navbar, etc.)
├── pages/           # Main page views (Home, Listings, PropertyDetails)
├── sections/        # Large layout sections
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and shared logic
├── types/           # TypeScript interfaces and types
├── App.tsx          # Main application entry and routing
└── main.tsx        # React DOM rendering
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by pir ghazi.