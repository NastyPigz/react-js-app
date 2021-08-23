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
        <div className="Navigation-Bar">
            <ul>
                {arr}
            </ul>
        </div>
    )
}