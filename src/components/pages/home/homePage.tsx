import type { JSX } from "react";
import Menu from "../../menu/menu.tsx";
import Watch from "./watch.tsx";
import ParticleBackground from "./BgPages.tsx";


function HomePage(): JSX.Element {
    return (
        <div style={{display: "flex", flexDirection: "column", height: "100vh"}} className={"container"}>
            <ParticleBackground
                className="custom-particles"
                style={{ zIndex: -10 }}
            />
            <Menu />
            <Watch />
        </div>

        )
}

export default HomePage;