import Header from "../header";
function LoginPage(){
    return(
        <>
        <Header/>
        <main className="max-w-6xl mx-auto px-4">
      <section className="py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8"> เข้าสู่ระบบ  </h1>

        <form onSubmit={(e) => { e.preventDefault(); alert("กำลังเข้าสู่ระบบ..."); // ไว้ทดสอบก่อนเชื่อมหลังบ้าน
          }}
          className="mx-auto w-full max-w-md rounded-2xl border bg-white shadow-sm p-6" >
          {/* Email */}
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

          {/* Password */}
          <label htmlFor="password" className="block text-sm font-medium mb-1">
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

          {/* ปุ่ม */}
          <button type="submit"  className="w-full rounded-md bg-black text-white py-2.5 hover:opacity-90"  >  Sign In  </button>

          {/* ลิงก์ย่อย */}
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
    )
}

export default LoginPage