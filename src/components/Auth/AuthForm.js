import { Form, Link, useSearchParams } from "react-router-dom";
import styles from "../../styles/_AuthForm.module.scss";
import modes from "../../styles/_modes.module.scss";
import { FaDiscord } from "react-icons/fa";

const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "signIn";
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={`${styles.auth} ${modes.dark}`}>
      <p className={`${styles.head} ${modes.text}`}>
        {isLogin ? "تسجيل الدخول بواسطة" : "إنشاء حساب بواسطة"}
      </p>
      <div className={`${styles.methods} ${modes.text}`}>
        <Link className={styles.method} to="/">
          <FaDiscord />
        </Link>
      </div>
      <p className={styles.p}>أو</p>
      <Form method="post" className={styles.form}>
        <label htmlFor="email" className={`${modes.text}`}>
          البريد الإلكتروني
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="off"
          placeholder="البريد الإلكتروني"
        />
        {isLogin && (
          <>
            <label htmlFor="pass" className={`${modes.text}`}>
              رمز التحقق
            </label>
            <input
              id="pass"
              type="number"
              name="number"
              autoComplete="off"
              placeholder="رمز التحقق"
            />
          </>
        )}
        <button
          className={`${styles.submit} ${modes.text}`}
          onClick={onFormSubmit}
        >
          {isLogin ? "إرسال رمز تحقق" : "إنشاء حساب"}
        </button>
      </Form>
      <div className={styles.question}>
        <span className={`${modes.text}`}>
          {isLogin ? "لا تملك حساب؟" : "لديك حساب؟"}
        </span>
        <Link to={`?mode=${isLogin ? "signUp" : "signIn"}`}>
          {isLogin ? "إنشاء حساب" : "تسجيل الدخول"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
