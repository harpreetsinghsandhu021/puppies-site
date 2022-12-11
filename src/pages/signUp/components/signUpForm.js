import classes from "./style.module.css";
import Form from "./Form";
function SignUpForm() {
  return (
    <>
      <section className={classes.section__signup}>
        <div className={classes.form__wrapper}>
          <Form />
        </div>
      </section>
    </>
  );
}

export default SignUpForm;
