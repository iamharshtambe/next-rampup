export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">
          Login
        </h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
