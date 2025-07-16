import "./styleHooksPage.scss";
import Menu from "../../menu/menu.tsx";
import useFetch from "./hooks/useFetch.ts";
import type {CSSProperties} from "react";
import {useNavigate} from "react-router-dom";

const Api:string = `https://randomuser.me/api/`;

const styleBtn = {
    margin: '20px auto',
    display: 'block',
    padding: '8px 15px',
    backgroundColor: "rgb(122, 151, 175)",
    textTransform: 'uppercase',
    fontWeight: '600',
    borderRadius: '10px',
} as CSSProperties;


function HooksPage(){
    const { data, isLoading, getData } = useFetch(Api);
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate('/customHooks/viewCode'); // переходим на страницу посмотреть код
    }

    return (
        <main>
            <div className="container">
                <Menu/>
                <button onClick={handleDetailsClick} className="btn"
                        style={{margin: "20px 0 0 auto", display: "block"}}>
                    Посмотреть код
                </button>
                <h3 className={"customHooks__title"}>Простой компонент загрузки (используется custom hooks)</h3>
                <button style={styleBtn} onClick={getData}>Получить пользователя</button>
                <div>
                    {isLoading && <p style={{textAlign: "center", color: "firebrick"}}> Loading... </p>}
                    {data && (
                        <div className={"cardUser"}>
                            {data?.picture &&
                                <img className={"cardUser__img"} src={data.picture.medium} alt={"Photo User"}/>}


                            {data?.name &&
                                <p className={"cardUser__name"}>{`${data.name.title}. ${data.name.last}`}</p>}
                            {data?.gender && <p className={"cardUser__gender"}>{data.gender}</p>}
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                width: "100%",
                                marginTop: "15px"
                            }}>
                                {data?.phone && <p className={"cardUser__phone"}>{`${data.phone}, ${data.email}`}</p>}

                                {data?.location && <div className={"cardUser__location"}>
                                    {data.location.country}
                                    <br/>
                                    {data.location.city}
                                </div>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default HooksPage;