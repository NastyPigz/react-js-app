import {
    Link
} from "react-router-dom";

export function NavBar(props) {
    let arr = [];
    Object.keys(props).forEach((name) => {
        arr.push(
            <li>
                <Link to={`/${name === "Home" ? '' : name.toLowerCase()}`}>{name}</Link>
            </li>
        );
    });
    return (
        <nav className="Navigation-Bar" id="navigationBar">
            <div>
                <img alt="Placeholder" src="https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-lshc-global-health-care-p.jpg"></img>
                <ul>
                    {arr}
                </ul>
            </div>
        </nav>
    )
}