import React, {useState, useEffect, type FC} from "react";

interface WatchDisplayProps {}

const formatDate = () => {
    console.log("data re-Render")
    const date = new Date()
    return date.toLocaleDateString('ru-RU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
};

const MemoFormatDate = React.memo(() => {
    return <p style={{fontSize: '14px', color: '#333', marginTop: '15px'}}>{formatDate()}</p>
})

const WatchDisplay: FC<WatchDisplayProps> = () => {
    const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            // const now = new Date();
            // now.setSeconds(0, 0) // обнуляем секунды и миллисекунды
            setCurrentDateTime(new Date())
        }, 1000); //обновление каждую минуту (работает не правильно (1000 * 60))
        return () => clearInterval(timer)
    }, []);

    const formatTime = (date:Date) => {
        return date.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            // second: '2-digit'
        })
    }

    return (
        <div style={{marginTop: "auto"}} className={'container'}>
            <div className={'watch'}>
                <h2 className={'watch__time'}>{formatTime(currentDateTime)}</h2>
                <MemoFormatDate />
                <div className={'animate-pulse'}>
                    <div className={'animate-pulse__circle'}></div>
                </div>
            </div>
        </div>
    )
}

export default WatchDisplay;