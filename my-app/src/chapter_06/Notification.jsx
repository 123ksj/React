import React from "react";

const styles = {
  wrapper: {
    margin: 9,
    paddin: 9,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 15,
  },
  messageText: {
    color: "black",
    fontSize: 15,
  },
};

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.setState = {};
    // this.state = {};
  }

  componentDidMount(){
    console.log(`${this.props.id} componentDidMount() called.`);
  }

  componentDidUpdate(){
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }

  componentWillUnmount(){
    console.log(`${this.props.id} componentWillUnmount() called.`);
  }

  render(){
    return(
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;