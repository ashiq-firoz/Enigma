import '../contact.css';
import React, { ReactNode } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface CardProps {
    children: ReactNode;
}

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

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='p-2'>
                <center><h2>Contact Us</h2></center>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='p-8 col-span-2 lg:flex'>
                    {/* Use the Card component here */}
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
                <div className="lg:w-[400] lg:col-span-2 p-2	">
                    <iframe
                        className='rounded w-[32rem] sm:w-400'
                        src="https://docs.google.com/forms/d/e/1FAIpQLScihsq2UbJEx8ln9bpBUp0l8e-7vg6Y-t4mi-mHwQsBP4w-DQ/viewform?embedded=true"
                        height="600"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
