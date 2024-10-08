import React, { useEffect, memo } from "react";
import { useFormik } from "formik"; 
import * as Yup from 'yup'; 
import { 
  Button, 
  FormControl,
  FormErrorMessage,  
  FormLabel, 
  Input, 
  Textarea,
  Select 
} from "@chakra-ui/react"; 
import './MainSass/index_main.css';
import ReactLeafletMap from './ReactLeafletMap';
import UseSubmit from './AlertMessage/UseSubmit';
import { useAlertContext } from './AlertMessage/AlertContext';
import { useTheme } from '../Header/DarkMode';

function Contact(){
  const { theme } = useTheme();
  const { isLoading, response, submit }  = UseSubmit();
  const { onOpen } = useAlertContext();
  
  // initialization
    const formik = useFormik({ 
        initialValues: {
            firstName: '',
            lastName: '',
            type: '', 
            email: '',
            comment: '',
        },
        onSubmit: async (values) => {
          await submit("https://spencer-backend2.onrender.com/contact", values);
        },

        validationSchema: Yup.object({ 
          firstName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required("Required"),
          lastName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required("Required"), 
          type: Yup.string().required("Required"), 
          email: Yup.string().email("Invalid email address").required("Required"), 
          comment: Yup.string()
            .min(50, 'Too Short!') 
            .max(140, 'Your message cannot exceed 140 characters!') 
            .required("Required") 
        }),
    });

    useEffect(() => {

      if (response) { 
        onOpen(response.type, response.message);
        if (response.type === 'success') { 
          formik.resetForm(); 
        }  
      } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]); 

    return(
        <div className={`Contact ${theme === 'light' ? 'dark-mode' : 'light'}`} role='main'>
            <h3 className="Contact__title">Contact</h3>
            <p className="Contact__touch">Let's get in touch</p>
            <div className='Contact__form'>
                <div className="Contact__form__map" id='map'>
                    <ReactLeafletMap/>
                </div>
                <div className="Contact__form__content" id='form' role='form'>
                    <form onSubmit={formik.handleSubmit}> 
                        <FormControl isRequired isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                            <FormLabel htmlFor="first name">First name</FormLabel>
                            <Input
                            id="firstName"
                            name="firstName"
                            type='text' 
                            placeholder='First name' 
                            {...formik.getFieldProps("firstName")}
                            />
                            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                        </FormControl>             
                        <FormControl isRequired isInvalid={!!formik.errors.lastName && formik.touched.lastName}>
                            <FormLabel htmlFor="last name">Last name</FormLabel>
                            <Input
                            id="lastName"
                            name="lastName"
                            type='text' 
                            placeholder='Last name' 
                            {...formik.getFieldProps("lastName")}
                            />
                            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
                        </FormControl>             
                        <FormControl>
                            <FormLabel htmlFor="type">Object</FormLabel>
                            <Select id="type" name="type" {...formik.getFieldProps("type")} placeholder="Select an object"> 
                              <option value="Freelance project proposal">Freelance project proposal</option> 
                              <option value="Building website">Building website</option> 
                              <option value="Performance and Optimization">Performance and Optimization</option> 
                              <option value="SEO">SEO</option> 
                              <option value="Maintenance and Updates">Maintenance and Updates</option> 
                              <option value="Photoshop">Photoshop</option> 
                              <option value="Web consulting">Web consulting</option> 
                              <option value="Mentorship">Mentorship</option> 
                              <option value="Other Services">Other Services</option> 
                            </Select>
                            <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                        </FormControl>
                        <FormControl isRequired isInvalid={!!formik.errors.email && formik.touched.email}>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input
                              id="email"
                              name="email"
                              type='email' 
                              placeholder='Enter your email'
                              {...formik.getFieldProps("email")}
                              />
                            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                        </FormControl>             
                        <FormControl isRequired isInvalid={!!formik.errors.comment && formik.touched.comment}>
                            <FormLabel htmlFor="comment">Your message</FormLabel>
                            <Textarea 
                                id="comment" 
                                name="comment"
                                height={140} 
                                placeholder='Message'
                                {...formik.getFieldProps("comment")}
                            />
                            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" colorScheme="blue" width="full" isLoading={isLoading}> 
                            Submit 
                        </Button>              
                    </form> 
                </div>
            </div>
        </div>
    )
}
export default memo(Contact);