import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BreadCrumb from "../components/BreadCrumb";
import { toast } from "react-toastify";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import {useNavigate } from 'react-router-dom'
import { login,resetState } from "../features/user/userSlice";
import { useSelector } from "react-redux";

let schema = Yup.object().shape({
  email: Yup.string().email("Email is not correct").required("email required"),
  password: Yup.string().required("Password required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess && user) {
      toast.success("Login Successfullly!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate("/");
    } 
    if (isError) {
      toast.error("Email or Password is incorrect");
    }
  }, [user,isError, isSuccess, isLoading,message]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    validationSchema:schema,
    onSubmit: values => {
      dispatch(login(values))
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
     // navigate('/');
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
              <CustomInput type = "email" name = 'email' placeholder='email'  onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
         value={formik.values.email} />
          <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                 <CustomInput type = "password" name = 'password' placeholder='Password'  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
         value={formik.values.password} />
         <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;