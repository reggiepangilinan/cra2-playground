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
    return (
        <div className={styles.formFieldGroup}>
            <label>{props.label}</label>
            <Field className={styles.field}
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
            />
            {props.touched
                && props.error
                && <small>{props.error}</small>}

        </div>
    );
}
export default FormField;