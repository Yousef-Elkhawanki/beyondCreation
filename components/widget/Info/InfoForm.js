import { ErrorMessage, Formik, Form, Field } from "formik";
import Button from '../../common/Button'
import * as Yup from "yup";
import { useEffect, useState } from "react";
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import axios from "axios";
const InfoForm = ({ setActiveStep }) => {
    const [loader, setLoader] = useState(false)
    const validationSchema = Yup.object({
        first_name: Yup.string().required('Required').matches(/^[^ ]\S*/, "Wrong"),
        last_name: Yup.string().required('Required').matches(/^[^ ]\S*/, "Wrong"),
        email: Yup.string()
            .email('Wrong')
            .required('Required')
            .matches(/^([a-zA-Z0-9_\-\.])/, 'Wrong'),
        mobile_number: Yup.string()
            .required('Required')
            .transform((value) => (value ? value.replace(/[\s+]/g, "") : ""), 'Wrong')
            .max(15, 'Wrong')
            .min(4, 'Wrong'),
    });

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
    };
    const [country, setCountry] = useState()
    async function getCountry() {
        try {
            const response = await axios.get("https://ipapi.co/json/")
            setCountry(response.data.country)
            return response.data.country
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getCountry()
    }, [])

    return (
        <div className="form-container">
            <h4 className="medium">Contact Information</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setFieldValue }) => {
                    setLoader(true)
                    console.log(values)
                    setTimeout(() => {
                        setLoader(false)
                        setActiveStep(2)
                    }, 2000)
                }}
            >
                {(formik) => (
                    <Form>

                        <div className="form-group">
                            <div className="input-wrapper">
                                <label htmlFor="card_number">
                                    first name
                                </label>
                                <Field
                                    placeholder={'First Name'}
                                    name="first_name"
                                    className={"input"}
                                    type="text"
                                />
                                <p className="error medium">
                                    <ErrorMessage name="first_name" />
                                </p>
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="card_number">
                                    last name
                                </label>
                                <Field
                                    placeholder={'Last Name'}
                                    name="last_name"
                                    className={"input"}
                                    type="text"
                                />
                                <p className="error medium">
                                    <ErrorMessage name="last_name" />
                                </p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <label htmlFor="card_number">
                                    email
                                </label>
                                <Field
                                    placeholder={'Email Address'}
                                    name="email"
                                    className={"input"}
                                    type="text"
                                />
                                <p className="error medium">
                                    <ErrorMessage name="email" />
                                </p>
                            </div>
                        </div>
                        <div className="form-group last">
                            <div className="input-wrapper">
                                <label htmlFor="card_number">
                                    mobile_number
                                </label>
                                <PhoneInput
                                    placeholder="Mobile Number"
                                    international
                                    defaultCountry={country}
                                    countryCallingCodeEditable={false}
                                    onChange={(e) => {
                                        e && formik.setFieldValue('mobile_number', e);
                                    }}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.mobile_number && formik.errors.mobile_number}
                                    id="mobile_number"
                                />
                                <p className="error medium">
                                    <ErrorMessage name="mobile_number" />
                                </p>
                            </div>
                        </div>

                        <div className="form-group">
                            <Button text={'Proceed to payment'} type={'submit'} disabled={loader} />
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default InfoForm;