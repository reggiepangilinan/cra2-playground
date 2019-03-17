import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';
import { Field, FieldProps } from "formik";
import Select from 'react-select';

export type FormSelectOption = {
    label: string,
    value: any
}

type Props = {
    name: string,
    touched?: boolean | any,
    label: string,
    placeholder: string,
    error?: string | any
    disabled?: boolean,
    searchable: boolean,
    multi: boolean,
    currentValue: any
    options: FormSelectOption[]
};

const FormSelect: FunctionComponent<Props> = (props: Props) => {
    const displayError = props.touched && props.error;
    return (
        <div className={styles.formFieldGroup}>
            {displayError ?
                <label className={styles.labelError}> {props.error} </label>
                :
                <label> {props.label} </label>
            }
            <Field name={props.name}>
                {
                    (fieldProps: FieldProps) => (
                        <Select
                            className="form-select-container"
                            classNamePrefix="form-select"
                            isDisabled={props.disabled}
                            isSearchable={props.searchable}
                            isMulti={props.multi}
                            placeholder={props.placeholder}
                            value={props.currentValue ? props.currentValue : null}
                            options={props.options}
                            onChange={(value) => {
                                fieldProps.form.setFieldValue(props.name, value);
                            }}
                            onBlur={() => {
                                fieldProps.form.setFieldTouched(props.name, true);
                            }}
                        />
                    )
                }
            </Field>
        </div>
    );
}


export default FormSelect;