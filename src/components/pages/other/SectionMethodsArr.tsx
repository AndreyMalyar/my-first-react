import forEachImg from '../../../assets/methodArr/forEach.png';
import methodMap from '../../../assets/methodArr/map.png';
import methodFilter from '../../../assets/methodArr/filter.png';
import methodReducer from '../../../assets/methodArr/reducer.png';
import methodSome from '../../../assets/methodArr/some.png';
import methodEvery from '../../../assets/methodArr/every.png';
import methodFind from '../../../assets/methodArr/find.png';
import methodFindIndex from '../../../assets/methodArr/findIndex.png';

function SectionMethodsArr(){
    return (
        <section className="section">
            <h3 className="section__title">Перебирающие методы массивов</h3>
            <h4 className="section__subtitle">Метод forEach()</h4>
            <div className={"section__code"}>
                <img className="section__code-img" src={forEachImg} alt="метод forEach"/>
                <p className="section__code-description">Метод forEach() выполняет указанную функцию один раз для
                    каждого элемента массива. Этот метод не возвращает нового массива и не прерывается.</p>
            </div>

            <h4 className="section__subtitle">Метод map()</h4>
            <div className={"section__code"}>
                <img className="section__code-img" src={methodMap} alt="метод map"/>
                <p className="section__code-description">
                    Метод map() создает новый массив squared[], содержащий квадраты чисел из массива numbers[].<br/>
                    Метод map() создает новый массив с результатом вызова указанной функции для каждого элемента
                    массива.</p>
            </div>

            <h4 className="section__subtitle">Метод filter()</h4>
            <div className={"section__code"}>
                <img className="section__code-img" src={methodFilter} alt="метод filter"/>
                <p className="section__code-description">
                    Метод filter() создает новый массив evenNumbers[], содержащий только четные числа из массива
                    numbers[].<br/>
                    Метод filter() создает новый массив со всеми элементами, прошедшими проверку, задаваемую в
                    передаваемой функции.
                </p>
            </div>

            <h4 className="section__subtitle">Метод reduce()</h4>
            <div className={"section__code"}>
                <img className="section__code-img" src={methodReducer} alt="метод reduce"/>
                <p className="section__code-description">
                    Метод reduce() применяет функцию к аккумулятору и каждому элементу массива (слева направо), сводя
                    его к единому значению.<br/>
                    Метод reduce() сводит массив numbers[ ] к единому значению sum, суммируя все элементы массива.
                </p>
            </div>

            <h4 className="section__subtitle">Метод some()</h4>
            <div className={"section__code"}>
                <img className="section__code-img" src={methodSome} alt="метод some"/>
                <p className="section__code-description">
                    Метод some() проверяет, удовлетворяет ли хотя бы один элемент массива условию, заданному в
                    передаваемой функции. Возвращает true или false.<br/>
                    Метод some() проверяет, есть ли в массиве numbers[] хотя бы одно четное число, и возвращает true.
                </p>
            </div>

            <h4 className="section__subtitle">Метод every()</h4>
            <div className={"section__code"}>
                <img className="section__code-img" src={methodEvery} alt="метод some"/>
                <p className="section__code-description">
                    Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой
                    функции. Возвращает true или false.<br/>
                    Метод every() проверяет, все ли элементы массива numbers[] положительные, и возвращает true.
                </p>
            </div>

            <h4 className="section__subtitle">Метод find()</h4>
            <div className={"section__code"}>
                <img className="section__code-img" src={methodFind} alt="метод some"/>
                <p className="section__code-description">
                    Метод find() возвращает первое четное число из массива numbers[ ].
                </p>
            </div>

            <h4 className="section__subtitle">Метод findIndex()</h4>
            <div className={"section__code"}>
                <img className="section__code-img" src={methodFindIndex} alt="метод some"/>
                <p className="section__code-description">
                    Метод findIndex() возвращает индекс первого элемента массива, который удовлетворяет условию,
                    заданному в передаваемой функции. Если ни один элемент не удовлетворяет условию, возвращает -1.<br/>
                    Метод findIndex() возвращает индекс первого четного числа в массиве numbers[ ].
                </p>
            </div>

            <h3 className="section__title">Основные методы массивов</h3>
        </section>
    )
}

export default SectionMethodsArr;