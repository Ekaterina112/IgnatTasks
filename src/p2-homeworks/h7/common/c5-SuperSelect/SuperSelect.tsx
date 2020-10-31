import React, {SelectHTMLAttributes, DetailedHTMLProps} from 'react';
import { FormControl, InputLabel, Select} from '@material-ui/core';





type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[] | undefined
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, value, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, i) => {
        return (<option key={i} value={o} selected={o}>{o}</option>)
    }) : []//what is it?????


    // const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    //     onChangeOption && onChangeOption(e.target.value)
    //     // onChange, onChangeOption
    // }

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        onChangeOption && onChangeOption(event.target.value)
    };

    return (

        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">"click here"</InputLabel>
            <Select
                native
                value={value}
                onChange={handleChange}
                label="click here"
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
            >
                {mappedOptions}
            </Select>
        </FormControl>
    );
}

export default SuperSelect;
