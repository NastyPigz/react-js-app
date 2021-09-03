import {
    Link
} from "react-router-dom";

export function NavBar(props) {
    let arr = [];
    Object.keys(props).forEach((name) => {
        arr.push(
            <li key={name}>
                <Link to={`/${name === "Home" ? '' : (name === "My" ? "@me" : name.toLowerCase())}`}>{name}</Link>
            </li>
        );
    });
    return (
        <>
            <nav className="Navigation-Bar" id="navigationBar">
                <div>
                    <img alt="Placeholder" src="https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-lshc-global-health-care-p.jpg"></img>
                    <ul>
                        {arr}
                    </ul>
                </div>
            </nav>
            <nav className="mobileNav" style={{display: "none"}}>
                <div>
                    <img alt="Placeholder" src="https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-lshc-global-health-care-p.jpg"></img>
                    <ul className="menu" style={{display: "none"}}>
                        {arr}
                    </ul>
                </div>
            </nav>
        </>
    )
}