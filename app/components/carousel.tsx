import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Carousel: React.FC = () => {
    const initialItems = [
        '/random/10.jpg',
        '/random/6.jpg',
        '/random/11.jpg'
    ];

    const [items, setItems] = useState<string[]>(initialItems);
    const [centerIndex, setCenterIndex] = useState<number>(1);
    const [scrolling, setScrolling] = useState<boolean>(false);

    const handleItemClick = (index: number) => {
        if (index !== centerIndex) {
            const newItems = [...items];
            if (index > centerIndex) {
                [newItems[centerIndex], newItems[centerIndex - 1]] = [newItems[centerIndex - 1], newItems[centerIndex]];
            }
            else {
                [newItems[centerIndex], newItems[centerIndex + 1]] = [newItems[centerIndex + 1], newItems[centerIndex]];
            }
            [newItems[centerIndex], newItems[index]] = [newItems[index], newItems[centerIndex]];
            setItems(newItems);
        }
    };

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (!scrolling) {
                setScrolling(true);
                setTimeout(() => {
                    if (event.deltaY > 0) {
                        handleItemClick(centerIndex + 1);
                    } else {
                        handleItemClick(centerIndex - 1);
                    }
                    setScrolling(false);
                }, 500); // Adjust the delay as needed
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [centerIndex, items, scrolling]);

    return (
        <div className="flex justify-center items-center space-x-4 px-10">
            {items.map((src, index) => (
                <motion.div
                    key={index}
                    className={`rounded-md overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${index === centerIndex ? 'flex-grow-0 flex-shrink-0 w-2/3 z-10' : 'flex-grow-0 flex-shrink-0 w-1/6 filter blur-sm'
                        }`}
                    onClick={() => handleItemClick(index)}
                    initial={{ scale: 1 }}
                    animate={{ scale: index === centerIndex ? 1.1 : 1 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={src}
                            src={src}
                            className="w-full h-[65vh] object-cover"
                            alt={`Item ${index + 1}`}
                            initial={{ width: "65%", marginLeft: "17.5%", scaleY: 0.8 }}
                            animate={{ width: "100%", marginLeft: "0%", scaleY: 1 }}
                            exit={{ width: "50%", marginLeft: "25%", scaleY: 0.8 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
};

export default Carousel;
