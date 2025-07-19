import Menu from "../../menu/menu.tsx";
import SectionDate from "./SectionDate.tsx";
import SectionMethodsArr from "./SectionMethodsArr.tsx";
import SectionRestApiFetch from "./SectionRestApiFetch.tsx";
import {type CSSProperties, useState} from "react";
import SectionEvents from "./SectionEvents.tsx";

type ComponentName = "none" | 'date' | 'methodsArr' | 'restApiFetch' | 'notesEvents' | 'notes';
const styleRound = {
    fontSize: '1.3rem',
    lineHeight: '1.3rem',
} as CSSProperties

function OtherPage(){
    const [activeTab, setActiveTab] = useState<ComponentName>('none');
    const toggleComponent = (componentName: ComponentName) => {
        if (activeTab === componentName){
            setActiveTab('none');
        } else {
            setActiveTab(componentName)
        }
    }

    return (
        <>
            <header>
                <div className="container">
                    <Menu />
                </div>
            </header>
            <main>
                <div className="container">
                    <div className="expanded">
                        <div className={`expanded__item ${activeTab === "date" ? "expanded__item_active" : undefined}`}
                             onClick={() => toggleComponent('date')}>
                            {activeTab === 'date' ? "скрыть" : "показать"} Date. Форматирование дат и чисел
                            <span style={styleRound}
                                  className={activeTab === "date" ? "expanded__item_active" : undefined}>●</span>
                        </div>
                        <div
                            className={`expanded__item ${activeTab === "methodsArr" ? "expanded__item_active" : undefined}`}
                            onClick={() => toggleComponent('methodsArr')}>
                            {activeTab === 'methodsArr' ? "скрыть" : "показать"} Методы массивов
                            <span style={styleRound}
                                  className={activeTab === "methodsArr" ? "expanded__item_active" : undefined}>●</span>
                        </div>
                        <div
                            className={`expanded__item ${activeTab === "restApiFetch" ? "expanded__item_active" : undefined}`}
                            onClick={() => toggleComponent('restApiFetch')}>
                            {activeTab === 'restApiFetch' ? "скрыть" : "показать"} Интеграция с REST API — fetch, Axios
                            <span style={styleRound}
                                  className={activeTab === "restApiFetch" ? "expanded__item_active" : undefined}>●</span>
                        </div>
                        <div
                            className={`expanded__item ${activeTab === "notesEvents" ? "expanded__item_active" : undefined}`}
                            onClick={() => toggleComponent('notesEvents')}>
                            {activeTab === 'notesEvents' ? "скрыть" : "показать"} Заметки Events
                            <span style={styleRound}
                                  className={activeTab === "notesEvents" ? "expanded__item_active" : undefined}>●</span>
                        </div>
                        <div
                            className={`expanded__item ${activeTab === "notes" ? "expanded__item_active" : undefined}`}
                            onClick={() => toggleComponent('notes')}>
                            {activeTab === 'notes' ? "скрыть" : "показать"} Заметки
                            <span style={styleRound}
                                  className={activeTab === "notes" ? "expanded__item_active" : undefined}>●</span>
                        </div>
                    </div>
                    {activeTab === "date" && <SectionDate/>}
                    {activeTab === "methodsArr" && <SectionMethodsArr/>}
                    {activeTab === "restApiFetch" && <SectionRestApiFetch/>}
                    {activeTab === "notesEvents" && <SectionEvents />}
                    {activeTab === "notes" && <h3>Здесь будут заметки</h3>}
                </div>
            </main>


        </>
    )
}

export default OtherPage;