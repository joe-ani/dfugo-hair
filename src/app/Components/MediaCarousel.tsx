"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type MediaItem = {
    type: 'video' | 'image';
    src: string;
};

const media: MediaItem[] = [
    { type: 'image', src: '/images/shop9.jpg' },
    { type: 'video', src: '/video/websiteclip4.mp4' },
    { type: 'image', src: '/images/fugopic.png' },
    { type: 'image', src: '/images/fugopic3.jpg' },
    { type: 'image', src: '/images/shop10.jpg' },

];

const MediaCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [error, setError] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % media.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // const handleError = () => {
    //     setError(true);
    // };

    const currentMedia = media[currentIndex];

    return (
        <div className="relative w-full h-full">
            <AnimatePresence initial={false}>
                {currentMedia.type === 'video' ? (
                    <motion.video
                        key={`video-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        // onError={handleError}
                    >
                        <source src={currentMedia.src} type="video/mp4" />
                    </motion.video>
                ) : (
                    <motion.div
                        key={`image-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ 
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <Image
                            src={currentMedia.src}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MediaCarousel;
