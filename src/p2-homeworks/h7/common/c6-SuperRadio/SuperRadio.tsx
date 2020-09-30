import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';

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
    /*const onChangeCallback = (val: string) => {
            onChangeOption(val)
            // onChange, onChangeOption*/
    const onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.target.value)
            // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => {
        return (
            (
                <label key={name + '-' + i}>
                    <input
                        type={'radio'}
                        name={name}
                        checked={ o === value }
                        value={o}
                        onChange={onChangeCallback}
                        // name, checked, value, onChange
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
