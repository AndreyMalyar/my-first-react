import {useNavigate} from "react-router-dom";
import ImageGallery from "../../ui/ImageCallery.tsx";
import "./styleCustomHookInfo.scss"

//картинки
import customHooksImg_1 from "../../../assets/imgCustomHooks/customHooksImg_1.png"
import customHooksImg_2 from "../../../assets/imgCustomHooks/customHooksImg_2.png"

const customHooksImg_All = [customHooksImg_1, customHooksImg_2]

function HooksPageInfo() {
    const navigate = useNavigate();

    return (
        <main className={"customHooksInfo"}>
            <div className="container">
                <div className="customHooksInfo__navigation">
                    <button className='btn' onClick={() => navigate('/customHooks')}>
                        ← Перейти на страницу customHooks
                    </button>
                </div>
            </div>

            {/* Используем компонент ImageGallery */}
            <ImageGallery
                images={customHooksImg_All}
                alt={"code image Reducer"}
            />
        </main>
    )
}

export default HooksPageInfo;