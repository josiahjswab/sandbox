import React, { Component } from 'react';

export default class FooComponent extends Component {

    render() {
        return (
            <div>

                
                {/* Image block. */}

                <div className="image-block">
                    <img src=""></img>
                </div>

                {/* Information block. */}

                <div className="infomative-block">
                    <h1></h1>
                    <h3></h3>
                    <div>
                        <p></p>
                    </div>
                </div>

                {/* Cards block. */}

                <div className="card-block-container">
                    {/* The following div is a single card */}
                    <div className='card-block'>
                        <div class="talk-bubble tri-right btm-left-in">
                            <div class="talktext">
                                <p>
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
                        <div class='talktext'>
                            <img src='' alt='HS'></img>
                            <div class='inline'><span class='emphasised-text'>Steven Schwarzmann,</span> UI Engineer @ CalSense</div>
                        </div>
                    </div>

                </div>






            </div>
                );
            }
}