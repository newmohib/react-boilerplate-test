import React, { memo } from 'react';
import { Input, DateInput, Select } from 'components/Form';


export const SignupForm = React.memo((props) => {
    const { handleSubmit, handleChange, birthDateValue } = props;
    console.log('birthDateValue',birthDateValue);
    return (
        <form onSubmit={handleSubmit} >
            <div className="row">
                

                <div className="col-12 col-lg-6 col-md-6 col-sm-12 errorStyle">
                    <label htmlFor={"firstName"}>First Name</label>
                    <Input
                        onChange={handleChange}
                        name={"firstName"}
                        type="text"
                        autoFocus="autoFocus"
                    // errors={errors.confPassword}
                    //value={value.confPassword}
                    />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 errorStyle">
                    <label htmlFor={"lastName"}>Last Name</label>
                    <Input
                        onChange={handleChange}
                        name={"lastName"}
                        type="text"
                        autoFocus=""
                    // errors={errors.confPassword}
                    //value={value.confPassword}
                    />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 errorStyle">
                    <label htmlFor={"password"}>Email</label>
                    <Input
                        onChange={handleChange}
                        name={"email"}
                        type="text"
                        autoFocus=""
                    // errors={errors.confPassword}
                    //value={value.confPassword}
                    />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 errorStyle">
                    <label htmlFor={"phone"}>Phone</label>
                    <Input
                        onChange={handleChange}
                        name={"phone"}
                        type="text"
                        autoFocus=""
                    // errors={errors.confPassword}
                    //value={value.confPassword}
                    />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 errorStyle">
                    <label htmlFor={"gender"}>Gender</label>
                    <Input
                        onChange={handleChange}
                        name={"gender"}
                        type="text"
                        autoFocus=""
                    // errors={errors.confPassword}
                    //value={value.confPassword}
                    />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 errorStyle">
                    <label htmlFor={"birthDate"}>Birth Date</label>
                    <DateInput
                        //handleChangeDate={props.handleChangeDate}
                        handleChangeDate={(dateValue) => props.handleChangeDate({ currentTarget: { name: "birthDate", value: dateValue } })}
                        name={"birthDate"}
                        type="text"
                        autoFocus=""
                        dateFormat="MMMM d, yyyy h:mm aa"
                        dateValue={birthDateValue }
                    />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 errorStyle">
                    <label htmlFor={"username"}>Username</label>
                    <Input
                        onChange={handleChange}
                        name={"username"}
                        type="text"
                        autoFocus=""
                    // errors={errors.password}
                    //value={value.password}
                    />
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12 errorStyle">
                    <label htmlFor={"password"}>Password</label>
                    <Input
                        onChange={handleChange}
                        name={"password"}
                        type="password"
                        autoFocus=""
                    // errors={errors.confPassword}
                    //value={value.confPassword}
                    />
                </div>
            </div>
            <div className="row justify-content-center mt-4 mb-4" >
                <div className="col-6 ">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </div>
        </form>
    )
})