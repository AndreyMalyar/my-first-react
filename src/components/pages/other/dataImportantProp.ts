

export type dataImportantPropType = {
    id: number;
    prop: string;
    title: string;
}

export const dataImportantProp: dataImportantPropType[] = [
    {id: 1, prop: "bubbles", title: "Логическое значение всплытия события."},
    {id: 2, prop: "cancelable", title: "Логическое значение возможности отмены события."},
    {id: 3, prop: "eventPhase", title: "Числовое значение, указывающее, к какой фазе распространения принадлежит событие."},
    {id: 4, prop: "preventDefault", title: "Метод, запрещающий браузеру обрабатывать событие действием по умолчанию."},
    {id: 5, prop: "stopPropagation", title: "Метод, запрещающий дальнейшее распространение события."},
    {id: 6, prop: "target", title: "Целевой узел, для которого предназначено событие."},
    {id: 7, prop: "timestamp", title: "Время создания события в миллисекундах."},
    {id: 8, prop: "type", title: "Тип события, инициировавшего передачу объекта события."},
];