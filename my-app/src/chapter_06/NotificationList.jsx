import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심식사 시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notificationarr:[{
        message: "안녕하세요."
      }],
    }
    // this.state = {
    //   notifications: [],
    // };
  }

  componentDidMount(){
    // const { notifications } = this.state;
    const { notificationarr } = this.state;

    timer = setInterval(() => {
      if(notificationarr && notificationarr.length < reservedNotifications.length){
        const index = notificationarr.length;
        console.log(index);
        notificationarr.push(reservedNotifications[index]);
        this.setState({
          notification: notificationarr,
        });
      } else{
          clearInterval(timer);
          return;
        }
      }, 1000);
    //   if(notification.length < reservedNotifications.length){
    //     const index = notifications.length;
    //     notifications.push(reservedNotifications[index]);
    //     this.setState({
    //       notifications: notifications,
    //     });
    //   } else{
    //     this.setState({
    //       notifications: [],
    //     });
    //     clearInterval(timer);
    //   }
    // }, 1000);
  }

  render(){
    return (
      <div>
        {/* {this.state.notifications.map((notification) => { */}
        {this.state.notificationarr.map((notification) => {
          return (
            <Notification 
              key={notification.id}
              id={notification.id}
              message={notification.message} 
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;