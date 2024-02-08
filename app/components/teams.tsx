'use client'
import React, { useState, ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}



const Teams = () => {
    const [count, setCount] = useState(0);

    const handleHover = () => {
        let counter = 0;
        const interval = setInterval(() => {
            if (counter === 10) {
                counter = 110;
            }
            if (counter <= 110) {
                setCount(counter);
                counter++;
            } else {
                clearInterval(interval);
            }
        }, 20);
    };

    return (
        <>
            <br />
            <div className="text-center">
                <h2 className="text-white text-3xl">Club Leads</h2>
                <section className="px-4">
                    <div className="flex justify-center py-3 ">
                        <div className="grid grid-cols-2 gap-8">
                            
                            <Card>
                                <>
                                    <img src="/img/TANYAGUPTA.jpg" alt="" className="w-full h-80 object-cover rounded-t-lg" onMouseEnter={handleHover} />

                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">TANYA GUPTA</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Club Lead</span>
                                </>
                            </Card>
                            <Card>
                                <>
                                    <img src="/img/ADITYAUBALIGA.png" alt="" className="w-full h-80 object-cover rounded-t-lg " onMouseEnter={handleHover} />
                                    <div>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">ADITYA U BALIGA</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Club Lead</span>
                                    </div>
                                </>
                            </Card>
                        </div>

                        
                        
                    </div>
                </section>
                <section className="px-4">
                    <div className="flex justify-center py-3">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <Card>
                                <>
                                    <img src="/img/AKHILESHNEKAR.jpg" alt="" className="w-full h-80 object-cover rounded-t-lg" onMouseEnter={handleHover} />

                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">AKHILESH NEKAR</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Techical Lead</span>
                                </>
                            </Card>
                            <Card>
                                <>
                                    <img src="/img/MARIPALLYAMOGH.jpg" alt="" className="w-full h-80 object-cover rounded-t-lg " onMouseEnter={handleHover} />
                                    <div>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">MARIPALLY AMOGH</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Reasearch Lead</span>
                                    </div>
                                </>
                            </Card>
                            <Card>
                                <>
                                    <img src="/img/ADITIRAWAT.jpg" alt="" className="w-full h-80 object-cover rounded-t-lg " onMouseEnter={handleHover} />
                                    <div>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">ADITI RAWAT</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Event Coordinator</span>
                                    </div>
                                </>
                            </Card>
                        </div>

                        
                        
                    </div>
                </section>

                <section className="px-4">
                    <div className="flex justify-center py-5">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                            <Card>
                                <>
                                    <img src="/logo.jpg" alt="" className="w-full h-80 object-cover rounded-t-lg" onMouseEnter={handleHover} />

                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">Bonnie Green</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                </>
                            </Card>
                            <Card>
                                <>
                                    <img src="/logo.jpg" alt="" className="w-full h-80 object-cover rounded-t-lg " onMouseEnter={handleHover} />
                                    <div>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">Bonnie Green</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    </div>
                                </>
                            </Card>
                            <Card>
                                <>
                                    <img src="/logo.jpg" alt="" className="w-full h-80 object-cover rounded-t-lg " onMouseEnter={handleHover} />
                                    <div>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">Bonnie Green</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    </div>
                                </>
                            </Card>
                            <Card>
                                <>
                                    <img src="/logo.jpg" alt="" className="w-full h-80 object-cover rounded-t-lg " onMouseEnter={handleHover} />
                                    <div>
                                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white py-3">Bonnie Green</h5>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    </div>
                                </>
                            </Card>
                        </div>

                        
                        
                    </div>
                </section>
            </div>
        </>
    );
}


const Card: React.FC<CardProps> = ({ children }) => {
    // const cardStyle: React.CSSProperties = {
    //     backgroundImage: 'url("/bggif.gif")', // Replace with the path to your GIF
    //     backgroundSize: 'cover',
    //   };
    return (
        // use this style in the below div for gif effect : style={cardStyle}
         
        <div className="hover:transform hover:scale-105 origin-top   max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 hover:bg-gradient-to-b from-violet-600 to-[#1d4ed8] ">
  <div className="flex flex-col items-center pb-10">
    {children}
  </div>
</div>

    );
};

interface Card2Props {
    title: string;
    subtitle: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    href: string;
  }
  
  const Card2: React.FC<Card2Props> = ({ title, subtitle, Icon, href }) => {
    return (
      <a
        
        className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-800" />
  
        <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
          {title}
        </h3>
        
      </a>
    );
  };

export default Teams;
