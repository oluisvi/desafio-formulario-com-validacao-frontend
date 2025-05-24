import styles from './FormBody.module.css';
import InputField from '../../components/InputField/InputField';

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