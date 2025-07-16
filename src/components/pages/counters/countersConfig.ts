import React from "react";
import StoreCounter from "./storeCounter.tsx";
import StyledCounter from "./StyledCounter.tsx";
import DoubleClickCounter from "./doubleClickCount.tsx";
import CounterOneEvents from "./OneEventsCount.tsx";
import CounterReducer from "./CounterReducer";
import hooksCounter from "./hooksCounter.tsx";

// Импорты картинок из assets/imgCode
// store counter
import storeCounter1 from "../../../assets/imgCode/storeCount-1.png";
import storeCounter2 from "../../../assets/imgCode/storeCount-2.png";
import storeCounter3 from "../../../assets/imgCode/storeCount-3.png";
import storeCounter4 from "../../../assets/imgCode/storeCount-4.png";
import storeCounter5 from "../../../assets/imgCode/storeCount-5.png";
//
import styledCounter1 from "../../../assets/imgCode/styledCount-1.png";
//
import doubleClickCounter1 from "../../../assets/imgCode/doubleClickCount-1.png";
//
import counterOneEvents1 from '../../../assets/imgCode/oneEventsCount-1.png'
//
import reducerCounter1 from '../../../assets/imgCode/reducerCounter-1.png'
import reducer1 from '../../../assets/imgCode/reducer_1.jpg'
//
import customHooksImage1 from '../../../assets/imgCode/customHooksImage-1.png'
import customHooksImage2 from '../../../assets/imgCode/customHooksImage-2.png'

// тип для одного счетчика
export interface CounterConfig {
    id: string;
    name: string;
    component: React.ComponentType;
    description: string;
    features: string[]; // особенности счетчика
    images?: string[]; // массив картинок
}

// массив всех счетчиков
export const countersArray: CounterConfig[] = [
    {
        id: 'store',
        name: 'Счетчик с Redux store для глобального состояния',
        component: StoreCounter,
        description: 'Понадобятся две основные библиотеки: @reduxjs/toolkit (сам RTK) и react-redux для интеграции Redux с React',
        features: [
            "Использует Redux store (npm install @reduxjs/toolkit react-redux)",
            "Глобальное состояние",
            "Ограничение 0-100 (обратить внимание где прописывается логика)",
            "Установка произвольного значения",
            "TypeScript типизация"
        ],
        images: [
            storeCounter1,
            storeCounter2,
            storeCounter3,
            storeCounter4,
            storeCounter5,
        ]
    }, {
        id: 'reducerCounter',
        name: 'Счетчик с использованием useReducer и диапазоном 0-99',
        component: CounterReducer,
        description: 'Этот компонент демонстрирует преимущества useReducer для управления состоянием с валидацией и сложной логикой',
        features: [
            "Управление состоянием через useReducer",
            "Ограничение диапазона значений (0-99)",
            "TypeScript интерфейсы для действий",
            "Dispatch actions для INCREMENT/DECREMENT"
        ],
        images: [
            reducerCounter1,
            reducer1,
        ]
    }, {
        id: 'styled',
        name: 'Стилизованный счетчик с локальным состоянием useState',
        component: StyledCounter,
        description: 'Стилизованный счетчик с локальным состоянием',
        features: [
            "Локальное состояние (useState)",
            "Кастомные стилизованные кнопки",
            "Hover эффекты",
            "TypeScript типизация"
        ],
        images: [
            styledCounter1
        ]
    }, {
        id: 'doubleClick',
        name: 'Счетчик двойных кликов с useRef',
        component: DoubleClickCounter,
        description: 'Этот компонент демонстрирует практическое применение useRef для хранения мутабельных значений, которые не должны вызывать перерендер компонента.',
        features: [
            "Детекция двойного клика (300ms порог)",
            "Использование useRef для хранения времени",
            "Локальное состояние (useState)",
            "TypeScript типизация",
            "Простой минималистичный интерфейс"
        ],
        images: [
            doubleClickCounter1
        ]
    }, {
        id: 'oneEvent',
        name: 'Счетчик с одним обработчиком событий',
        component: CounterOneEvents,
        description: 'Этот компонент демонстрирует эффективный паттерн обработки событий, где один обработчик управляет несколькими элементами интерфейса, используя ссылки для их различения.',
        features: [
            "Один обработчик onClick для двух кнопок",
            "Использование useRef для идентификации кнопки",
            "Определение действия через evt.target",
            "TypeScript типизация событий",
            "Функциональное обновление состояния"
        ],
        images: [
            counterOneEvents1
        ]
    }, {
        id: 'hookCount',
        name: 'Счетчик с кастомным хуком',
        component: hooksCounter,
        description: "Этот компонент демонстрирует создание и использование кастомного хука useCounter для управления состоянием счетчика. Показывает принципы переиспользования логики и разделения ответственности в React.",
        features: [
            "Кастомный хук useCounter для управления состоянием",
            "Логика инкремента и декремента в отдельном хуке",
            "Защита от отрицательных значений счетчика",
            "Функциональное обновление состояния с prevState",
            "Переиспользуемая логика счетчика",
            "Разделение UI и бизнес-логики",
            "TypeScript поддержка кастомных хуков"
        ],
        images: [
            customHooksImage1,
            customHooksImage2,
        ]
    }
];

// Хранилище для передачи данных о выбранном счетчике
let selectedCounterId: string | null = null;

// Функция для установки выбранного счетчика
export const setSelectedCounter = (id: string): void => {
    selectedCounterId = id;
}

// Функция для получения выбранного счетчика
export const getSelectedCounter = (): CounterConfig | null => {
    if (!selectedCounterId) return null;
    return countersArray.find(counter => counter.id === selectedCounterId) || null;
};

//добавить новый счетчик
/*
    Создать компонент (например, DoubleClickCounter.tsx)
    Импортировать в countersConfig.ts
    Добавить в массив countersArray
    Готово! - автоматически появится на всех страницах
*/
