import React from 'react';

function Home(props) {
    return (
        <>
            <div class="banner">
                <div class="overlay">
                    <div class="container">
                        <h1>My Recent Mobile Apps</h1>
                        <button>
                            <a href="">Home</a>
                        </button>
                    </div>
                </div>
            </div>

            <div class="container blogcontainer">
                <div class="row">
                    <div class="blogBox col-lg-4 col-md-6 col-sm-6">
                        <div class="blogBox_pic">
                            <img src="/images/portifolio/pot4.png" alt="" />
                            <div class="blogLebal">
                                <a href="">Project Details</a>
                            </div>
                        </div>
                        <div class="blog_text">
                            <ul>
                                <li><i class="far fa-calendar"></i> 12 May 2021</li>
                            </ul>
                            <h5>
                                <a href="">Sell & Bull App</a>
                            </h5>
                            <p>
                                I enjoy creating things that live on the internet, whether that be
                                websites, applications, or anything in between...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
