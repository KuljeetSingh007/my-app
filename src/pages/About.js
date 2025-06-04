import RefillBar from "../Components/RefilBar";
import '../css/about.css';
function About() {
 
  return <div className="about">
    <RefillBar fill={100}/>
    <RefillBar fill={30}/>
    <RefillBar fill={90}/>
    <RefillBar fill={70}/>
  </div>;
}

export default About;
