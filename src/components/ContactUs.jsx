const ContactUs = () => {
    return (
        <section id="contact-us" className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg">
                    {/* Left Side: Contact Details */}
                    <div className="lg:w-1/2 p-8 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                        <p className=" mb-8">
                            Feel free to reach out to us via the form or using the contact details below.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <p>+1 234 567 890</p>
                            </div>
                            <div className="flex items-center">
                                <p>info@example.com</p>
                            </div>
                            <div className="flex items-center">
                                <p>1234 Main St, Suite 567, New York, NY 10001</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    placeholder="Write your message"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="2"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
