import { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const Period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
        }

        return (
            <section className="banner" id="home">
                <div>
                    <div className="align-items-center">
                        <div xs={12} m={6} xl={7}>
                            <span className="tagline"> Welcome to my Portfolio</span>
                            <h1>{`Hi I am Webdecoded`}<span className="wrap">web developer</span></h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium numquam quia voluptate, laborum ducimus, ad qui vel delectus in fuga, reiciendis temporibus nostrum sunt facilis id ratione? Eligendi, iusto delectus!</p>
                            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                        </div>
                        <div xs={12} m={6} xl={5}>
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}