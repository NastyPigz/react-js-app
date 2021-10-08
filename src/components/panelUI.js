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
        document.getElementById("addName").value = "";
        document.getElementById("addTaskContent").value = "";
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
    function showTaskClick({name, title, content}) {
      let res = prompt(JSON.stringify({name: name, title: title, content: content}));
      if (!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!res) {
        if (String(+res) === "NaN") {
          alert("Invalid Input");
        } else {
          const publicVapidKey = "BL0IXkcYpZQQBd7ij3CjRmbMYznRXeDLnlmLXRM0VOB0y0sU1rcKTSGIykd0zquydKlFF_O8tRsw-5hQnOumy0Y";
          async function send() {
            console.log("Registering service worker...");
            const register = await navigator.serviceWorker.register("/worker.js", {
              scope: "/@me/"
            });
            console.log("Service Worker Registered...");
            console.log("Registering Push...");
            const subscription = await register.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
            });
            console.log("Push Registered...");
          
            console.log("Sending Push...");
            try {
              await fetch("http://localhost:5000/push/subscribe", {
                method: "POST",
                body: JSON.stringify({
                  subscription: subscription,
                  delay: +res
                }),
                headers: {
                  "content-type": "application/json"
                }
              });
            } catch (err) {
              alert("Push Notification Server is currently unavailable.");
              return;
            }
            console.log("Push Sent...");
          }
          
          function urlBase64ToUint8Array(base64String) {
            const padding = "=".repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
              .replace(/-/g, "+")
              .replace(/_/g, "/");
          
            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);
          
            for (let i = 0; i < rawData.length; ++i) {
              outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
          }

          send().catch(err => {
            if (err) {
              send().catch(err => console.error(err));
            }
          });
        }
      }
    }
    const [data, setData] = useState({
      reminder: JSON.parse(localStorage.getItem("reminders")) || [],
      pharmacy: [],
      map: []
    });
    (() => {
      localStorage.setItem("reminders", JSON.stringify(data.reminder));
    })()
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
            <form onSubmit={(e) => {e.preventDefault(); setData({...data, reminder: [...data.reminder, {name: document.getElementById("addName").value, title: document.getElementById("addTitle").value, content: document.getElementById("addTaskContent").value}]}); document.getElementById("taskBtn").click();}}>
              <input type="text" placeholder="Name" id="addName" />
              <input type="text" placeholder="Title" id="addTitle" />
              <input type="text" placeholder="Content" id="addTaskContent" />
              <input type="submit" placeholder="Submit" />
            </form>
          </div>
          <div className="delTaskC" id="delTaskC" style={{display: "none", position: "absolute"}}>
            <form onSubmit={(e) => {e.preventDefault(); setData({...data, reminder: data.reminder.filter((val) => val.title === document.getElementById("delTitle").value ? false : true)}); document.getElementById("taskBtn2").click();}}>
              <input type="text" placeholder="Title " id="delTitle" />
              <input type="submit" placeholder="Submit" />
            </form>
          </div>
          <ul>
            {data[current].map((item, index) => <li key={index}>{item.title}</li>).length === 0 ? [<li key={0}>None</li>] : data[current].map((item, index) => <li key={index} onClick={() => showTaskClick(item)}>{item.title}</li>)}
          </ul>
        </div>
        <div className={classNames.right}>
          <button className="modeToggle" onClick={handleClick} id="toggleBtn">Toggle</button>
          <div className="welt">
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