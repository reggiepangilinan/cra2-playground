import React, { FunctionComponent, ChangeEvent } from "react";
import styles from './styles.module.scss';
import { Field } from "formik";

type Props = {
    name: string,
    touched?: boolean,
    label: string,
    error?: string
    disabled?: boolean,
    currentValue?: string | number,
    options: RadioGroupOption[]
};

export type RadioGroupOption = {
    id: string,
    label: string,
    value: string | number
}

const FormRadioGroup: FunctionComponent<Props> = (props: Props) => {
    const displayError = props.touched && props.error;
    return (
        <div className={styles.formFieldGroup}>
            <fieldset disabled={props.disabled}>
                {displayError ?
                    <legend className={styles.labelError}>
                        {props.error}
                    </legend>
                    :
                    <legend>
                        {props.label}
                    </legend>
                }
                {props.options.map(opt =>
                    <label className={styles.radioOptionWrapper} id={opt.id} key={opt.id}>
                        <Field name={props.name} type="radio" value={opt.value} checked={props.currentValue === opt.value} disabled={props.disabled}/>
                        <span className={styles.checkmark}></span>
                        <p>
                            {opt.label}
                        </p>
                        
                    </label>
                )}
            </fieldset>

        </div>
    );
}


export default FormRadioGroup;