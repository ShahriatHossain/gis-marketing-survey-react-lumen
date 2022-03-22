import React, { useEffect, useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import { isEmpty, validateEmail } from "../../../utils/helpers/utility-functions";
import { BusinessType } from "../../../utils/models/BusinessType";
import LoadingSpinner from "../../UI/LoadingSpinner";

const EditUserForm: React.FC<{ existingData: any, isLoading: boolean, businessTypes: BusinessType[], onEditUser: Function }> = ({ existingData, isLoading, businessTypes, onEditUser }) => {
    const [isEntering, setIsEntering] = useState(false);
    const [businessType, setBusinessType] = useState("");
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        email: true,
        businessType: true
    });

    useEffect(() => {
        setBusinessType(existingData.business_type)
    }, []);

    const nameChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                name: !isEmpty(event.target.value)
            }
        });
    }

    const emailChangeHandler = (event: any) => {
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                email: !isEmpty(event.target.value)
            }
        });
    }

    const businessTypeChangeHandler = (event: any) => {
        setBusinessType(event.target.value);
        setFormInputsValidity(prevState => {
            return {
                ...prevState,
                businessType: !isEmpty(event.target.value)
            }
        });
    }

    const nameInputRef = useRef<any>();
    const contactNameInputRef = useRef<any>();
    const emailInputRef = useRef<any>();
    const phoneInputRef = useRef<any>();
    const jobTitleInputRef = useRef<any>();
    const cityInputRef = useRef<any>();
    const streetInputRef = useRef<any>();
    const postalCodeInputRef = useRef<any>();
    const stateInputRef = useRef<any>();
    const countyInputRef = useRef<any>();
    const countryInputRef = useRef<any>();
    const latitudeInputRef = useRef<any>();
    const longitudeInputRef = useRef<any>();
    const faxInputRef = useRef<any>();

    const submitFormHandler = (event: any) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredContactName = contactNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredJobTitle = jobTitleInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredState = stateInputRef.current.value;
        const enteredCounty = countyInputRef.current.value;
        const enteredCountry = countryInputRef.current.value;
        const enteredLatitude = latitudeInputRef.current.value;
        const enteredLongitude = longitudeInputRef.current.value;
        const enteredFax = faxInputRef.current.value;
        const enteredBusinessType = businessType;

        // optional: Could validate here
        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid = !isEmpty(enteredEmail) && validateEmail(enteredEmail);
        const enteredBusinessTypeIsValid = !isEmpty(enteredBusinessType);

        setFormInputsValidity({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            businessType: enteredBusinessTypeIsValid
        });

        const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredBusinessTypeIsValid;

        if (!formIsValid) {
            return;
        }

        onEditUser({
            id: existingData.id,
            name: enteredName,
            contact_name: enteredContactName,
            email: enteredEmail,
            phone: enteredPhone,
            job_title: enteredJobTitle,
            city: enteredCity,
            street: enteredStreet,
            postalcode: enteredPostalCode,
            state: enteredState,
            county: enteredCounty,
            country: enteredCountry,
            latitude: +enteredLatitude,
            longitude: +enteredLongitude,
            fax: enteredFax,
            business_type: enteredBusinessType
        });
    }

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const formFocusedHandler = () => {
        setIsEntering(true);
    };

    const nameControlClasses = `form-control ${formInputsValidity.name ? '' : 'is-invalid'}`;
    const emailControlClasses = `form-control ${formInputsValidity.email ? '' : 'is-invalid'}`;
    const businessTypeControlClasses = `form-select ${formInputsValidity.businessType ? '' : 'is-invalid'}`;

    return (
        <React.Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    'Are you sure you want to leave? All your entered data will be lost!'
                }
            />
            <form
                onFocus={formFocusedHandler}
                onSubmit={submitFormHandler}>
                {isLoading && (
                    <React.Fragment>
                        <LoadingSpinner />
                    </React.Fragment>
                )}

                <div className="row">
                    <div className="col">
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className={nameControlClasses} defaultValue={existingData.name} id="name" ref={nameInputRef} onChange={nameChangeHandler} />
                                {!formInputsValidity.name && <div className="invalid-feedback">
                                    Please provide a valid name.
                                </div>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="job_title" className="form-label">Job Title</label>
                                <input type="text" className="form-control" defaultValue={existingData.job_title} id="job_title" ref={jobTitleInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="business_type" className="form-label">Business Type</label>
                                <select className={businessTypeControlClasses} id="business_type" value={businessType} aria-label="Select Business Type" onChange={businessTypeChangeHandler}>
                                    <option value="">Choose...</option>
                                    {businessTypes && businessTypes.map(bt => <option key={bt.id} value={bt.name}>{bt.description}</option>)}
                                </select>
                                {!formInputsValidity.businessType && <div className="invalid-feedback">
                                    Please choose business type.
                                </div>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="street" className="form-label">Street</label>
                                <input type="text" className="form-control" defaultValue={existingData.street} id="street" ref={streetInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="state" className="form-label">State</label>
                                <input type="text" className="form-control" defaultValue={existingData.state} id="state" ref={stateInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="country" className="form-label">Country</label>
                                <input type="text" className="form-control" defaultValue={existingData.country} id="country" ref={countryInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" defaultValue={existingData.phone} id="phone" ref={phoneInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="fax" className="form-label">Fax</label>
                                <input type="text" className="form-control" defaultValue={existingData.fax} id="fax" ref={faxInputRef} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="contact_name" className="form-label">Contact Name</label>
                                <input type="text" className="form-control" defaultValue={existingData.contact_name} id="contact_name" ref={contactNameInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className={emailControlClasses} defaultValue={existingData.email} id="email" ref={emailInputRef} onChange={emailChangeHandler} />
                                {!formInputsValidity.email && <div className="invalid-feedback">
                                    Please provide valid email.
                                </div>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="city" className="form-label">City</label>
                                <input type="text" className="form-control" defaultValue={existingData.city} id="city" ref={cityInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="postalcode" className="form-label">Postal Code</label>
                                <input type="text" className="form-control" defaultValue={existingData.postalcode} id="postalcode" ref={postalCodeInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="county" className="form-label">County</label>
                                <input type="text" className="form-control" defaultValue={existingData.county} id="county" ref={countyInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="latitude" className="form-label">Latitude</label>
                                <input type="text" className="form-control" defaultValue={existingData.latitude} id="latitude" ref={latitudeInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="longitude" className="form-label">Longitude</label>
                                <input type="text" className="form-control" defaultValue={existingData.longitude} id="longitude" ref={longitudeInputRef} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-2">&nbsp;</div>
                    <div className="col-sm-10">
                        <button onClick={finishEnteringHandler} className="btn btn-primary">Edit User</button>
                        <NavLink className="btn btn-secondary ms-2" to={"/admin/users"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default EditUserForm;