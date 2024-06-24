"use client";

import { useState } from "react";
import "./faqAccordion.scss";

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            title: "Web development",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, itaque.",
        },
        {
            title: "Web design",
            content:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, consequatur?",
        },
        {
            title: "Google ADS",
            content:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, officiis.",
        },
        {
            title: "SEO optimization",
            content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, perspiciatis!",
        },
    ];

    return (
        <div
            id="accordionGroup"
            className="accordion__base container componentMargin__top--2xl"
        >
            {faqItems.map((item, i) => (
                <div className="accordion__item" key={i}>
                    <h3 className="color-primary">
                        <button
                            type="button"
                            aria-expanded={activeIndex === i}
                            className={`accordion__trigger ${
                                activeIndex === i ? "active" : ""
                            }`}
                            aria-controls={`accordion-entry-${i + 1}`}
                            id={`accordion-entry-${i + 1}`}
                            onClick={() => toggleAccordion(i)}
                        >
                            <span className="accordion__triggerTitle introText">
                                {item.title}
                                <span className="accordion__triggerIcon">
                                    <svg
                                        className={`chevron ${
                                            activeIndex === i ? "rotate" : ""
                                        }`}
                                        width="30"
                                        height="30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 15L6 9H18L12 15Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </span>
                            </span>
                        </button>
                    </h3>
                    <div
                        id={`accordion-entry-${i + 1}`}
                        role="region"
                        aria-labelledby={`accordion-entry-${i + 1}`}
                        className={`accordion__panel ${
                            activeIndex === i ? "accordion__panel--open" : ""
                        }`}
                    >
                        <p className="p">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
