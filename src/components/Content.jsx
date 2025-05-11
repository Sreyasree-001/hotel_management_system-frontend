export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          What we provide
        </h2>
        {/* <p className="text-base text-gray-700 md:text-lg">
          Streamline your hotel operations with our all-in-one platform – manage
          bookings, customers, payments, and services effortlessly from one
          dashboard.
        </p> */}
      </div>

      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Team working"
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Booking interface"
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Customer service"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5">
              Seamless Room Booking
            </h6>
            <p className="text-sm text-gray-900">
              Allow your guests to view room availability and book instantly.
              Manage reservations with real-time updates and notifications.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5">
              Guest & Staff Management
            </h6>
            <p className="text-sm text-gray-900">
              Maintain detailed records of customers, assign tasks to staff, and
              track service requests – all in one place.
            </p>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Integrated Payment Processing
            </h6>
            <p className="text-sm text-gray-900">
              Collect payments securely, view transaction history, and generate
              invoices directly through the system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
