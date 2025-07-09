import GetRequest from "../../../assets/imgRestApi/GET_request.png";
import PostRequest from "../../../assets/imgRestApi/POST_request.png";
import typeGetPost from "../../../assets/imgRestApi/type_get-post.png";
import typeResult from "../../../assets/imgRestApi/type_result.png";
import POST_PUT_type from "../../../assets/imgRestApi/POST-PUT_type.png";
import AxiosGetRequest from "../../../assets/imgRestApi/Axios-GET_request.png";
import AxiosPostRequest from "../../../assets/imgRestApi/Axios-POST_request.png";
import AxiosType from "../../../assets/imgRestApi/Axios_type.png";
import typeBodyRequest from "../../../assets/imgRestApi/type_body-request.png";
import fetchError from "../../../assets/imgRestApi/fetchError.png";
import AxiosError from "../../../assets/imgRestApi/AxiosError.png";


const styleSpan = {
    margin: "5px 0 8px 20px",
    display: "inline-block",
}
const styleIndent = {
    margin: "5px 0 0 20px",
}

function SectionRestApiFetch () {


    return (
        <section>
            <h3 className="section__subtitle">Базовый синтаксис для GET-запроса</h3>
            <div className="section__code">
                <img className="section__code-img" src={GetRequest} alt="GET-запрос"/>
                <p className="section__code-description">fetch API – это встроенный в большинство браузеров JavaScript
                    API для
                    выполнения HTTP-запросов. Он предоставляет более мощный и гибкий интерфейс по сравнению со старым
                    XMLHttpRequest.<br/>
                    <b style={{marginTop: "10px", display: "block"}}>Ключевые особенности fetch:</b>
                    <span style={styleSpan}>Возвращает промис, который разрешается объектом Response (представляющим ответ сервера), как только сервер ответил заголовками. Тело ответа еще может загружаться.</span>
                    <span style={styleSpan}>Доступна как fetch() в глобальной области видимости.</span>
                    <span
                        style={styleSpan}>Позволяет настраивать заголовки, метод, тело запроса и другие параметры.</span>
                </p>
            </div>

            <h3 className="section__subtitle">POST-запрос</h3>
            <div className="section__code">
                <img src={PostRequest} className="section__code-img" alt="Post-запрос"/>
                <p className="section__code-description">Требует указания опций: method, headers (особенно Content-Type)
                    и body.</p>
            </div>

            <h3 className="section__subtitle">Типизация запросов и ответов fetch</h3>
            <div className="section__code">
                <img src={typeGetPost} alt="Тип для ответа API" className="section__code-img"/>
                <p className="section__code-description">TypeScript позволяет сделать работу с fetch более безопасной,
                    явно описывая типы ожидаемых данных. <br/>
                    <b style={{marginTop: "10px", display: "block"}}>Тип для ответа API</b>
                    <span style={styleSpan}>Определите interface или type для структуры JSON, которую возвращает ваш API.</span>
                </p>
            </div>

            <h3 className="section__subtitle">Типизация результата</h3>
            <div className="section__code">
                <img src={typeResult} className="section__code-img" alt=""/>
                <p className="section__code-description">
                    <b style={{marginTop: "10px", display: "block"}}>Типизация результата response.json()</b>
                    Метод .json() возвращает Promise&lt;any&gt;. Чтобы TypeScript знал тип данных, используйте явное
                    приведение типа с as Promise&lt;YourType&gt; или типизируйте возвращаемое значение вашей асинхронной
                    функции.
                </p>
            </div>

            <h3 className="section__subtitle">Тип для тела POST/PUT</h3>
            <div className="section__code">
                <img src={POST_PUT_type} alt="типы для тела POST/PUT" className="section__code-img"/>
                <p className="section__code-description">
                    <b style={{marginTop: "10px", display: "block"}}>Тип для тела POST/PUT запроса</b>
                    Определите тип для объекта, который вы отправляете.
                </p>
            </div>

            <h3 className="section__subtitle">Библиотека Axios</h3>
            <p>Axios – это сторонняя JavaScript-библиотека для выполнения HTTP-запросов,
                работающая как в браузере, так и в Node.js. Она основана на промисах и
                предоставляет более удобный и функциональный API по сравнению с fetch.
            </p>
            <b style={{marginTop: "10px", display: "block"}}>Почему Axios?</b>
            <ul style={styleIndent}>
                <li>Простота использования</li>
                <li>Автоматическое преобразование JSON</li>
                <li>Обработка ошибок. Промисы Axios отклоняются (reject) при HTTP-статусах ошибки (4xx, 5xx) по
                    умолчанию, что упрощает обработку ошибок. fetch этого не делает.
                </li>
                <li>Перехватчики (Interceptors). Позволяют глобально изменять запросы или ответы перед их обработкой
                    then/catch.
                </li>
                <li>Отмена запросов</li>
                <li>Защита от XSRF (CSRF).</li>
                <li>Таймауты запросов.</li>
                <li>Удобная работа с FormData.</li>
            </ul>

            <h3 className="section__subtitle">Axios: GET-запрос</h3>
            <div className="section__code">
                <img src={AxiosGetRequest} alt="Axios: GET-запрос" className="section__code-img"/>
            </div>

            <h3 className="section__subtitle">Axios: POST-запрос</h3>
            <div className="section__code">
                <img src={AxiosPostRequest} alt="Axios: POST-запрос" className="section__code-img"/>
                <p className="section__code-description">Axios автоматически преобразует объект JavaScript в JSON-строку
                    и
                    устанавливает заголовок Content-Type: application/json, если переданы данные-
                    объект.
                </p>
            </div>

            <h3 className="section__subtitle">Типизация с Axios</h3>
            <div className="section__code">
                <img src={AxiosType} alt="Типизация с Axios" className="section__code-img"/>
                <p className="section__code-description">
                    Axios хорошо работает с TypeScript и позволяет типизировать как данные ответа, так и
                    данные, отправляемые в теле запроса, с помощью Generics.
                    <b style={{marginTop: "10px", display: "block"}}>Типизация ответа (response.data):</b>
                    Передайте тип ожидаемых данных как первый generic-аргумент методу запроса
                    (get&lt;ResponseType&gt;, post&lt;ResponseType&gt;).
                </p>
            </div>

            <h3 className="section__subtitle">Типизация тела запроса</h3>
            <div className="section__code">
                <img src={typeBodyRequest} alt="Типизация тела запроса" className="section__code-img"/>
                <p className="section__code-description">
                    Axios методы (post, put, patch) имеют следующую общую сигнатуру для типов:
                    <b style={{marginTop: "10px", display: "block"}}>
                        axios.post&lt;T = any, R = AxiosResponse&lt;T&gt;, D = any&gt;(url?: string, data?: D, config?:
                        AxiosRequestConfig&lt;D&gt;): Promise&lt;R&gt;;
                    </b>
                    • T (или R в типе промиса): тип данных ответа (response.data).<br/>
                    • D: тип данных, передаваемых в data (тело запроса)<br/>
                </p>
            </div>

            <h3 className="section__subtitle">Обработка ошибок в fetch</h3>
            <div className="section__code">
                <img src={fetchError} alt="Обработка ошибок в fetch" className="section__code-img"/>
                <p className="section__code-description">
                    Промис fetch() отклоняется только при сетевых ошибках (например, нет соединения).<br/>
                    HTTP-ошибки (статус 4xx, 5xx) НЕ вызывают отклонение промиса. Вы должны проверять response.ok (true
                    для 200-299) или response.status вручную и выбрасывать ошибку, если нужно.
                </p>
            </div>

            <h3 className="section__subtitle">Обработка ошибок в Axios</h3>
            <div className="section__code">
                <img src={AxiosError} alt="Обработка ошибок в Axios" className="section__code-img"/>
                <p className="section__code-description">
                    Промис Axios автоматически отклоняется при HTTP-статусах 4xx (ошибка клиента) и 5xx (ошибка
                    сервера).
                    Это упрощает обработку ошибок.<br/>
                    <br/>
                    Информация об ошибке доступна в объекте error, переданном в catch:<br/>
                    • error.response: Объект ответа (если сервер ответил ошибкой). Содержит error.response.data,
                    error.response.status, error.response.headers<br/>
                    • error.request: Объект запроса (если запрос был сделан, но не получен ответ).<br/>
                    • error.message: Сообщение об ошибке (если ошибка произошла при настройке запроса).
                </p>
            </div>

            <h3 className="section__subtitle">Кастомные хуки для запросов</h3>
            <p>Чтобы избежать дублирования логики выполнения API-запросов, управления
                состоянием загрузки, данных и ошибок в каждом компоненте, эту логику выносят
                в кастомные хуки.</p>
            <b style={{marginTop: "10px", display: "block"}}>Идея кастомного хука для API (useApi или useFetch):</b>
            <ul>
                <li>Принимает URL и опциональные параметры запроса</li>
                <li>Внутри использует useState для хранения data, isLoading, error</li>
                <li>Использует useEffect (или useCallback + ручной вызов) для выполнения запроса (fetch или axios).</li>
                <li>Обновляет состояние (data, isLoading, error) в зависимости от результата запроса.</li>
                <li>Возвращает эти состояния и, возможно, функцию для повторного запроса (refetch).</li>
            </ul>
            <p>Библиотеки вроде React Query / TanStack Query предоставляют гораздо более мощные и готовые хуки для этой
                цели, включая кэширование, инвалидацию и т.д.</p>

            <h3 className="section__subtitle">Обработка состояния</h3>
            <p>Во время выполнения API-запроса важно предоставлять пользователю обратную связь, чтобы он понимал, что
                приложение работает, а не "зависло".</p>
            <b style={{marginTop: "10px", display: "block"}}>Состояния, которые нужно отслеживать и отображать:</b>
            <p><b>1. Загрузка (isLoading / isFetching):</b></p>
            <p>• Показывать индикатор загрузки (спиннер, "Загрузка...", скелетон-компонент).</p>
            <p>• (Опционально) Отключать кнопки или поля ввода, чтобы предотвратить повторные действия.</p>
            <p><b>2. Успех (isSuccess / data есть):</b></p>
            <p>• Отобразить полученные данные</p>
            <p>• Скрыть индикатор загрузки.</p>
            <p><b>3. Ошибка (isError / error есть):</b></p>
            <p>• Отобразить сообщение об ошибке.</p>
            <p>• (Опционально) Предоставить кнопку "Попробовать снова".</p>
            <p>• Скрыть индикатор загрузки.</p>

            <h3 className="section__subtitle">Все</h3>
            <p>Интеграция с REST API – ключевая часть большинства современных фронтенд-приложений.</p>
            <b>Ключевые моменты:</b>
            <ul>
                <li>REST API - архитектурный стиль, использующий URL для ресурсов и HTTP- методы для операций. JSON – частый формат данных.</li>
                <li>fetch API - встроенный в браузер инструмент для HTTP-запросов, основан на промисах. Требует ручной проверки response.ok для HTTP-ошибок.</li>
                <li>Axios - популярная библиотека, упрощающая HTTP-запросы: авто-JSON, автоматическое отклонение промиса при HTTP-ошибках, перехватчики.</li>
                <li>Типизация (TypeScript): - важна для безопасности и удобства работы с данными запросов и ответов как для fetch, так и для Axios (через Generics).</li>
                <li>Обработка ошибок - необходимо всегда проверять статусы ответа и обрабатывать возможные сетевые или HTTP-ошибки.</li>
                <li>Кастомные хуки - отличный способ инкапсулировать логику API-запросов и управление состоянием для переиспользования в компонентах.</li>
            </ul>
        </section>
    )
}

export default SectionRestApiFetch