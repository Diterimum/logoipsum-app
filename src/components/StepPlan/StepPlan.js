import React from 'react';
import './StepPlan.css';
import StepPlanImage from './StepPlan-image.png';

function StepPlan(){
    return(
        <div className="step-plan">
            <div className="step-plan-text">
                <h1>Step-by-step plan</h1><br />
                <p>Step 1: Send a request via e-mail<br />
                Step 2: An (online) conversation together<br />
                Step 3: Building the website together according to your wishes<br />
                Step 4: Adjusting your house style, images and texts<br />
                Step 5: Linking the domain name<br />
                Step 6: Website online!<br /><br />
                <a href="#h_letter">send an e-mail to</a></p>
            </div>
            <div className="step-plan-image">
                <img src={StepPlanImage} alt="Step Plan asociation"/>
            </div>
        </div>
    );
}

export default StepPlan;