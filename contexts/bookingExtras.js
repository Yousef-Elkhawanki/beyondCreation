import { createContext, useEffect, useState } from "react"

//create a context, with createContext api
export const bookingExtras = createContext()

function BookingExtrasProvider(props) {
    const [bookingExtraIds, setBookingExtraIds] = useState([])

    const addExtra = (id, quantity, type, price,title, options,defaultOptions) => {
        setBookingExtraIds((current) => [...current,
        {
            extra_id: id,
            quantity: quantity,
            extra_type: type,
            extra_price: price,
            extra_title: title,
            another_options: options || "",
            defaultOptions: defaultOptions || "",
        },
        ])
    }
    const removeExtra = (id) => {
        setBookingExtraIds((current) => current.filter(extra =>
            extra.extra_id != id
        ))
    }
    return (
        <>
            <bookingExtras.Provider
                value={{
                    bookingExtraIds,
                    addExtra,
                    removeExtra,
                    setBookingExtraIds
                }}
            >
                {props.children}
            </bookingExtras.Provider>
        </>
    )
}

export default BookingExtrasProvider

