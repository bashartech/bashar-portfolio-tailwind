
import styles from './footer.module.css';

export default function FooterPage() {
  return (
    <div id="footer" className={`${styles.footer} ${styles.gradient}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Me!</h2>
        <form className={styles.form}>
          <div className={styles.inputGrid}>
            {['Full Name', 'Email Address', 'Mobile Number', 'Email Subject'].map((placeholder, index) => (
              <input
                key={index}
                type={
                  placeholder.toLowerCase().includes('email')
                    ? 'email'
                    : placeholder.toLowerCase().includes('number')
                    ? 'tel'
                    : 'text'
                }
                placeholder={placeholder}
                className={styles.input}
                required
              />
            ))}
          </div>
          <textarea
            placeholder="Your Message"
            required
            className={styles.textarea}
          ></textarea>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}