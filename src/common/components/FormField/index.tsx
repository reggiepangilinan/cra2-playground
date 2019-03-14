import React, { FunctionComponent, ChangeEvent } from "react";
import styles from './styles.module.scss';
import { Field } from "formik";

type Props = {
    name: string,
    touched?: boolean,
    label: string,
    placeholder: string,
    type?: "text" | "password" | "number" | "email",
    error?: string
};

const FormField: FunctionComponent<Props> = (props: Props) => {

    const displayError = props.touched && props.error;

    return (
        <div className={styles.formFieldGroup}>
            { displayError ?
                <label className={styles.labelError}>
                    {props.error}
                </label>
                :
                <label>
                    {props.label}
                </label>
            }
            <Field className={styles.field}
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
            />
        </div>
    );
}
export default FormField;