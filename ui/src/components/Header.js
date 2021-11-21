import React from 'react';
import { Link} from "react-scroll";

function Header() {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
            
        <a class="navbar-brand brand" href="#">{" "}{" "}{" "}Sudhir Barik</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                            <a class="nav-link " href="#portfolio">Projects <span class="sr-only">(current)</span></a></Link>
                </li>
                <li class="nav-item active">
                <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                            <a class="nav-link " href="#portfolio">Skills <span class="sr-only">(current)</span></a></Link>
                </li>
                <li class="nav-item active">
                <Link
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                            <a class="nav-link " href="#portfolio">Experience <span class="sr-only">(current)</span></a></Link>
                </li>
                <li class="nav-item active">
                <Link
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >
                            <a class="nav-link " href="#education">Education <span class="sr-only">(current)</span></a></Link>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Resume <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
        </nav >
    );
}

export default Header;
