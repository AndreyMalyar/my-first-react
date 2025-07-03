

function Greeting() {
    const hours = new Date().getHours();
    let greeting: string = "";

    if (hours >= 23 || hours <= 4) {
        greeting = 'Доброй ночи'
    } else if (hours >= 5 && hours <= 12) {
        greeting = 'Доброе утро'
    } else if (hours > 12 && hours < 17) {
        greeting = 'Добрый день'
    } else if (hours >= 17 && hours < 23) {
        greeting = 'Добрый вечер'
    }


    return <h2 className="greeting">{greeting}</h2>
}

export default Greeting