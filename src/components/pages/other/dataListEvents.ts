export type ListEventsType = {
    id: number;
    events: string;
    name: string;
}
export const listEvents: ListEventsType[] = [
    { id: 1, events: "События буфера обмена", name: "onCopy onCut onPaste" },
    { id: 2, events: "События композиции", name: "onCompositionEnd onCompositionStart onCompositionUpdate" },
    { id: 3, events: "События клавиатуры", name: "onKeyDown onKeyPress onKeyUp" },
    { id: 4, events: "События фокуса", name: "onFocus onBlur" },
    { id: 5, events: "События форм", name: "onChange onInput onInvalid onReset onSubmit" },
    { id: 6, events: "Общие события", name: "onError onLoad" },
    { id: 7, events: "События мыши", name: "onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp" },
    { id: 8, events: "События выбора", name: "onSelect" },
    { id: 9, events: "События касания", name: "onTouchCancel onTouchEnd onTouchMove onTouchStart" },
    { id: 10, events: "События UI", name: "onScroll" },
    { id: 11, events: "События колесика", name: "onWheel" },
    { id: 12, events: "Мультимедийные события", name:   "onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting" },
    { id: 13, events: "События изображений", name: "onLoad onError" },
    { id: 14, events: "События анимации", name: "onAnimationStart onAnimationEnd onAnimationIteration" },
    { id: 15, events: "События переходов", name: "onTransitionEnd" },
    { id: 16, events: "Другие события", name: "onToggle" },
]
