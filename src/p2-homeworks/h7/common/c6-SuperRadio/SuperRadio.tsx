import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import {Checkbox, Radio} from '@material-ui/core';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.target.value)

    }


    const mappedOptions: any[] = options ? options.map((o, i) => {
        console.log(name)

        return (
            (
                <label key={name + '-' + i}>
                    <Radio
                        checked={o === value}
                        onChange={onChangeCallback}
                        value={o}
                        color="default"
                        name={name}
                    />
                    {o}
                </label>
            )
        )
    }) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
