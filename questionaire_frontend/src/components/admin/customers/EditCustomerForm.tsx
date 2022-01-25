import React, { useRef, useState } from "react";
import { NavLink, Prompt } from "react-router-dom";
import LoadingSpinner from "../../UI/LoadingSpinner";

const EditCustomerForm: React.FC<{ existingData: any, isLoading: boolean, onEditCustomer: Function }> = ({ existingData, isLoading, onEditCustomer }) => {
    const [isEntering, setIsEntering] = useState(false);

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
    const businessTypeInputRef = useRef<any>();

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
        const enteredBusinessType = businessTypeInputRef.current.value;

        onEditCustomer({
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
            latitude: enteredLatitude,
            longitude: enteredLongitude,
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
                                <input type="text" className="form-control" defaultValue={existingData.name} id="name" ref={nameInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" defaultValue={existingData.email} id="email" ref={emailInputRef} />
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
                                <label htmlFor="fax" className="form-label">Fax</label>
                                <input type="text" className="form-control" defaultValue={existingData.fax} id="fax" ref={faxInputRef} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <label htmlFor="business_type" className="form-label">Business Type</label>
                                <input type="text" className="form-control" defaultValue={existingData.business_type} id="business_type" ref={businessTypeInputRef} />
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
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" defaultValue={existingData.phone} id="phone" ref={phoneInputRef} />
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
                        <button onClick={finishEnteringHandler} className="btn btn-primary">Edit Customer</button>
                        <NavLink className="btn btn-secondary ms-2" to={"/customers"}>Cancel</NavLink>
                    </div>
                </div>

            </form>
        </React.Fragment>
    );
}

export default EditCustomerForm;