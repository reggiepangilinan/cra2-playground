import React, { FunctionComponent, ChangeEvent } from "react";
import styles from './styles.module.scss';
import { Field, FieldProps } from "formik";

export type NumberField = number | string;

type Props = {
    name: string,
    touched?: boolean,
    label: string,
    placeholder: string,
    error?: string
    disabled?: boolean
};

const FormNumberField: FunctionComponent<Props> = (props: Props) => {
    const displayError = props.touched && props.error;
    return (
        <div className={styles.formFieldGroup}>
            {displayError ?
                <label className={styles.labelError}>
                    {props.error}
                </label>
                :
                <label>
                    {props.label}
                </label>
            }
            <Field name={props.name}
                disabled={props.disabled}
                type="number"
                lang="en"
                placeholder={props.placeholder}
            />
        </div>
    );
}


export default FormNumberField;