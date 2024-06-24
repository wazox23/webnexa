import './whyItsImportant.scss';

const SeoSection = () => {
    return (
        <div className='seoImportance__base componentMargin__top--2xl componentMargin__bottom--2xl'>
            <div className='seoImportance__metricsTitleContainer'>
                <h2 className='h1 seoImportance__metricsTitleText'>
                    You might not care <br />
                    <span className='d1'>But <span className='color--primary'>your metrics do</span></span>
                </h2>
            </div>
            <div className='seoImportance__metricsContainer'>
                <div className='seoImportance__metricsItem'>
                    <span>100</span>
                </div>
                <div className='seoImportance__metricsItem'>
                    <span>100</span>
                </div>
                <div className='seoImportance__metricsItem'>
                    <span>100</span>
                </div>
            </div>
            <p className='seoImportance__metricsText h3 text--medium'>
                Good website UX and design, along with effective SEO, are crucial for online success. An intuitive and attractive design enhances user engagement by simplifying navigation, reducing bounce rates, and increasing time on site. Good UX helps users quickly find what they need, boosting satisfaction and loyalty. SEO improves search engine visibility, driving organic traffic by ranking high for relevant keywords. Together, UX, design, and SEO create a seamless user journey from discovery to conversion, leading to higher traffic, better retention, and increased sales.
            </p>
        </div>
    )
}

const DesignBrowser = () => {
    return (
        <div className='designBrowser__base'>
            <div className='designBrowser__navBar'>
                <div className='designBrowser__navBarItem'></div>
                <div className='designBrowser__navBarItem'></div>
                <div className='designBrowser__navBarItem'></div>
            </div>
        </div>
    )
}

const ImportanceOfDesign = () => {
    return (
        <div className='importanceOfDesign__base componentMargin__top--2xl componentMargin__bottom--2xl'>
            <div className='importanceOfDesign__titleContainer'>
                <h2 className='d1 importanceOfDesign__titleText'>
                    Importance of a <span className='color--primary'>GREAT DESIGN</span>
                </h2>
            </div>
            <div className='importanceOfDesign__container'>
                <DesignBrowser />
            </div>
        </div>
    )
}

const WhyItsImportant = () => {
    return (
        <section className='whyItsImportant__base componentMargin__top--xl'>
            <div className='container'>
                <SeoSection />
                <ImportanceOfDesign />
            </div>
        </section>
    )
}

export default WhyItsImportant;