import DaySide from "./DaySide/DaySide";
import MainSide from "./MainSide/MainSide";


const Hero = ()=> {
    return <main>
    <div className="container">
        <div className="taskinput-output">
            <DaySide/>
            <MainSide/>
        </div>
    </div>
</main>
}

export default Hero;