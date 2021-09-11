import Calendar from 'react-calendar';
import {useState} from 'react';
import db from './panelitems.json';

export function PanelUI () {
    const [clicked, setClicked] = useState(false);
    const [classNames, setClassNames] = useState({
        main: "mainPanel",
        left: "leftSlide",
        right: "rightSlide",
        mid: "midSlide"
    });
    const [current, setCurrent] = useState("reminder");
    function handleClick () {
        if (clicked) {
            setClicked(false);
            setClassNames({
                main: "mainPanel",
                left: "leftSlide",
                right: "rightSlide",
                mid: "midSlide"
            });
        } else {
            setClicked(true);
            setClassNames({
                main: "mainPan",
                left: "leftSlid",
                right: "rightSlid",
                mid: "midSlid"
            });
        }
    }
    return (
    <>
      <div className={classNames.main}>
        <div className={classNames.left}>
          <img 
            className="mainIcon"
            alt="mainIcon"
            src="https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg"
            onClick={() => window.location.href="/"}
          />
          <img
            alt="Icon1"
            onClick={() => {
              setCurrent("reminder");
            }}
            src="https://static.thenounproject.com/png/1604214-200.png" 
            style={{backgroundColor: clicked ? 'white' : 'white'}}
          />
          <img 
            alt="Icon2"
            onClick={() => {
              setCurrent("pharmacy");
            }}
            src="https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png"
          />
          <img 
            alt="Icon3"
            onClick={() => {
              setCurrent("map");
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6kDX7VXFmTnAknkm7bzOoAofTcdQW7QKJ11i-ekF4uhIcLgE0k3O8v6p1p44her8an8&usqp=CAU"
          />
        </div>
        <div className={classNames.mid}>
          <div className="panelName">{db[current]}</div>
          <ul>
            {db.list[current].map((item) => <li>{item}</li>)}
          </ul>
        </div>
        <div className={classNames.right}>
          <button className="modeToggle" onClick={handleClick} id="toggleBtn">Toggle</button>
          <div className="">
            Welcome Back! {localStorage.getItem("username") === undefined ? "Guest" : localStorage.getItem("username")}
            <img style={{display: "block"}} alt=" " src="123123"></img>
          </div>
          <Calendar id="panelCalender" calendarType="US" />
          {/* <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div> */}
        </div>
        {function() {
          if (localStorage !== undefined) {
            if (localStorage.getItem("token") == null) {
              window.location.href = "/login";
            }
          }
        }()}
      </div>
    </>
    );
}