import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <section className="py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">สมัครสมาชิก</h1>

        <form onSubmit={(e) => { e.preventDefault(); alert("สมัครสมาชิกสำเร็จ (เดโม)");
 }}
          className="mx-auto w-full max-w-md rounded-2xl border bg-white shadow-sm p-6"
        >
          {/* Full name */}
          <label htmlFor="fullname" className="block text-sm font-medium mb-1">
            ชื่อ–นามสกุล
          </label>
          <input
            id="fullname"  name="fullname"  type="text" required placeholder="ชื่อ–นามสกุล"  className="w-full rounded-md border px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-black/50" />

          {/* Email */}
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"  name="email" type="email" required  placeholder="อีเมล"  className="w-full rounded-md border px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-black/50" />

          {/* Phone (optional) */}
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            เบอร์โทร (ไม่บังคับ)
          </label>
          <input
            id="phone"  name="phone"  type="tel"   placeholder="080-000-0000"
            className="w-full rounded-md border px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-black/50"
          />

          {/* Password */}
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"  name="password"  type="password"  required placeholder="รหัสผ่าน" className="w-full rounded-md border px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-black/50"  minLength={6}
          />

          {/* Confirm password */}
          <label htmlFor="confirm" className="block text-sm font-medium mb-1">
            Confirm password
          </label>
          <input
             id="confirm"  name="confirm" type="password" required  placeholder="ยืนยันรหัสผ่าน"  className="w-full rounded-md border px-3 py-2 mb-4 outline-none focus:ring-2 focus:ring-black/50"   minLength={6}/>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm mb-4">
            <input type="checkbox" required className="accent-black" />
            <span>ฉันยอมรับข้อตกลงและนโยบายความเป็นส่วนตัว</span>
          </label>

          {/* Button */}
          <button  type="submit"  className="w-full rounded-md bg-black text-white py-2.5 hover:opacity-90"
          >
            Create account
          </button>

          {/* Links */}
          <div className="flex items-center justify-between text-sm mt-3">
            <span className="text-gray-500">มีบัญชีแล้ว?</span>
            <Link to="/login" className="text-gray-600 hover:text-black">
              เข้าสู่ระบบ
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}


export default  RegisterPage