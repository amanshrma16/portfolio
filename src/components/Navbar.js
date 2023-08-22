
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Navbar(){
    // var clss;

    
    // const [scrollTop, setScrollTop] = useState(0);
    const [navbar, setNavbar] = useState(false);
    // if(scrollTop>100){
    //     clss="active";
    // }
    // else{
    //     clss="hidden";
    // }
    
    const handleScroll = (event) =>{
        // setScrollTop(event.currentTarget.scrollTop);
        // console.log("scroll: "+window.scrollY);
        if(window.scrollY>=500){
            setNavbar(true);
        }
        else{
            setNavbar(false);
        }
        
    }

    window.addEventListener('scroll', handleScroll);

    return(
        
        <div className={navbar? 'navbar active':'navbar hidden'} >
        {/* <div className='navbar'> */}
            <nav className="navbar_nav" >
                <div className="nav_name">
                    <h2>MyBlog</h2>
                </div>
                <div className="nav_center">
                    <Link to=''>Link1</Link>
                    <Link to=''>Link2</Link>
                    <Link to=''>Link3</Link>
                    <Link to=''>Link4</Link>
                </div>
                <div className='nav_right'>
                    <h3>icon</h3>
                </div>
            </nav>
        </div>

    );
}