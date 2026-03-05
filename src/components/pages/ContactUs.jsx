import React from 'react';

function ContactUs() {
    const email = "sosconsultantbd@gmail.com"; // Replace with the desired email address
    const subject = ""; // Optional subject
    const body = "";
    return (
        <div className=" bg-gradient-to-t from-gray-800 from-20% via-cyan-200 to-cyan-100 lg:bg-gradient-to-t lg:from-gray-100 py-8 lg:py-16">
            <div className="px-4 mx-auto max-w-screen-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {/* Contact Form */}
                    <div className='hover:shadow-primary'>
                        <form action="#" className="space-y-8 bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-primary">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                                    placeholder="Leave a comment..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-600 sm:w-fit hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                            >
                                Send message
                            </button>
                        </form>
                    </div>

                    {/* Address Section */}
                    <div className='grid grid-cols-1 gap-4'>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-primary">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
                            <p className="text-gray-700 mb-2">
                                <strong>Main Office </strong>
                            </p>
                            <p className="text-gray-700 ">
                                Nitto Ponno Bikroy<br />
                                Lift-5,Room-601-4, BNS Center, Block-C,<br />
                                Uttara-7, Dhaka-1216<br />
                            </p>
                            <p className="text-gray-700 mt-4">
                                <strong>Hotline:</strong> +8801968641101
                            </p>
                            <p className="text-gray-700 ">
                                <strong>Email:</strong> <a
                                    href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                    className="text-blue-500 hover:underline ml-1"
                                >
                                    test@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="bg-white  rounded-lg shadow-lg p-6 hover:shadow-primary">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
                            <p className="text-gray-700  mb-2">
                                <strong>Branch - 2</strong>
                            </p>
                            <p className="text-gray-700 ">
                                Nitto Ponno Bikroy<br />
                                House: 5-6, Lane-1, Block-C,<br />
                                Tangail, Dhaka-1216<br />
                                (Opposite of Navana Probani Ridgedale)
                            </p>
                            <p className="text-gray-700  mt-4">
                                <strong>Hotline:</strong> +8801958641101
                            </p>
                            <p className="text-gray-700 ">
                                <strong>Email:</strong> <a
                                    href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                    className="text-blue-500 hover:underline ml-1"
                                >
                                    Test@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ContactUs;

