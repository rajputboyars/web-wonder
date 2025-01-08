const Testimonials = () => {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "InscribeIQ", feedback: "Working with Web Wonders was a great experience. They delivered a modern, user-friendly website perfectly aligned with our brand. Highly professional and responsive, they exceeded our expectations!" },
              { name: "One Up Creative", feedback: "Web Wonder created a fantastic video editing portfolio website for me. The design is sleek, user-friendly, and highlights my work perfectly. Their professionalism and attention to detail were impressive!" },
              { name: "Isha Photography", feedback: "Web Wonder did an amazing job creating my photography portfolio website. The design is stunning, user-friendly, and perfectly showcases my work. Highly professional and a pleasure to work with!" },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-100 shadow rounded">
                <p className="text-gray-600">{testimonial.feedback}</p>
                <h4 className="text-gray-700 font-semibold mt-4">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  