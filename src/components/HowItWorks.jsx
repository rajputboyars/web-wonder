const HowItWorks = () => {
    return (
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">How We Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Consultation", "Development", "Delivery"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-700">{step}</h3>
                <p className="text-gray-600 mt-2">Step description goes here.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  