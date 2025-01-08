const OurStack = () => {
    const stack = [
      { name: "Express.js", iconClass: "devicon-express-original colored" },
      { name: "Next.js", iconClass: "devicon-nextjs-original-wordmark colored" },
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "php", iconClass: "devicon-php-plain colored" },
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
      { name: "Strapi", img:"data:image/png;base64,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" },
      { name: "MySQL", iconClass: "devicon-mysql-original colored" },
      { name: "Wordpress", iconClass: "devicon-wordpress-plain colored" },
      { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain colored" },
      { name: "AWS", iconClass: "devicon-amazonwebservices-plain colored" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
    ];
  
    return (
      <section id="our-stack" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Tech Stack</h2>
          <p className="text-gray-600 text-center mb-12">
            We leverage cutting-edge technologies to deliver robust and scalable solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {stack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-100 shadow-md rounded hover:shadow-lg transition-shadow"
              >{
                tech.iconClass ?
                <i className={`${tech.iconClass} text-6xl mb-4`} aria-hidden="true"></i> : <img src={tech.img} alt="" className="w-[60px] mb-4" />
              }
                <p className="text-gray-700 font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OurStack;
  