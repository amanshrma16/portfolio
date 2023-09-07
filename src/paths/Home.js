// import Navbar from '../components/Navbar.js';

import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
// import tile1 from '../resources/tile.jpg';


export default function Home(){
    
    const [loader,setLoader]=useState(true);
    // window.onload=function(){
    //     setLoader(false);
    //     console.log('started');
    // }
    useEffect(()=>{
        setLoader(false);
    },[]);

    const [shrinkclick,setShrinkclick]=useState(false);
    const handleimgclick = (event) =>{
        setShrinkclick(true);
    }

    // const [mouseover, setMouseover] = useState(false);
    const [mouseover1, setMouseover1] = useState(false);
    const [mouseover2, setMouseover2] = useState(false);
    const [mouseover3, setMouseover3] = useState(false);
    const [mouseover4, setMouseover4] = useState(false);

    const [clickabout, setClickabout] = useState(false);
    const handleClickabout = (event) =>{
        if(clickabout===false)
        setClickabout(true);
        else
        setClickabout(false);
    }

    return(
        <div className={shrinkclick?'home':'home noscroll'}>
            {/* <Navbar/> */}
            <section className={shrinkclick?'home_one shrink shrink_sec1':'home_one'}>
                <div className='home_one_content'>
                    <h1>Aman</h1>
                    <button onClick={handleimgclick}  className={shrinkclick?'off':'on'}>ENTER</button>
                    {/* style={shrinkclick?{opacity: 0,}:{}} */}
                </div>
            </section>
            {/* <section className='sec_2'>
                <div className='sec2_title'>
                    <h1>PROJECTS</h1>
                </div>
                <div className={mouseover?'sec2_tiles row gx-0 gy-0 opacity':'sec2_tiles row gx-0 gy-0'}>
                    <div className='sec2_tile col-lg-6'>
                        <a href=''>
                            <img src={tile1} alt='tile1' onMouseEnter={()=>{setMouseover1(true);setMouseover(true)}} onMouseLeave={()=>{setMouseover1(false);setMouseover(false)}} />
                        </a>
                    </div>
                    <div className='sec2_tile col-lg-6'>
                        <a href=''>
                            <img src={tile1} alt='tile1' onMouseEnter={()=>{setMouseover2(true);setMouseover(true)}} onMouseLeave={()=>{setMouseover2(false);setMouseover(false)}} />
                        </a>
                    </div>
                    <div className='sec2_tile col-lg-6'>
                        <a href=''>
                            <img src={tile1} alt='tile1' onMouseEnter={()=>{setMouseover3(true);setMouseover(true)}} onMouseLeave={()=>{setMouseover3(false);setMouseover(false)}} />
                        </a>
                    </div>
                    <div className='sec2_tile col-lg-6'>
                        <a href=''>
                            <img src={tile1} alt='tile1' onMouseEnter={()=>{setMouseover4(true);setMouseover(true)}} onMouseLeave={()=>{setMouseover4(false);setMouseover(false)}} />
                        </a>
                    </div>
                </div>
                <div className={(mouseover1)?'tile_descdiv on':'tile_descdiv off'}>
                    <div className='desc_content'>
                        <h1>This is tile 1</h1>
                        <p>About tile 1</p>
                    </div>
                </div>
                <div className={(mouseover2)?'tile_descdiv on':'tile_descdiv off'}>
                    <div className='desc_content'>
                        <h1>This is tile 2</h1>
                        <p>About tile 2</p>
                    </div>
                </div>
                <div className={(mouseover3)?'tile_descdiv on':'tile_descdiv off'}>
                    <div className='desc_content'>
                        <h1>This is tile 3</h1>
                        <p>About tile 3</p>
                    </div>
                </div>
                <div className={(mouseover4)?'tile_descdiv on':'tile_descdiv off'}>
                    <div className='desc_content'>
                        <h1>This is tile 4</h1>
                        <p>About tile 4</p>
                    </div>
                </div>
            </section> */}

            {/* PROJECT 4 */}
            <section className={shrinkclick?'sec shrink':'sec'}>
                {/* <img src={tile1} className="sec_img" alt=""/> */}
                <a href="https://krypt-blockchain-amanshrma16.vercel.app/" target="_blank"><div className={mouseover4?'sec3_img opacity project4':'sec3_img clear project4'} onMouseEnter={()=>{setMouseover4(true)}} onMouseLeave={()=>{setMouseover4(false)}} > </div>
                {/* <video className="sec3_vid" autoPlay loop muted><source src={sg37} type="video/mp4"/></video>   */}
                </a>
                <div className={(mouseover4)?'sec_desc desc_on ':'sec_desc desc_off '}>
                    <h1>KRYPT</h1>
                    <p>Decentralized Application</p>
                    <br/><br/>
                    <p>Implemented a smart contract-based storage system that stores and retrieves transaction history within the blockchain, making Ethereum transfers secure, transparent, and accessible at their fingertips.</p>
                    <p>Established a platform for users to engage in efficient, direct transactions, reducing the need for intermediaries and enhancing the blockchain network’s value transfer process.</p>
                </div>
            </section>


            {/* PROJECT 1 */}
            <section className={shrinkclick?'sec shrink':'sec'}>
                {/* <img src={tile1} className="sec_img" alt=""/> */}
                <a href="https://amanshrma16.github.io/Oneplus_landingpage/" target="_blank"><div className={mouseover1?'sec3_img opacity project1':'sec3_img clear project1'} onMouseEnter={()=>{setMouseover1(true)}} onMouseLeave={()=>{setMouseover1(false)}} > </div>
                {/* <video className="sec3_vid" autoPlay loop muted><source src={sg37} type="video/mp4"/></video>   */}
                </a>
                <div className={(mouseover1)?'sec_desc desc_on ':'sec_desc desc_off '}>
                    <h1>One Plus</h1>
                    <p>Landing Page</p>
                    <br/><br/>
                    <p>Developed dynamic landing page with interactive elements to showcase OnePlus product range.</p>
                    <p>Ensured responsive design for optimal user experience across devices and smooth navigation.</p>
                </div>
            </section>

            {/* PROJECT 2 */}
            <section className={shrinkclick?'sec shrink':'sec'}>
                {/* <img src={tile1} className="sec_img" alt=""/> */}
                <a href="https://kind-bull-sunbonnet.cyclic.cloud/" target="_blank"><div className={mouseover2?'sec3_img opacity project2':'sec3_img clear project2'} onMouseEnter={()=>{setMouseover2(true)}} onMouseLeave={()=>{setMouseover2(false)}} ></div>
                </a>
                <div className={(mouseover2)?'sec_desc desc_on ':'sec_desc desc_off '}>
                    <h1>Smartwatch Prototype</h1>
                    <p>MERN stack</p>
                    <br/><br/>
                    <p>Designed and developed a functional smartwatch prototype that emulates the features and capabilities of a real smartwatch.</p>
                    <p>Implemented features including notes, calculator, fitness tracking, and weather updates, providing a realistic user experience.</p>
                    {/* <p>Received positive feedback from peers for the attention to detail and creativity in mimicking a real smartwatch.</p> */}
                </div>
            </section>

            {/* PROJECT 3 */}
            <section className={shrinkclick?'sec shrink':'sec'}>
                {/* <img src={tile1} className="sec_img" alt=""/> */}
                <a href="https://www.signatureglobal37d.online/" target="_blank"><div className={mouseover3?'sec3_img opacity project3':'sec3_img clear project3'} onMouseEnter={()=>{setMouseover3(true)}} onMouseLeave={()=>{setMouseover3(false)}} ></div>
                </a>
                <div className={(mouseover3)?'sec_desc desc_on ':'sec_desc desc_off '}>
                    <h1>Red Tree India</h1>
                    <p>Data collection and user tracking</p>
                    <br/><br/>
                    <p>Developed a responsive landing page using JavaScript and Google Appscript, contributing to a 30% increase in user sign-ups.</p>
                    <p>Displayed real estate opportunities and facilitated direct communication with brokers, resulting in a 20% higher user conversion rate.</p>
                </div>
            </section>

            <section className={shrinkclick?'aboutme on flex':'aboutme off'}>
                <div className="aboutme_btn">
                    <p id={clickabout?'aboutme_btn_high':''} onClick={handleClickabout} >{clickabout?'CLOSE':'ABOUT'}</p>
                </div>
                <div className="aboutme_mail">
                    <Link to='mailto:amansharma4182@gmail.com'><p>amansharma4182@gmail.com</p></Link>
                </div>
            </section>

            <section className={clickabout?'aboutme_data on show':'aboutme_data off hide'}>
                <div className={clickabout?"aboutme_data_desc datadesc_on":"aboutme_data_desc datadesc_off"}>
                {/* <div className={clickabout?"aboutme_data_desc on":"aboutme_data_desc off"}> */}
                    <p >Based in New Delhi. Pursing Bachelors in Computer Science. Former Developer intern at HireEasi and Red Tree India. </p>
                    <br/>
                    <p>Breathing life into concepts. Always exploring.</p>
                    <div className="aboutme_data_links">
                        <span>
                            <ul>
                                <li><a href="https://www.linkedin.com/in/amanshrma16/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://github.com/amanshrma16/" target="_blank">Github</a></li>
                                <li><a href="https://drive.google.com/file/d/1-vL5vYD5tfC7DJdd7W0KFopRccKIp1iF/view?usp=drive_link" target="_blank">Resume</a></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </section>
            <section className={loader?'preloaderon':'preloaderoff'}>
                <div className='preloader'></div>
            </section>
        </div>
    );
}
