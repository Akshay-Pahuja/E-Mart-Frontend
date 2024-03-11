import React,{useState} from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch,useSelector } from 'react-redux';
import { updateUserProfile } from '../features/user/userSlice';
import CustomInput from "../components/CustomInput";
import {BiEdit} from "react-icons/bi"

const ProfileSchema = yup.object({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('last name is required'),
    email: yup.string().email('Email should be valid').required("Email address is required"),
    mobile : yup.string().required('Mobile no is required'),
   
  });

const Profile = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state)=> state.auth.user);
     const [edit,setEdit] = useState(true);
    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
          firstname: userState?.firstname,
          lastname: userState?.lastname,
          email: userState?.email,
          mobile:userState?.mobile,
        
        },
        validationSchema:ProfileSchema,
        onSubmit: (values) => {
           
            dispatch(updateUserProfile(values));
            setEdit(true);
            
        },
      });

  return (
    <>
    <Meta title={"My Profile"} />
       <BreadCrumb title ='My Profile'/>
       <Container>
        <div className='row'>
            <div className='col-12'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className='mb-4'>Update Profile</h3>
                    <BiEdit className='fs-3' onClick={()=> setEdit(false)}/>
                </div>
            </div>
         <div className='col-12'>
         <form onSubmit={formik.handleSubmit} >
  <div className="mb-3">
    <label htmlFor="example1"  className="form-label">First Name</label>
    <CustomInput type="text" name="firstname"  disabled ={edit} className="form-control" id="example1"
    value={formik.values.firstname}
    onChange={formik.handleChange("firstname")}
    onBlur={formik.handleBlur("firstname")}
    />
    <div className='error'>
        {formik.touched.firstname && formik.errors?.firstname}
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="example2"  className="form-label">Last Name</label>
    <CustomInput type="text" name="lastname" disabled ={edit} className="form-control" id="example2" 
    value={formik.values.lastname}
    onChange={formik.handleChange("lastname")}
    onBlur={formik.handleBlur("lastname")}
    />
    <div>
    {formik.touched.lastname && formik.errors?.lastname}
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputMobile1"  className ="form-label">Mobile</label>
    <CustomInput type="number" name="mobile" disabled ={edit} className ="form-control" id="exampleInputMobile1" 
    value={formik.values.mobile}
    onChange={formik.handleChange("mobile")}
    onBlur={formik.handleBlur("mobile")}
    />
     <div>
    {formik.touched.mobile && formik.errors?.mobile}
    </div> 
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail2" className ="form-label">Email address</label>
    <CustomInput type="email" name='email' disabled ={edit} className ="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" 
       value={formik.values.email}
       onChange={formik.handleChange("email")}
       onBlur={formik.handleBlur("email")}
    />
    <div>
    {formik.touched.email && formik.errors?.email}
    </div>
    <div id="emailHelp" className ="form-text">We'll never share your email with anyone else.</div>
  </div>

  {edit === false && <button type="submit" className="btn btn-primary">Save Changes</button> }
  
</form>
         </div>
        </div>
       </Container>
    </>
  )
}

export default Profile
