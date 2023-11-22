

const Confirming = ({ setActiveStep }) => {
    return (
            <div className="confirm-booking-container">
                <div className="header">
                    <img
                        src="./icons/check-icon.svg"
                        alt="icon"
                    />
                    <div className="header-content">
                        <h1 className="medium">Booking Confirmed. Thank you!</h1>
                        <span className="medium">You will receive a confirmation email soon.</span>
                    </div>
                </div>
                <div className="booking-details">
                    <h2>Booking Details</h2>
                    <div className="order-data">
                        <div className="item">
                            <span className="medium">order id</span>
                            <p className="bold">#78287</p>
                        </div>
                        <div className="item">
                            <span className="medium">Tickets</span>
                            <p className="bold">#78287</p>
                        </div>
                        <div className="item">
                            <span className="medium">Check-in Date</span>
                            <p className="bold">#78287</p>
                        </div>
                        <div className="item">
                            <span className="medium">Time Slot</span>
                            <p className="bold">#78287</p>
                        </div>
                        <div className="item">
                            <span className="medium">Duration</span>
                            <p className="bold">#78287</p>
                        </div>
                    </div>
                    <h2 className="details">Details: <p>Skydiving</p></h2>
                </div>
                <div className="booking-details">
                    <h2>Payment Details</h2>
                    <div className="order-data">
                        <div className="item">
                            <span className="medium">Payment Method</span>
                            <p className="bold">Debit Card</p>
                        </div>
                        <div className="item">
                            <span className="medium">Status</span>
                            <p className="bold">Completed</p>
                        </div>
                        <div className="item">
                            <span className="medium">Check-in Date</span>
                            <p className="bold">#78287</p>
                        </div>
                        <div className="item">
                            <span className="medium">Time Slot</span>
                            <p className="bold">#78287</p>
                        </div>
                        <div className="item">
                            <span className="medium">Duration</span>
                            <p className="bold">#78287</p>
                        </div>
                    </div>
                </div>
                <div className="booking-details" onClick={() => window.print()}>
                    <div className="print">
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.625 11.5C15.2227 11.5 15.75 12.0273 15.75 12.625V17.125C15.75 17.7578 15.2227 18.25 14.625 18.25H3.375C2.74219 18.25 2.25 17.7578 2.25 17.125V12.625C2.25 12.0273 2.74219 11.5 3.375 11.5H14.625ZM14.625 17.125V12.625H3.375V17.125H14.625ZM15.75 7C16.9805 7 18 8.01953 18 9.25V13.1875C18 13.5039 17.7188 13.75 17.4375 13.75C17.1211 13.75 16.875 13.5039 16.875 13.1875V9.25C16.875 8.65234 16.3477 8.125 15.75 8.125H2.25C1.61719 8.125 1.125 8.65234 1.125 9.25V13.1875C1.125 13.5039 0.84375 13.75 0.5625 13.75C0.246094 13.75 0 13.5039 0 13.1875V9.25C0 8.01953 0.984375 7 2.25 7V2.5C2.25 1.26953 3.23438 0.25 4.5 0.25H13.2539C13.5352 0.25 13.8164 0.390625 14.0273 0.601562L15.3984 1.9375C15.6094 2.14844 15.75 2.46484 15.75 2.74609V7ZM14.625 7V2.74609L13.2539 1.375H4.5C3.86719 1.375 3.375 1.90234 3.375 2.5V7H14.625ZM15.1875 8.96875C15.6445 8.96875 16.0312 9.35547 16.0312 9.8125C16.0312 10.3047 15.6445 10.6562 15.1875 10.6562C14.6953 10.6562 14.3438 10.3047 14.3438 9.8125C14.3438 9.35547 14.6953 8.96875 15.1875 8.96875Z" fill="#1661F1" />
                        </svg>
                        <span className="medium">Print</span>
                    </div>
                </div>
            </div>
    );
}

export default Confirming;