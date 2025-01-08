const Services = () => {
  const service = [
    {
      title: "Developing Custom Web Applications for Customers",
      image: "/images/custom-web-applications.png",
      content: <p>Creating tailored web applications designed to meet unique customer needs, ensuring functionality, scalability, and a seamless user experience.</p>
    },
    {
      title: "Our Custom Application Development Includes the following",
      image: "/images/custom-applications.png",
      content:
        <ul className="flex flex-col gap-2">
          <li className="list-decimal list-inside">Web Applications</li>
          <li className="list-decimal list-inside">Mobile Apps </li>
          <li className="list-decimal list-inside">E-commerce Solutions</li>
          <li className="list-decimal list-inside">UI/UX Design </li>
          <li className="list-decimal list-inside">Maintenance & Support  </li>
        </ul>
    },
    {
      title: "Why choose Web Wonders",
      image: "/images/why-choose-us.png",
      content: <p>We specialize in crafting websites and web applications that are modern, responsive, and tailored to your unique needs.      </p>
    },
  ]
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-8">Our Services</h2>
        <div className=" flex-col flex gap-8">
          {service.map(({ title, image, content }, index) => (
            <div
              key={index}
              className="p-6 gap-10 flex items-center max-h-[60vh]"
            >
              <div className={`flex-1 p-4 ${index % 2 == 0 ? "order-1 rounded-l-3xl border-r-0 " : " rounded-r-3xl border-l-0"} border h-[60vh]`}>
                <img src={image} alt={`${title}-${index}`} className="w-full h-full" />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left">
                <h3 className="text-4xl font-semibold text-gray-700">{title}</h3>
                <div className="text-gray-600 mt-2">{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
