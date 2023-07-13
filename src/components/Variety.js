import red11 from "../assests/red11.jpg";
import red12 from "../assests/red12.jpg";
import white11 from "../assests/white11.jpg";
import white12 from "../assests/white12.jpg";
import blue11 from "../assests/blue11.jpg";
import blue12 from "../assests/blue12.jpg";
import black11 from "../assests/black11.jpg";
import black12 from "../assests/black12.jpg";
import "./varietystyles.css";
import Varietydata from "./Varietydata";
const Variety=()=>{
    return(
        <div className="variety">
            <h1>Varieties Of Granites</h1>
            <p>Granite that will last for generations.</p>
            <Varietydata className="first-des"
            heading="Red-Brown Granite"
            text="Red-brown granite is a popular choice for use in countertops, flooring, and other interior and exterior applications. It is a durable and versatile material that is also relatively affordable.
            Most Popular are:-
            Imperial Red Granite , Tan Brown Granite .
            Found in different location in india Rajasthan , Karnataka, Telengana."
            img1={red11}
            img2={red12}
            />
            <Varietydata className="first-des-reverse"
            heading="Blue Granite"
            text="blue granite is valued for its striking appearance, strength, and versatility, making it a sought-after choice for adding a touch of elegance to various architectural and design projects
            Most Popular are:-
            Vizag Blue Granite,Lavender Blue Granite, Minister Blue Granite.
            Found in different location in india Rajasthan, Andhra Pradesh, West Bengal."
            img1={blue11}
            img2={blue12}
            />
            <Varietydata className="first-des"
            heading="Black Granite"
            text="Black granite is a beautiful and durable material that is a popular choice for use in a variety of applications. If you are looking for a unique and affordable granite for your next project, black granite is a great option.
            Most Popular are:-
            Absolute Black Granite, Black Galaxy Granite, Kashmir Black Granite.
            Found in different location in india Tamil Nadu , Karnataka, Andhra Pradesh"
            img1={black11}
            img2={black12}
            />
            <Varietydata className="first-des-reverse"
            heading="White Granite"
            text="Red-brown granite is a popular choice for use in countertops, flooring, and other interior and exterior applications. It is a durable and versatile material that is also relatively affordable.
            Most Popular are:-
            Colonial White Granite,Royal White Granite, Magnolia White Granite .
            Found in different location in india Gujarat, Karnataka, Tamil Nadu."
            img1={white11}
            img2={white12}
            />
        </div>
    );
};
export default Variety;