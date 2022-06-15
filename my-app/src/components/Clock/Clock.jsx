import React, { Component } from "react";
import s from "./Clock.module.css";

class Clock extends Component{
    state = {
        time: new Date().toLocaleTimeString(),
    }
    intervalId = null;

    componentDidMount() {
        this.intervalId = setInterval(
            () => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
    }

    
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        return (
            <>
                <div className={s.ClockBCG}>Доброго вечора ми з України</div>
                <div className={s.ClockFace}>{this.state.time}</div>
            </>
            )
    }
};


export default Clock;