import Calendar from 'react-calendar';
import {useState} from 'react';

export function PanelUI () {
    const [clicked, setClicked] = useState(false);
    const [classNames, setClassNames] = useState({
        main: "mainPanel",
        left: "leftSlide",
        right: "rightSlide"
    });
    function handleClick () {
        if (clicked) {
            setClicked(false);
            document.body.style.backgroundColor = "#111827";
            setClassNames({
                main: "mainPanel",
                left: "leftSlide",
                right: "rightSlide"
            });
        } else {
            setClicked(true);
            document.body.style.backgroundColor = "papayawhip";
            setClassNames({
                main: "mainPan",
                left: "leftSlid",
                right: "rightSlid"
            });
        }
    }
    return (
    <>
      <div className={classNames.main}>
        <div className={classNames.left}>
          <img alt="mainIcon" src="https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg" />
          <img alt="Icon1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6kDX7VXFmTnAknkm7bzOoAofTcdQW7QKJ11i-ekF4uhIcLgE0k3O8v6p1p44her8an8&usqp=CAU" />
          <img alt="Icon2" src="https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg" />
          <img alt="Icon3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6kDX7VXFmTnAknkm7bzOoAofTcdQW7QKJ11i-ekF4uhIcLgE0k3O8v6p1p44her8an8&usqp=CAU" />
        </div>
        <div className={classNames.right}>
          <button className="modeToggle" onClick={handleClick} id="toggleBtn">Toggle</button>
          <Calendar id="panelCalender" />
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
          <div>Test</div>
          <div>Test</div>
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