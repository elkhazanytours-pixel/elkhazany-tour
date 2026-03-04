export const metadata = {
  title: "Privacy Policy | El Khazany Tour",
  description: "Privacy policy for El Khazany Tour luxury private tours in Egypt."
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-gray-300 mb-6">
          At El Khazany Tour, we respect your privacy and are committed to
          protecting your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Information We Collect
        </h2>

        <p className="text-gray-300 mb-6">
          We may collect your name, email address, WhatsApp number, and travel
          preferences when you contact us or request a tour.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          How We Use Your Information
        </h2>

        <p className="text-gray-300 mb-6">
          Your information is used only to communicate with you, arrange tours,
          and improve our travel services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Data Protection
        </h2>

        <p className="text-gray-300">
          We do not sell or share your personal data with third parties. All
          information is handled securely.
        </p>
      </div>
    </main>
  );
}