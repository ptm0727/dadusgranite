import { Component } from "react";
import "./varietystyles.css"
import red11 from "../assests/red11.jpg"
import red12 from "../assests/red12.jpg"
import white11 from "../assests/white11.jpg"
import white12 from "../assests/white12.jpg"
import blue11 from "../assests/blue11.jpg"
import blue12 from "../assests/blue12.jpg"
import black11 from "../assests/black11.jpg"
import black12 from "../assests/black12.jpg"
class Varietydata extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1}></img>
                    <img alt="img" src={this.props.img2}></img>
                </div>
            </div>
        );
    }
}
export default Varietydata