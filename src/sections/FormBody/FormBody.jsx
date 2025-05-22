import styles from './FormBody.module.css';
import InputField from '../../components/InputField.jsx';

export default function FormBody() {
    return (
        <>
        <section>
            <article className={styles.formContainer}>
                <InputField />
            </article>
        </section>
        </>
    )
}