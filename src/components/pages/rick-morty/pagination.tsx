import { useAppDispatch, useAppSelector } from "../../../store/hooks.ts";
import {fetchCharacters, setCurrentPage, setInputPage } from "../../../store/slice/characterSlice.ts";

export default function Pagination () {
    const {totalPages, isLoading, currentPage, inputPage} = useAppSelector(state => state.characters);
    const dispatch = useAppDispatch();

    const getNextPage = () => {
        if(currentPage >= totalPages) return;
        dispatch(setCurrentPage(currentPage + 1));
        dispatch(fetchCharacters(currentPage + 1));
    }
    const getPrevPage = () => {
        if (currentPage <= 1) return;
        dispatch(setCurrentPage(currentPage - 1));
        dispatch(fetchCharacters(currentPage - 1));
    }
    const goToPage = () => {
        if(!isNaN(inputPage) && inputPage >= 1 && inputPage <= totalPages && inputPage !== currentPage) {
            dispatch(dispatch(setCurrentPage(inputPage)));
            dispatch(fetchCharacters(inputPage));
            dispatch(setInputPage(1))
        }
    }

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputPage(evt.target.valueAsNumber));
    }

    const handleKeyPress = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (evt.key === 'Enter') {
            goToPage();
        }
    }

    return (
        <div className={"pagination"}>
            <button className={"pagination__btn btn"} disabled={isLoading || currentPage === 1}
                    onClick={getPrevPage}
            >
                prev
            </button>
            <span>{currentPage}...</span>
            {totalPages && <span>{totalPages}</span>}
            <button className={"pagination__btn btn"} disabled={isLoading || currentPage === totalPages}
                    onClick={getNextPage}>next
            </button>
            <div className="pagination__goto">
                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={inputPage|| ''}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="№"
                    className="pagination__input"
                    disabled={isLoading}
                />
                <button
                    onClick={goToPage}
                    disabled={isLoading || !inputPage || isNaN(inputPage) || inputPage > totalPages || inputPage < 0}
                    className='pagination__goto-btn btn'
                >
                    Перейти
                </button>
            </div>
        </div>
    )
}