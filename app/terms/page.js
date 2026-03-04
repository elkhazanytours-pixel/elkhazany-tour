export const metadata = {
  title: "Terms & Conditions | El Khazany Tour",
  description: "Terms and conditions for booking tours with El Khazany Tour."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white px-6 py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

        <p className="text-gray-300 mb-6">
          By booking a tour with El Khazany Tour, you agree to the following
          terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Booking Policy
        </h2>

        <p className="text-gray-300 mb-6">
          All tours must be confirmed in advance. Details such as pickup time,
          number of guests, and itinerary must be agreed upon before the tour
          begins.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Payment
        </h2>

        <p className="text-gray-300 mb-6">
          Payment methods and conditions will be discussed directly with the
          client before confirming the booking.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Responsibility
        </h2>

        <p className="text-gray-300">
          El Khazany Tour provides professional guides and transportation.
          However, travelers are responsible for their personal belongings
          during the tour.
        </p>
      </div>
    </main>
  );
}