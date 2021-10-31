import { useState } from "react";
import axios from "axios";
import data from "../assets/data/register.json";

const socialButtons = ["f", "G+", "li"];

const Register = () => {
  const [state, setState] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      let x = { ...errors };
      delete x[e.target.name];
      setErrors(x);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let a = await axios.post(
        "https://powerful-dawn-74322.herokuapp.com/api/users/",
        state
      );
      console.log(a);
      // let b = await a.json();
      // console.log(b);
    } catch (err) {
      console.log(err.response);
      let e = err.response.data.errors.reduce((av, cv) => {
        av[cv.param] = cv.msg;
        return av;
      }, {});
      console.log(e);
      setErrors(e);
    }
    setLoading(false);
  };

  return (
    <div className="in_wraper">
      <div className="sign_in">
        <h1 className="sign_in_heading font_white">Welcome Back!</h1>
        <p className="sign_in_para">
          To keep connected with us please
          <br /> login with your personal info
        </p>
        <div className="sign_in_button">SIGN IN</div>
      </div>
      <div className="sign_up">
        <h1 className="sign_in_heading">Create Account</h1>
        <div className="button">
          {socialButtons.map((e) => (
            <button className="social_btn" key={e}>
              {e}
            </button>
          ))}
        </div>
        <p
          className="sign_up_para"
          style={{ color: "rgba(61, 61, 58, 0.568)" }}
        >
          or use your email for registration
        </p>
        <form className="form" onSubmit={handleSubmit}>
          {data.map((e) => {
            return (
              <div>
                <input
                  type={e.type}
                  placeholder={e.placeholder}
                  name={e.name}
                  onChange={handleChange}
                  value={state[e.name]}
                  className="form_ip"
                />
                {errors[e.name] && (
                  <div className="error">{errors[e.name]}</div>
                )}
              </div>
            );
          })}

          {loading ? (
            <input className="sign_in_button" type="button" value="...wait" />
          ) : (
            <input className="sign_in_button" type="submit" value="SIGN UP" />
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
