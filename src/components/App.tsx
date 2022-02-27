import { useEffect } from "react";
import Header from "../stories/Header";
import UserTable from "./Users";

/**
 * Main component controlling page layout
 * 
 * @returns App component
 */
export default function App() {
  useEffect(() => {
    document.body.classList.add("dark");
  });

  return (<>
    <Header onLogin={() => { }} onLogout={() => { }} onCreateAccount={() => { }} />
    <main className="flex justify-center px-8 py-12 text-gray-700 dark:text-gray-200">
      <section className="flex flex-col w-full items-center">
        <h2 className="text-5xl tracking-tighter font-bold mb-4">Users</h2>

        <UserTable />
      </section>
    </main>
  </>);
}