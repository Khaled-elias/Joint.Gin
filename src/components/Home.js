
const { default: HeaderHome } = require("./HeaderHome")
const { default: Section1Home } = require("./Section1Home")
const { default: Section2Home } = require("./Section2Home")
const { default: Section3Home } = require("./Section3Home")
const { default: Section4Home } = require("./Section4Home")

const Home = () => {
    return ( 
        <div>
            <HeaderHome />
            <Section1Home />
            <Section2Home />
            <Section3Home />
            <Section4Home />
            
        </div>
     );
}
 
export default Home;