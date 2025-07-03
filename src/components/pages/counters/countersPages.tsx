import { countersArray } from "./countersConfig.ts";
import Menu from "../../menu/menu.tsx";


export  default function CountersPages(){
    return (
        <div className="container">
            <Menu />
            <section className="counter">
                {countersArray.map(counter => {
                    const CounterComponent = counter.component;
                    return (
                        <div key={counter.id} className={"counter__wrap"}>
                            <CounterComponent />
                        </div>
                    )
                })}
            </section>
        </div>
    )
}