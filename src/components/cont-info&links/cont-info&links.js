import React from 'react';
import './cont-info&links.css';

function Continfolinks() {
    return(
        <div className="continfolinks-container">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Himbelton website development</th>
                            <th>Services</th>
                            <th>About</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="button"><a href="mailto:info@himbelton.nl">info@himbelton.nl</a></td>
                            <td><a href="https://www.himbelton.nl/zakelijke-website-laten-maken">Websites</a></td>
                            <td><a href="https://www.linkedin.com/in/max-zijlstra-4a79b2115/">LinkedIn</a></td>
                            <td><a href="mailto:info@himbelton.nl">info@himbelton.nl</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a href="https://www.himbelton.nl/zakelijke-website-laten-maken">Webshop</a></td>
                            <td><a href="https://www.instagram.com/max.zijlstra/">Instagram</a></td>
                            <td>+31 6 5727 3819</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><a href="http://www.himbelton.nl/">Website</a></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="two-links">
                <div>
                    <a href="https://www.himbelton.nl/">www.himbelton.nl</a>
                </div>
                <div>
                    <a href="https://www.instagram.com/max.zijlstra/">
                        <img src="./instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Continfolinks;