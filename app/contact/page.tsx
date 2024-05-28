import '../contact.css';
import React, { ReactNode } from "react";

// Import components
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import NavBar2 from '../components/navbar2';
import { SignupFormDemo } from '../components/contactform';

// Card component props
interface CardProps {
    children: ReactNode;
}

// Card component
const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <>
            <div className="w-full lg:w-55 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center">
                    {/* Your image goes here */}
                    {children}

                    <div className="p-4">
                        {/* Your title goes here */}
                        <h3 className="text-xl font-semibold mb-2">Club Lead</h3>
                        {/* Other content goes here */}
                    </div>
                </div>
            </div>
        </>
    );
};

// Contact component
const Contact = () => {
    return (
        <>
            <NavBar2 />
            <div className='p-2'>
                
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='p-8 col-span-2 lg:flex'>
                    <div className="lg:w-1/2 p-2">
                        <Card>
                            <img
                                className="w-full h-80 object-cover rounded-t-lg"
                                src="/img/TANYAGUPTA.jpg"
                                alt="Card Image"
                            />
                        </Card>
                    </div>
                    <div className="lg:w-1/2 p-2">
                        <Card>
                            <img
                                className="w-full h-80 object-cover rounded-t-lg"
                                src="/img/ADITYAUBALIGA.png"
                                alt="Card Image"
                            />
                        </Card>
                    </div>
                </div>
                <div className="lg:w-[400] lg:col-span-2 p-2">
                    <SignupFormDemo/>
                    {/* <div className="flex flex-col items-center justify-center h-screen dark">
                        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-200 mb-4">Contact Us!</h2>

                            <form className="flex flex-wrap">
                                <input
                                    type="email"
                                    className="bg-gray-700 w-full text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                    placeholder="Email"
                                />

                                <textarea
                                    name="message"
                                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 md:w-full md:h-[100px] focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                    placeholder="Message"
                                ></textarea>
                              
                                <button className="border py-3 hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-sky-200 flex justify-center items-center font-extrabold">
                                    <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                                    <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
                                    <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
                                    <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
                                    <p className="z-10">Submit</p>
                                </button>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
