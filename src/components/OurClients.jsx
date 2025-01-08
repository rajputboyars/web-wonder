const OurClients = () => {
  const clients = [
    { name: "InscribeIQ", logo: "https://inscribeiq.in/wp-content/uploads/2024/11/cropped-cropped-cropped-IMG_2173-removebg-preview-1-1-300x146.png" },
    { name: "OneUpCreatives", logo: "/images/oneupcreatives.webp" },
    { name: "Isha Photography", logo: "/images/ishaphotography.jpg" },
  ];

  return (
    <section id="our-clients" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Clients</h2>
        <p className="text-gray-600 text-center mb-12">
          We are proud to have partnered with amazing clients from various industries.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center place-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex gap-4 justify-between p-4 bg-white shadow-md rounded hover:shadow-lg transition-shadow w-fit"
            >
              <div className="">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-16 object-contain"
                />
              </div>
              {/* <div className="flex-1 text-xl font-bold">{client.name}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
