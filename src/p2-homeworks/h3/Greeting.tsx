import React, {ChangeEvent} from 'react';
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = !error ? s.notError:s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback}  className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;