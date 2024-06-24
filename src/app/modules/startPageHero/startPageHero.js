import "./startPageHero.scss";

const StartPageHero = () => {
    return (
        <section className="startPageHero__base componentMargin__top--none componentMargin__bottom--xl">
            <div className="startPageHero__container">
                <div className="container--hero">
                    <div className="startPageHero__headingContainer">
                        <h1 className="d1 startPageHero__headingText">
                            We are more than just a <br />
                            <span className="color--primary">WEB AGENCY</span>
                        </h1>
                        <img
                            src="./imgs/3d-shape-02.png"
                            height={700}
                            className="startPageHero__floatingImg"
                        />
                        <p className="h3 text--medium startPageHero__headingTextContent">
                            We deliver comprehensive solutions tailored to
                            ensure your online success. Our expert team handles
                            every aspect of your digital presence, from website
                            design and development to marketing and analytics.
                            By providing end-to-end services, we help you
                            achieve your business goals and thrive in the
                            competitive online landscape.
                        </p>
                        <a
                            className="startPageHero__ctaLink"
                            href="#contact-form"
                        >
                            <span>Let us help you</span>
                            <svg
                                fill="currentColor"
                                width="64px"
                                height="64px"
                                viewBox="0 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16c0-8.836-7.163-16-16-16s-16 7.163-16 16zM30.032 16c0 7.72-6.312 14-14.032 14s-14-6.28-14-14 6.28-14 14-14 14.032 6.28 14.032 14zM14.989 8.99v11.264l-3.617-3.617c-0.39-0.39-1.024-0.39-1.414 0s-0.39 1.023 0 1.414l6.063 5.907 6.063-5.907c0.195-0.195 0.293-0.451 0.293-0.707s-0.098-0.512-0.293-0.707c-0.39-0.39-1.023-0.39-1.414 0l-3.68 3.68v-11.326c0-0.553-0.448-1-1-1s-1.001 0.447-1.001 1z"></path>{" "}
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StartPageHero;
