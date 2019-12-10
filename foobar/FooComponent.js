import React, { Component } from 'react';

export default class Div-Templates extends Component {

    render() {
        return (
            <div>

                {/* Image block. */}

                <div className="image-block">
                    <img src=""></img>
                </div>

                {/* Information block. */}

                <div className="information-block">
                    <h1 className="text-align-center"></h1>
                    <h3 className="text-align-center"></h3>
                    <div className="talk-text">
                        <p className="rm-browser-margin"></p>
                    </div>
                </div>

                {/* Quote block */}

                <div className="quote-wrapper">
                        <h1 className="text-align-center">{/*Title*/}</h1>
                        <p className="rm-browser-margin text-align-center talk-text">Just about anyone can learn to code if they have grit, basic problem solving skills, and are open to learning. We take people from zero experience to job ready.</p>
                        <p className="rm-browser-margin text-align-center add-top-padding"><span className="emphasised-background">Michael Roberts Jr</span></p>
                </div>

                {/* Testimonial block. */}

                <div className="testimonial-block-wrapper flex-wrap">
                    {/* The following div is a single card */}
                    <div className="testimonial-block">
                        <div className="talk-bubble talk-bubble-spike">
                            <div className="talk-text">
                                <p className="rm-browser-margin">
                                    Michael was an instructor at the code school that originally got me into software development and
                                    jump-started my career path. He is extremely knowledgeable and was able to answer any questions I brought to
                                    the table. Unlike others, he wouldn’t just guide you to the solution to your problem. Instead, he would
                                    respond with intelligent questions that would be able to lead you to your answer. This process has helped me
                                    tremendously with future problems and questions that I have had in a way that now I can ask myself those
                                    questions and ultimately lead myself to a solution. I’m grateful to of had the chance to be taught by him
                                    and learn how to solve difficult issues that will benefit me for the rest of my coding career.
                                </p>
                            </div>
                        </div>
                        {/* Student photo icon and name */}
                        <div className="talktext flex-row">
                            <img src="" alt="Icon"></img>
                            <div className="inline">
                                <span className="emphasised-text">Steven Schwarzmann</span> UI Engineer @ CalSense
                            </div>
                        </div>
                    </div>
                    {/* Copy above div as many times as needed and paste here. */}
                </div>

                {/* Card shadow box */}

                <div className="card-block flex-wrap">
                    <div className="card-bubble text-align-center shadow">
                        <div className="talk-text rm-top-padding text-align-center">
                            <div className='bookmark'>
                                <div className="circle-center flex-center shadow">
                                    <img className="icon-fixture" src=""></img>
                                </div>
                            </div>

                            <h2>Intro to web <span className='block'> development</span></h2>
                            <p className="rm-browser-margin">
                                Start using HTML, CSS, and JavaScript to build websites and learn the basics. Begin to learn how to learn to code effectively. Start ramping up on the technologies used to build modern websites.
                            </p>
                        </div>
                    </div>
                </div>

                {/* END */}

            </div>
        );
    }
}
