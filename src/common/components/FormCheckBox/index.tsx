import React, { FunctionComponent, ChangeEvent } from "react";
import styles from './styles.module.scss';
import { Field } from "formik";

type Props = {
    name: string,
    touched?: boolean,
    label: string,
    error?: string,
    checked: boolean,
    disabled?: boolean
};

const FormCheckBox: FunctionComponent<Props> = (props: Props) => {
    const displayError = props.touched && props.error;
    return (
        <div className={styles.formFieldGroup}>
            {
                displayError &&
                <label className={styles.labelError}>
                    {props.error}
                </label>
            }
            <label className={styles.labelCheckBoxWrapper}>
                <Field
                    name={props.name}
                    type="checkbox"
                    className={styles.checkbox}
                    checked={props.checked}
                    disabled={props.disabled}
                />
                <p>
                    {props.label}
                </p>

            </label>
        </div>
    );
}
export default FormCheckBox;