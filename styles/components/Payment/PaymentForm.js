import { ErrorMessage, useFormik, Formik, Form, Field } from "formik";
import Button from './../../common/Button'
import * as Yup from "yup";
import { useState } from "react";
import { customStyles, customWebsiteStyles } from "../../../utils/SelectOptions";
import Select from "react-select";
const PaymentForm = ({ setActiveStep }) => {
    const [loader, setLoader] = useState(false)
    const validationSchema = Yup.object({
        card_holder: Yup.string().required('Required').min(6, "Wrong").matches(/^[^ ]\S*/, "Wrong"),
        card_number: Yup.string()
            .required('Required')
            .min(16, 'Wrong')
            .max(16, 'Wrong'),
        cvc: Yup.string().required('Required').max(3, 'Wrong').min(3, 'Wrong'),
        exp_date: Yup.string().required('Required').matches(/^\d{1,2}\/\d{2}$/, "Wrong"),
        bank: Yup.string().required('Required'),
    });

    const initialValues = {
        card_holder: "",
        card_number: "",
        cvc: "",
        exp_date: "",
        bank:""
    };
    return (
        <div className="form-container">
            <h4 className="medium">Your Payment Information</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setFieldValue }) => {
                    setLoader(true)
                    setTimeout(() => {
                        setLoader(false)
                        setActiveStep(3)
                    }, 2000)
                }}
            >
                {(formProps) => (
                    <Form>

                        <div className="form-group">
                            <div className="input-wrapper">
                                <label htmlFor="card_number">
                                    card number
                                </label>
                                <Field
                                    placeholder={'Card Number'}
                                    name="card_number"
                                    className={"input"}
                                    type="number"
                                />
                                <p className="error medium">
                                    <ErrorMessage name="card_number" />
                                </p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <label htmlFor="card_number">
                                    YY
                                </label>
                                <Field
                                    placeholder={'Exp. Date'}
                                    name="exp_date"
                                    className={"input ex-date"}
                                />
                                <p className="error medium">
                                    <ErrorMessage name="exp_date" />
                                </p>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="card_number">
                                    CVC
                                </label>
                                <Field
                                    placeholder={'CVC'}
                                    name="cvc"
                                    className={"input"}
                                    type="number"
                                />
                                <p className="error medium">
                                    <ErrorMessage name="cvc" />
                                </p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <label htmlFor="card_number">
                                    card number
                                </label>
                                <Field
                                    placeholder={'Card Holder'}
                                    name="card_holder"
                                    className={"input"}
                                    type="text"
                                />
                                <p className="error medium">
                                    <ErrorMessage name="card_holder" />
                                </p>
                            </div>
                        </div>
                        <div className="form-group last">
                            <div className="input-wrapper">
                                <label htmlFor="bank">
                                    bank
                                </label>
                                <Select
                                    isSearchable={false}
                                    options={[
                                        {
                                            label: "test",
                                            value: "test"
                                        }, {
                                            label: "test",
                                            value: "tests"
                                        },
                                    ]}
                                    name="bank"
                                    placeholder={`Select Bank`}
                                    className="select-drop-down"
                                    noOptionsMessage={() => `no options`}
                                    classNamePrefix="react-select"
                                    styles={customWebsiteStyles}
                                    onChange={(e) => {
                                        formProps.setFieldValue("bank", e.value);
                                    }}
                                />
                                <p className="error medium">
                                    <ErrorMessage name="bank" />
                                </p>
                            </div>
                        </div>
                        <div className="form-group">
                            <Button text={'Process Booking'} type={'submit'} disabled={loader}>
                                <svg width="12" height="15" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.375 7V4.75C3.375 2.28906 5.37891 0.25 7.875 0.25C10.3359 0.25 12.375 2.28906 12.375 4.75V7H13.5C14.7305 7 15.75 8.01953 15.75 9.25V16C15.75 17.2656 14.7305 18.25 13.5 18.25H2.25C0.984375 18.25 0 17.2656 0 16V9.25C0 8.01953 0.984375 7 2.25 7H3.375ZM5.0625 7H10.6875V4.75C10.6875 3.20312 9.42188 1.9375 7.875 1.9375C6.29297 1.9375 5.0625 3.20312 5.0625 4.75V7ZM1.6875 16C1.6875 16.3164 1.93359 16.5625 2.25 16.5625H13.5C13.7812 16.5625 14.0625 16.3164 14.0625 16V9.25C14.0625 8.96875 13.7812 8.6875 13.5 8.6875H2.25C1.93359 8.6875 1.6875 8.96875 1.6875 9.25V16Z" fill="white" />
                                </svg>
                            </Button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default PaymentForm;