import Calendar from 'react-calendar';
import {useState} from 'react';
import db from './panelitems.json';

export function PanelUI () {
    const [clicked, setClicked] = useState(false);
    const [taskLd, setTaskClicked] = useState(false);
    const [taskLd2, setTaskClicked2] = useState(false);
    const [classNames, setClassNames] = useState({
        main: "mainPanel",
        left: "leftSlide",
        right: "rightSlide",
        mid: "midSlide"
    });
    const [current, setCurrent] = useState("reminder");
    function handleTaskClick() {
      if (taskLd) {
        setTaskClicked(false);
        document.getElementById("taskBtn").style.backgroundColor = "green";
        document.getElementById("addTaskC").style.display = "none";
        document.getElementById("addTitle").value = "";
      } else {
        setTaskClicked(true);
        document.getElementById("taskBtn").style.backgroundColor = "red";
        document.getElementById("addTaskC").style.display = "block";
      }
    }
    function handleTaskClick2() {
      if (taskLd2) {
        setTaskClicked2(false);
        document.getElementById("taskBtn2").style.backgroundColor = "green";
        document.getElementById("delTaskC").style.display = "none";
        document.getElementById("delTitle").value="";
      } else {
        setTaskClicked2(true);
        document.getElementById("taskBtn2").style.backgroundColor = "red";
        document.getElementById("delTaskC").style.display = "block";
      }
    }
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
    const [data, setData] = useState({
      reminder: [],
      pharmacy: [],
      map: []
    })
    setTimeout(
      () => {
        if (localStorage.getItem("reminders") === undefined) {
          localStorage.setItem("reminders", JSON.stringify([]));
        } else {
          localStorage.setItem("reminders", JSON.stringify(data.reminder))
        }
      },
      0
    )

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
          <button onClick={handleTaskClick} className="taskBtn" id="taskBtn">{taskLd ? "Close" : "Add Task"}</button>
          <button onClick={handleTaskClick2} className="taskBtn2" id="taskBtn2">{taskLd2 ? "Close" : "Del Task"}</button>
          <div className="addTaskC" id="addTaskC" style={{display: "none"}}>
            <form onSubmit={(e) => {e.preventDefault(); setData({...data, reminder: [...data.reminder, document.getElementById("addTitle").value]}); document.getElementById("taskBtn").click();}}>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Title" id="addTitle" />
              <input type="text" placeholder="Content" />
              <input type="submit" placeholder="Submit" />
            </form>
          </div>
          <div className="delTaskC" id="delTaskC" style={{display: "none", position: "absolute"}}>
            <form onSubmit={(e) => {e.preventDefault(); setData({...data, reminder: data.reminder.filter((val) => val === document.getElementById("delTitle").value ? false : true)}); document.getElementById("taskBtn2").click();}}>
              <input type="text" placeholder="Title " id="delTitle" />
              <input type="submit" placeholder="Submit" />
            </form>
          </div>
          <ul>
            {data[current].map((item) => <li>{item}</li>).length === 0 ? [<li>None</li>] : data[current].map((item) => <li>{item}</li>)}
          </ul>
        </div>
        <div className={classNames.right}>
          <button className="modeToggle" onClick={handleClick} id="toggleBtn">Toggle</button>
          <div className="">
            Welcome Back! {localStorage.getItem("username") === undefined ? "Guest" : localStorage.getItem("username")}
            <img style={{display: "block"}} alt=" " src="123123"></img>
          </div>
          <Calendar id="panelCalender" calendarType="US" />
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