


function SectionDate(){

    return (
        <section className="section">
            <h3 className="section__title">Объект Date</h3>
            <p className="section__description">Объект Date в JavaScript представляет собой дату и время. У него есть
                множество методов для работы с датами, включая получение текущей даты и времени, задание даты и времени,
                а также форматирование.</p>
            <h4 className={"section__subtitle"}>Текущая дата и время:</h4>
            <div className={"section__wrapCode"}>
                <code>
                    const now = new Date();<br/>
                    console.log(now); <span className="section__wrapCode-commit">// Выводит текущую дату и время</span>
                </code>
            </div>
            <h4 className="section__subtitle">Задание определенной даты и времени:</h4>
            <div className="section__wrapCode">
                <code>
                    const specificDate = new Date('2024-07-07T10:00:00');
                    console.log(specificDate); <span className="section__wrapCode-commit">// Выводит дату 7 июля 2024 года</span>
                </code>
            </div>
            <h4 className="section__subtitle">Задание даты и времени с помощью числовых значений:</h4>
            <div className="section__wrapCode">
                <code>
                    const anotherDate = new Date(2024, 6, 7, 10, 0, 0);
                    console.log(anotherDate); <span className="section__wrapCode-commit">// Выводит дату 7 июля 2024 года</span>
                </code>
            </div>

            <h4 className="section__subtitle">Методы объекта Date()</h4>
            <p style={{fontWeight: "600", marginLeft: "25px"}}>Получение компонентов даты:</p>
            <div className="section__wrapCode">
                <code>
                    const now = new Date();<br/>
                    <br/>
                    console.log(now.getFullYear()); <span
                    className="section__wrapCode-commit">// Текущий год</span><br/>
                    console.log(now.getMonth()); <span className="section__wrapCode-commit">// Текущий месяц (-1) получить месяц (от 0 до 11)</span><br/>
                    console.log(now.getDate()); <span
                    className="section__wrapCode-commit">// Текущий день (от 1 до 31) </span><br/>
                    console.log(now.getHours()); <span
                    className="section__wrapCode-commit">// Текущий час (от 0 до 23)</span><br/>
                    console.log(now.getMinutes()); <span className="section__wrapCode-commit">// Текущая минута (от 0 до 59)</span><br/>
                    console.log(now.getSeconds()); <span className="section__wrapCode-commit">// Текущая секунда (от 0 до 59)</span><br/>
                </code>
            </div>
            <p style={{fontWeight: "600", marginLeft: "25px"}}>Установка компонентов даты:</p>
            <div className="section__wrapCode">
                <code>
                    const date = new Date();<br/>
                    <br/>
                    date.setFullYear(2025);<br/>
                    date.setMonth(0); <span className="section__wrapCode-commit">// Январь</span><br/>
                    date.setDate(15);<br/>
                    date.setHours(12);<br/>
                    date.setMinutes(30);<br/>
                    date.setSeconds(45);<br/>
                    <br/>
                    console.log(date.toString());<br/>
                </code>
            </div>
        </section>
    )
}

export default SectionDate;