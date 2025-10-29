import Header from "../Header";
import { useState } from "react";
import type { UserandPasswordProps } from "../types/UserandPassword";
import axios from "axios";
import APIUrl from "../types/APIUrl";
import {useNavigate} from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAndValidateUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    let allUsers: UserandPasswordProps[] = [];

    try {
      const response = await axios.get<UserandPasswordProps[]>(
        APIUrl() + "/users"
      );
      allUsers = response.data;
      console.log("Fetched user data:", allUsers);

      const user = allUsers.find(
        (u) =>
          (u.email === email || u.username === email) &&
          u.password === password
      );

      if (user) {
        alert("Login successful!");
        
        switch (user.position) {
          case "customer":
            navigate("/"); // ไปที่หน้าลูกค้า
            break;
          case "sale":
            navigate("/SalesPage"); // ไปที่หน้าพนักงานขาย
            break;
          default:
            navigate("/"); // กรณีอื่นๆ ไปที่หน้าหลัก
            break;
        }
      } else {
        alert("Invalid email or password.");
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
      setError("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    // เรียกฟังก์ชันตรวจสอบและนำทาง
    fetchAndValidateUser(email, password);
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <section className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            {" "}
            เข้าสู่ระบบ{" "}
          </h1>
          {/* แสดงข้อความ Error ถ้ามี */}
          {error && <div className="text-red-600 text-center mb-4">{error}</div>}

          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-md rounded-2xl border bg-white shadow-sm p-6"
          >
            {/* ... โค้ด Input Email และ Password เดิม ... */}
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email หรือ Username"
              className="w-full rounded-md border px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-black/50"
            />
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="w-full rounded-md border px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-black/50"
            />

            {/* ปุ่ม Sign In ที่มีการจัดการ Loading */}
            <button
              type="submit"
              className="w-full rounded-md bg-black text-white py-2.5 hover:opacity-90 disabled:opacity-50"
              disabled={loading} // ปิดปุ่มระหว่างรอ API
            >
              {loading ? "กำลังเข้าสู่ระบบ..." : "Sign In"}
            </button>

            {/* ... ลิงก์ย่อยเดิม ... */}
            <div className="flex items-center justify-between text-sm mt-3">
              <a href="#" className="text-gray-600 hover:text-black">
                Forgot password?
              </a>
              <a href="/register" className="text-gray-600 hover:text-black">
                Register
              </a>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default LoginPage;