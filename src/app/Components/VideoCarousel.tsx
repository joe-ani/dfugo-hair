"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type MediaItem = {
    type: 'video' | 'image';
    src: string;
};

const mediaItems: MediaItem[] = [
    { type: 'video', src: '/video/websiteclip1.mp4' },
    { type: 'image', src: '/images/shop.png' },
    { type: 'image', src: '/images/shop2.jpg' },
    { type: 'image', src: '/images/shop10.jpg' },
    { type: 'video', src: '/video/websiteclip5.mp4' },
    { type: 'video', src: '/video/websiteclip4.mp4' },
    { type: 'video', src: '/video/websiteclip3.mp4' }, 
    { type: 'video', src: '/video/websiteclip2.mp4' }, 
];

const VideoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const currentMedia = mediaItems[currentIndex];

    return (
        <div className="relative w-full h-full">
            <AnimatePresence mode="popLayout" initial={false}>
                {currentMedia.type === 'video' ? (
                    <motion.video
                        key={`video-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={currentMedia.src} type="video/mp4" />
                    </motion.video>
                ) : (
                    <motion.div
                        key={`image-${currentIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
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

export default VideoCarousel;
