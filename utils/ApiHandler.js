import { toast } from "react-toastify"
import { buildFormData } from "./HelperFunctions"

const API_URL = 'https://dev.api.xplor.beyond-creation.net/api'

const fetchData = async (page, locale, populate) => {
    const response = await fetch(
        `${API_URL}/${page}`, {
        headers: {
            "Accept": "application/json;"
        }
    }
    )
    return response.json()
}
//to get dynamic data
const fetchDynamicData = async (page, id) => {
    const response = await fetch(
        `${API_URL}/${page}/${id}`, {
        headers: {
            "Accept": "application/json;"
        }
    }
    )
    return response.json()
}
const getClientScerect = async (id) => {
    const response = await fetch(
        `${API_URL}/booking/${id}/payment/intent`, {
        method: 'POST',
        headers: {
            "Accept": "application/json;"
        }
    }
    )
    return response.json()
}

const createBooking = (data, setLoader, setActiveStep, activeStep, setClientID, setTotalAmount,
    setPaymentAmount,
    setPaymentTax) => {
    let formData = new FormData();
    buildFormData(formData, data, "");

    fetch(`${API_URL}/booking/widget`, {
        method: "POST",
        body: formData,
        headers: {
            // "Content-Type": "multipart/form-data",
            "Accept": "application/json;",
        },
    }).then(async (res) => {
        const data = await res.json()
        if (res.status == 401 || res.status == 500) {
            toast.error(`Network error, please try again`, {
                position: "top-right",
                className: "toast-message",
                autoClose: 2500,
            })
            setLoader(false)
        } else if (res.status == 422) {
            setLoader(false)
            toast.error(data.message, {
                position: "top-right",
                className: "toast-message",
                autoClose: 2500,
            })
        } else {
            setLoader(false)
            setClientID(data.data.client_secret)
            setTotalAmount(data.data.total_amount)
            setPaymentAmount(data.data.payment_amount)
            setPaymentTax(data.data.payment_tax)

            setActiveStep(activeStep + 1)
            window.scroll(0, 0)
        }
    }).catch((error) => {
        console.log(error)
        toast.error(`Something went wrong please try again`, {
            position: "top-right",
            className: "toast-message",
            autoClose: 2500,
        })
        setLoader(false)
    });
}

export {  getClientScerect, fetchDynamicData, fetchData, API_URL, createBooking };