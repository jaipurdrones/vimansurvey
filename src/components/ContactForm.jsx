import React from "react";

export default function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    const message = `New Contact Form Submission:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Message: ${form.message}`;

    const phoneNumber = "919352230994"; // 🔴 replace this

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-xl bg-gray-100 p-6 rounded-xl shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Phone (moved up) */}
        <input
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Phone"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Email (moved down) */}
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 md:col-span-2"
        />
      </div>

      <textarea
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="Message"
        className="border border-gray-300 p-3 rounded w-full mt-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <div className="flex items-center gap-4 mt-4">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition-colors disabled:opacity-60"
          type="submit"
          disabled={loading}
        >
          {loading ? "Opening..." : "Send via WhatsApp"}
        </button>
      </div>
    </form>
  );
}