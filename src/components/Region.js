import "./regionstyles.css"
import Regiondata from "./Regiondata";
import card1 from "../assests/card1-banglore.png"
import card2 from "../assests/card2-rajasthan.jpg"
import card3 from "../assests/card3-southindia.jpg"

function Region(){
    return(
        <div className="region">
            <h1>Regional Granite Varieties</h1>
            <p>Unmatched variety, quality, and service in granite.</p>
            <div className="regioncard">
                <Regiondata
                image={card1}
                heading="Banglore Granite"
                text="Bangalore itself is not known for 
                being a significant granite-producing 
                region, it serves as a major hub for 
                the granite industry in India. 
                Many granite processing and trading 
                businesses are located in and around 
                Bangalore, making it a prominent center
                 for the granite trade. Granite from 
                 various regions of India is often processed and 
                 traded in Bangalore."
                />
                <Regiondata
                image={card2}
                heading="Rajasthan Granite"
                text="Rajasthan granite is highly regarded 
                for its quality, durability, and diverse 
                range of colors and patterns. The state 
                offers a wide variety of granite options, 
                including popular choices like Rajasthan 
                Black, Rajasthan Pink, and Jalore White. 
                These granite varieties from Rajasthan are 
                widely used in construction and 
                interior design due to their aesthetic appeal 
                and durability."
                />
                <Regiondata
                image={card3}
                heading="SouthIndian Granite"
                text="South India is known for its rich reserves 
                of granite and is a major hub for granite production
                 in the country. South Indian granite is highly sought
                  after for its wide range of colors, unique patterns, 
                  and quality. Some popular South Indian granite varieties 
                  include Kashmir White, Tan Brown, Absolute Black, Colonial Gold, 
                and Shivakashi Yellow, among others. These granites are 
                widely used in both residential and commercial projects"
                />
            </div>
        </div>
    );
}
export default Region;