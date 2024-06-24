import "./ourValues.scss";

const ValueItem = ({ text, title, description }) => {
    return (
        <div className="valueItem__base">
            <span className="valueItem__subText">{text}</span>
            <h3 className="h3 color-primary">{title}</h3>
            <p className="introText">{description}</p>
            <button className="btn">Join us</button>
        </div>
    );
};

const OurValues = () => {
    const items = [
        {
            text: "Quality",
            title: "No cutting corners",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        },
        {
            text: "Innovation",
            title: "Always improving",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        },
        {
            text: "Integrity",
            title: "Doing the right thing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        },
        {
            text: "Teamwork",
            title: "Stronger together",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        },
        {
            text: "Sustainability",
            title: "For future generations",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
        },
    ];

    return (
        <section className="ourValues__base container">
            <h2 className="d2 color--primary ourValues__title">Our values</h2>
            <div className="ourValues__grid">
                {items.map((item, i) => (
                    <ValueItem
                        key={i}
                        text={item.text}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default OurValues;
