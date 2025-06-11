import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, useDecodeToken } from "../../_services/auth";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accsessToken");
  const decodedData = useDecodeToken(token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login(formData);

      localStorage.setItem("accessToken", response.token);
      localStorage.setItem("userInfo", JSON.stringify(response.user));

      return navigate(response.user.role === "admin" ? "/admin" : "/");
    } catch (error) {
      setError(error?.response?.data?.message || "Login gagal");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && decodedData && decodedData.success) {
      navigate("/admin");
    }
  }, [token, decodedData, navigate]);

  return (
    <section className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        {/* Kiri - Ilustrasi / Welcome text */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-600 text-white p-10 items-center justify-center transition-all duration-300">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Welcome Back!</h2>
            <p className="text-lg opacity-90">
              Login to continue to your dashboard
            </p>
            {/* Bisa tambahkan gambar ilustrasi di sini */}
          </div>
        </div>

        {/* Kanan - Form Login */}
        <div className="w-full md:w-1/2 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Sign in to your account
          </h2>

          {error && (
            <div className="text-red-500 text-sm text-center mb-4">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="mt-1 w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                I accept the{" "}
                <Link
                  to="#"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold text-sm shadow-md transition-all duration-300"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/register"
                className="text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
