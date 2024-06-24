import "./whatWeDo.scss";

const WhatWeDo = () => {
    return (
        <section className="whatWeDo__base container componentMargin__top--xl componentMargin__bottom--2xl">
            <div className="whatWeDo__headingContainer">
                <h2
                    className="d1 whatWeDo__headingTitle textcontentshadow"
                    data-title="WHAT WE DO"
                >
                    What we do
                </h2>
                <p className="whatWeDo__headingContent h3 text--medium">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat quia, optio blanditiis laborum pariatur illum quasi
                    explicabo vero commodi necessitatibus cumque exercitationem
                    esse. Perspiciatis, qui magnam nihil voluptas reiciendis
                    ipsum!
                </p>
            </div>
            <div className="whatWeDo__grid">
                <div className="whatWeDo__gridItem whatWeDo__gridItem--outlined">
                    <h3 className="h2">Web development</h3>
                    <p className="introText">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellat quia, optio blanditiis laborum pariatur
                        illum quasi explicabo vero commodi necessitatibus cumque
                        exercitationem esse. Perspiciatis, qui magnam nihil
                        voluptas reiciendis ipsum!
                    </p>
                </div>
                <div className="whatWeDo__gridItemImage">
                    <img
                        src="./imgs/3d-web-img.jpg"
                        alt="3D illustration of web development"
                        height={500}
                        width={500}
                    />
                </div>
            </div>
            <div className="whatWeDo__grid">
                <div className="whatWeDo__gridItemImage">
                    <img
                        src="./imgs/3d-web-design.jpg"
                        alt="3D illustration of web redesign"
                        height={500}
                        width={500}
                    />
                </div>
                <div className="whatWeDo__gridItem whatWeDo__gridItem--outlined">
                    <h3 className="h2">Web redesign</h3>
                    <p className="introText">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellat quia, optio blanditiis laborum pariatur
                        illum quasi explicabo vero commodi necessitatibus cumque
                        exercitationem esse. Perspiciatis, qui magnam nihil
                        voluptas reiciendis ipsum!
                    </p>
                </div>
            </div>
            <div className="whatWeDo__grid">
                <div className="whatWeDo__gridItem whatWeDo__gridItem--outlined">
                    <h3 className="h2">Google ads</h3>
                    <p className="introText">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellat quia, optio blanditiis laborum pariatur
                        illum quasi explicabo vero commodi necessitatibus cumque
                        exercitationem esse. Perspiciatis, qui magnam nihil
                        voluptas reiciendis ipsum!
                    </p>
                </div>
                <div className="whatWeDo__gridItemImage">
                    <img
                        src="./imgs/3d-marketing.jpg"
                        alt="3D illustration of marketing"
                        height={500}
                        width={500}
                    />
                </div>
            </div>
            <div className="whatWeDo__grid">
                <div className="whatWeDo__gridItemImage">
                    <img
                        src="./imgs/3d-seo.jpg"
                        alt="3D illustration of SEO optimalization"
                        height={500}
                        width={500}
                    />
                </div>
                <div className="whatWeDo__gridItem whatWeDo__gridItem--outlined">
                    <h3 className="h2">SEO Optimization</h3>
                    <p className="introText">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellat quia, optio blanditiis laborum pariatur
                        illum quasi explicabo vero commodi necessitatibus cumque
                        exercitationem esse. Perspiciatis, qui magnam nihil
                        voluptas reiciendis ipsum!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
