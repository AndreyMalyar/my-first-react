import Menu from "../../menu/menu.tsx";
import SectionDate from "./SectionDate.tsx";
import Accordion from "../../Accardion.tsx";
import SectionMethodsArr from "./SectionMethodsArr.tsx";
import SectionRestApiFetch from "./SectionRestApiFetch.tsx";

function OtherPage(){

    return (
        <>
            <header>
                <div className="container">
                    <Menu />
                </div>
            </header>
            <main className="container">
                <div className="container">
                    <Accordion title={"Date. Форматирование дат и чисел"}>
                        <SectionDate />
                    </Accordion>
                    <Accordion title={"Методы массивов"}>
                        <SectionMethodsArr />
                    </Accordion>
                    <Accordion title={"Интеграция с REST API — fetch, Axios"}>
                        <SectionRestApiFetch />
                    </Accordion>
                </div>
            </main>

            <h3>некоторые пояснения</h3>
        </>
    )
}

export default OtherPage;