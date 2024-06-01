import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IUserModel} from "../models/IUserModel";
import {userRegistration} from "../services/cars.api.service";

const RegisterComponent = () => {
    const {register, handleSubmit} = useForm<IUserModel>();

    const [user, setUser] = useState<IUserModel | null>(null);

    const send = ({username, password}: IUserModel) => {
    userRegistration.registration({username, password}).then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(send)}>
                <input type="text" {...register('username')}/>
                <input type="password" {...register('password')}/>
                <button>Send</button>
            </form>
        </div>
    );
};

export default RegisterComponent;