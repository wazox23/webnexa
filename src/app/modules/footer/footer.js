import "./footer.scss";

const Footer = () => {
    return (
        <footer className="footer__base componentMargin__top--2xl componentMargin__bottom--none ">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__logo">
                        <svg
                            className="MainLogo"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            aria-hidden="true"
                        >
                            <g fill="#FFF" stroke="#FFF">
                                <path d="M1 1h10v10H1zM13 1h10v10H13zM1 13h10v10H1z" />
                            </g>
                        </svg>
                        <span className="d2">WEBNEXA</span>
                    </div>
                    <p className="footer__subText">Lorem, ipsum.</p>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottomColumn">
                        <h3 className="h3">Column 1</h3>
                        <p className="smallText">Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="footer__bottomColumn">
                        <h3 className="h3">Column 2</h3>
                        <p className="smallText">Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
