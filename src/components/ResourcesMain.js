import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function ResourcesMain() {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <main>
            <section className="resourcesMain">
                <h1 data-aos="fade-up" data-aos-once="true">Resources</h1>
                <a data-aos="fade-up" data-aos-once="true" href="https://www.treehugger.com/">https://www.treehugger.com/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://oceana.org/">https://oceana.org/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://www.worldwildlife.org/">https://www.worldwildlife.org/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://oceanservice.noaa.gov/welcome.html">https://oceanservice.noaa.gov/welcome.html</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://www.fws.gov/program/endangered-species?ref=topbar">https://www.fws.gov/program/endangered-species?ref=topbar</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://climate.nasa.gov/">https://climate.nasa.gov/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://davidsuzuki.org/">https://davidsuzuki.org/</a>
                <a data-aos="fade-up" data-aos-once="true" href="http://www.campsite24.ca/">http://www.campsite24.ca/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://cwf-fcf.org/en/">https://cwf-fcf.org/en/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://www.naturalcuriosity.ca/">https://www.naturalcuriosity.ca/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://janegoodall.ca/">https://janegoodall.ca/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://www.c2es.org/">https://www.c2es.org/</a>
                <a data-aos="fade-up" data-aos-once="true" href="http://climate.org/">http://climate.org/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://www.climate.gov/">https://www.climate.gov/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://www.globalforestwatch.org/">https://www.globalforestwatch.org/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://www.ncei.noaa.gov/">https://www.ncei.noaa.gov/</a>
                <a data-aos="fade-up" data-aos-once="true" href="https://oceanservice.noaa.gov/">https://oceanservice.noaa.gov/</a>
            </section>
        </main>
    )
}