export default function Navbar({ toggleDark }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary dark:bg-darkBg">
      <h1 className="text-xl font-bold">🎓 CGPA Calculator</h1>
      <button onClick={toggleDark} className="bg-white dark:bg-gray-800 px-3 py-1 rounded">
        Toggle Theme
      </button>
    </nav>
  );
}
