import React, { useEffect, useRef, useState } from 'react';

const StatsAnimate = () => {
    const fijiWorkPermit = useRef(null);
    const studentsRef = useRef(null);
    const univarsityRef = useRef(null);
    const sponsorsRef = useRef(null);
    const containerRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const targets = [
            { ref: fijiWorkPermit, count: 5000, suffix: '+' },
            { ref: studentsRef, count: 200, suffix: '+' },
            { ref: univarsityRef, count: 50, suffix: '+' },
            { ref: sponsorsRef, count: 100, suffix: '+' },
        ];

        function animateCountUp(target, duration = 2000) {
            let currentCount = 0;
            const increment = Math.ceil(target.count / (duration / 10));

            const interval = setInterval(() => {
                currentCount += increment;
                if (currentCount >= target.count) {
                    clearInterval(interval);
                    currentCount = target.count;
                }
                target.ref.current.textContent = currentCount + (currentCount === target.count ? target.suffix : '');
            }, 10);
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    targets.forEach((target) => animateCountUp(target));
                    setHasAnimated(true); // Ensure it only runs once
                }
            },
            {
                threshold: 0.5, // trigger when 50% of the section is visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={containerRef} className="">
            <div className="pt-12 bg-gray-50 sm:pt-20">
                <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
                            Trusted by Homes Across Bangladesh
                        </h2>
                        <p className="mt-3 text-xl leading-7 text-gray-600 sm:mt-4">
                            Protecting families with advanced IGT Gas Safety Devices every day.
                        </p>
                    </div>
                </div>
                <div className="pb-12 mt-10 bg-gray-50 sm:pb-16">
                    <div className="relative">
                        <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
                        <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <dl className="bg-white  gap-4 rounded-lg shadow-lg sm:grid sm:grid-cols-4">
                                    <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 ">
                                            Devices Sold
                                        </dt>
                                        <dd
                                            className="order-1 text-5xl font-extrabold leading-none text-indigo-600 "
                                            ref={fijiWorkPermit}
                                        >
                                            0
                                        </dd>
                                    </div>
                                    <div className="flex flex-col p-6 text-center border-t border-b border-gray-100  sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                                            Happy Families
                                        </dt>
                                        <dd
                                            className="order-1 text-5xl font-extrabold leading-none text-indigo-600 "
                                            ref={studentsRef}
                                        >
                                            0
                                        </dd>
                                    </div>
                                    <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 ">
                                            Dealers
                                        </dt>
                                        <dd
                                            className="order-1 text-5xl font-extrabold leading-none text-indigo-600 "
                                            ref={univarsityRef}
                                        >
                                            0
                                        </dd>
                                    </div>
                                    <div className="flex flex-col p-6 text-center border-t border-gray-100  sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 ">
                                            Service Centers
                                        </dt>
                                        <dd
                                            className="order-1 text-5xl font-extrabold leading-none text-indigo-600 "
                                            ref={sponsorsRef}
                                        >
                                            0
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsAnimate;
