import { useState } from "react";
import {listEvents, type ListEventsType} from "./dataListEvents.ts";
import "./scss/styleEvents.scss";
import {dataImportantProp } from "./dataImportantProp.ts";
import EventHandling from "../../../assets/eventHandling.jpg"




function SectionEvents() {
    const [selectedFilter, setSelectedFilter] = useState<string>('');

    // Получаем уникальные категории событий
    const categories: string[] = ['Все', ...listEvents.map(item => item.events)];

    // Фильтруем данные
    const filteredEvents: ListEventsType[] = selectedFilter === 'Все'
        ? listEvents
        : listEvents.filter(item => item.events === selectedFilter);

    // Функция для копирования событий в буфер обмена
    const copyToClipboard = async (text: string): Promise<void> => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.error('Ошибка копирования:', error);
        }
    };

    return (
        <>
            <section className="section events">
                <h3 className="section__title">React События - Справочник</h3>

                {/* Кнопки-теги для фильтрации */}
                <div className="events__btn-group">
                    {categories.map((category: string) => (
                        <button
                            key={category}
                            onClick={() => setSelectedFilter(category)}
                            className={`${selectedFilter === category
                                ? 'events__btn_active'
                                : 'events__btn'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                    {/* Приглашение к действию если ничего не выбрано */}
                    {!selectedFilter &&
                        <p className="events__description"><span className="events__description_icon">👆</span> Выберите
                            категорию событий выше</p>}
                    {selectedFilter &&
                        <p className="events__description"><span className="events__description_icon">💡</span>
                            Совет: Нажмите на любое событие, чтобы скопировать его в буфер обмена</p>}
                </div>
                {/* Таблица */}
                {selectedFilter && <table>
                    <thead>
                    <tr>
                        <th>Тип событий</th>
                        <th>События</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredEvents.map((item: ListEventsType) => (
                        <tr key={item.id}>
                            <td>
                                {item.events}
                            </td>
                            <td>
                                <div>
                                    {item.name.split(" ").map((event: string, index: number) => (
                                        <span
                                            key={index}
                                            onClick={() => copyToClipboard(event)}
                                            className=""
                                            title="Нажмите для копирования"
                                        >
                                          {event}
                                    </span>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>}

                {listEvents.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        Данные не загружены
                    </div>
                )}

                {listEvents.length > 0 && <p className="events__description">Всего событий: {listEvents.length}</p>}
            </section>


            <section className="section eventHandling">
                <div className="eventHandling__box">
                    <div className="eventHandling__table" style={{width: '48%'}}>
                        <h3 className="section__title">Важные свойства, общие для всех объектов событий в React и
                            HTML</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Свойство</th>
                                <th>Назначение</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dataImportantProp.map(item => (
                                <tr key={item.id}>
                                    <td>{item.prop}</td>
                                    <td>{item.title}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <img className="eventHandling__img" src={EventHandling} alt="Обработка событий картинка"/>
                </div>

                <p>Чтобы узнать, можно ли отменить событие, проверьте свойство <strong>.cancellable</strong>. Если значение равно true,
                    можно вызвать .preventDefault(), чтобы прервать выполнение действий по умолчанию в браузере. Если
                    значение равно false, вызов .preventDefault() возможен, но он ничего не сделает</p>
            </section>
        </>

    )
}

export default SectionEvents;