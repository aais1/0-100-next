export default function Header() {
    return (
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-semibold">Next 0-100</h1>
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
          Login
        </button>
      </header>
    );
  }