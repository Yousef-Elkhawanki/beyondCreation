const CloseButton = ({ onClick, icon }) => {
    return (
        <div className="close-button-container" onClick={onClick && onClick}>
            {
                icon ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                        <path d="M7.99946 9.5C7.70705 9.5 7.41449 9.39014 7.19164 9.17041L0.334807 2.42041C-0.111602 1.98096 -0.111602 1.26904 0.334807 0.82959C0.781215 0.390137 1.5044 0.390137 1.95081 0.82959L7.99946 6.78594L14.0492 0.830469C14.4956 0.391015 15.2188 0.391015 15.6652 0.830469C16.1116 1.26992 16.1116 1.98184 15.6652 2.42129L8.80836 9.17129C8.58515 9.39102 8.29231 9.5 7.99946 9.5Z" fill="#211D33" />
                    </svg>
                    :
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8438 15.293C17.3008 15.8008 17.3008 16.5625 16.8438 17.0195C16.3359 17.5273 15.5742 17.5273 15.1172 17.0195L9.125 10.9766L3.08203 17.0195C2.57422 17.5273 1.8125 17.5273 1.35547 17.0195C0.847656 16.5625 0.847656 15.8008 1.35547 15.293L7.39844 9.25L1.35547 3.20703C0.847656 2.69922 0.847656 1.9375 1.35547 1.48047C1.8125 0.972656 2.57422 0.972656 3.03125 1.48047L9.125 7.57422L15.168 1.53125C15.625 1.02344 16.3867 1.02344 16.8438 1.53125C17.3516 1.98828 17.3516 2.75 16.8438 3.25781L10.8008 9.25L16.8438 15.293Z" fill="black" />
                    </svg>
            }

        </div>
    );
}

export default CloseButton;