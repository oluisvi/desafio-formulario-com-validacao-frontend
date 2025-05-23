import InputField from '../../components/InputField/InputField.jsx';
import styles from './FormBody.module.css';

export default function FormBody() {
    return (
        <>
        <section>
            <article className={styles.formContainer}>
                <InputField/>
            </article>
        </section>
        </>
    )
}