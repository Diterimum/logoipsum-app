import React, {useState} from 'react';
import './FAQs.css';

function FAQs(){
    const [LeftFirstvisibility, setLeftFirstvisibility]=useState(false);
    const [LeftSecondvisibility, setLeftSecondvisibility]=useState(false);
    const [LeftThirdvisibility, setLeftThirdvisibility]=useState(false);

    const LeftFirstClick=()=>{
        setLeftFirstvisibility(!LeftFirstvisibility)};
    const LeftSecondClick=()=>{
        setLeftSecondvisibility(!LeftSecondvisibility)};
    const LeftThirdClick=()=>{
        setLeftThirdvisibility(!LeftThirdvisibility)};

    const [RightFirstvisibility, setRightFirstvisibility]=useState(false);
    const [RightSecondvisibility, setRightSecondvisibility]=useState(false);
    const [RightThirdvisibility, setRightThirdvisibility]=useState(false);

    const RightFirstClick=()=>{
        setRightFirstvisibility(!RightFirstvisibility)};
    const RightSecondClick=()=>{
        setRightSecondvisibility(!RightSecondvisibility)};
    const RightThirdClick=()=>{
        setRightThirdvisibility(!RightThirdvisibility)};

        return (
            <div className="TwoColumns">
                <div className="LeftColumn">
                    <div className="LeftFirstColumn">
                        <div className="LeftFirstColumnTop">
                            <h3>What is included with the website?</h3>
                            <button className="checkbox" onClick={LeftFirstClick}>{LeftFirstvisibility ? '-' : '+'}</button>
                        </div>
                        {LeftFirstvisibility && (
                            <p>
                                - Ownership<br/>
                                - Filling your website<br/>
                                - Installation on hosting<br/>
                                - Help and explanation for hosting/management<br/>
                                - Google Indexation
                            </p>
                        )}
                    </div>
                    <div className="LeftSecondColumn">
                        <div className="LeftSecondColumnTop">
                            <h3>More about Himbelton</h3>
                            <button className="checkbox" onClick={LeftSecondClick}>{LeftSecondvisibility ? '-' : '+'}</button>
                        </div>
                        {LeftSecondvisibility&&(
                            <p>
                                With my company, Himbelton, I create business websites and web shops for companies.<br/><br/>
                                On my website, you can find more information about having a website made.
                            </p>
                        )}
                    </div>
                    <div className="LeftThirdColumn">
                        <div className="LeftThirdColumnTop">
                            <h3>Domain name & hosting</h3>
                            <button className="checkbox" onClick={LeftThirdClick}>{LeftThirdvisibility ? '-' : '+'}</button>
                        </div>
                        {LeftThirdvisibility&&(
                            <p>I make sure your domain name hosts this site.</p>
                        )}
                    </div>
                </div>
                <div className="RightColumn">
                    <div className="RightFirstColumn">
                        <div className="RightFirstColumnTop">
                            <h3>What does this website cost?</h3>
                            <button className="checkbox" onClick={RightFirstClick}>{RightFirstvisibility ? '-' : '+'}</button>
                        </div>
                        {RightFirstvisibility&&(
                            <p>2000,- excl. btw</p>
                        )}
                    </div>
                    <div className="RightSecondColumn">
                        <div className="RightSecondColumnTop">
                            <h3>Is expansion possible?</h3>
                            <button className="checkbox" onClick={RightSecondClick}>{RightSecondvisibility ? '-' : '+'}</button>
                        </div>
                        {RightSecondvisibility&&(
                            <p>
                                Yes, even multiple pages is no problem. We discuss all this together in advance in a personal meeting.<br/><br/>
                                I charge approximately between 35 and 60 euros per new section. This depends on how extensive it is.<br/><br/>
                                A section is e.g. where you are now with all the questions including the title "frequently asked questions".<br/><br/>
                                A normal web page has about 2-5 sections.<br/><br/>
                                The bottom section, also called footer, is already created and I don't count it as a section on new pages!
                            </p>
                        )}
                    </div>
                    <div className="RightThirdColumn">
                        <div className="RightThirdColumnTop">
                            <h3>Is managing the website easy?</h3>
                            <button className="checkbox" onClick={RightThirdClick}>{RightThirdvisibility ? '-' : '+'}</button>
                        </div>
                        {RightThirdvisibility&&(
                            <p>
                                Ja, geen updates nodig.<br/><br/>
                                De website kan ook omgezet worden naar Webflow Hosting. Met deze functionaliteit kan je gemakkelijk zelf nieuwe blogs, afbeeldingen of teksten toevoegen.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        );
    }    

export default FAQs;