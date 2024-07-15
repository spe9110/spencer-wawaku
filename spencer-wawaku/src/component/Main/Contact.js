/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import { useRef, useEffect } from 'react';
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
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTheme } from '../Header/DarkMode';

gsap.registerPlugin(useGSAP);

export default function Contact(){
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
          await submit('http://localhost:3001/contact', values);
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

    const contactAnime = useRef();
    const tl = useRef();

    useGSAP(
      () => {
          tl.current = gsap.timeline()
            .from(contactAnime.current.children, {
                duration: 1.5, 
                opacity: 0,
                stagger: 1
            })
      }
    )

    return(
        <div className={`Contact ${theme === 'light' ? 'dark-mode' : 'light'}`} ref={contactAnime} role='main'>
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
/*
import { useEffect } from 'react';
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

export default function Contact(){

  const { isLoading, response, submit }  = UseSubmit();
  const { onOpen } = useAlertContext();
  
  // initialization
    const formik = useFormik({ 
        initialValues: {
            firstName: '',
            lastName: '',
            type: "hireMe", 
            email: '',
            comment: '',
        },
        

        onSubmit: (values) => {
          submit('https://spencerwawaku.com/Contact', values);
        },

        validationSchema: Yup.object({ 
          firstName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required("Required"),
          lastName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required("Required"), 
          email: Yup.string().email("Invalid email address").required("Required"), 
          comment: Yup.string() 
            .min(50, "Must be at least 50 characters")
            .max(140, "Message can not exceed 140 characters") 
            .required("Required"), 
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
        <div className="Contact">
            <h3 className="Contact__title">Contact</h3>
            <p className="Contact__touch">Let's get in touch</p>
            <div className='Contact__form'>
                <div className="Contact__form__map">
                    <ReactLeafletMap/>
                </div>
                <div className="Contact__form__content">
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
                            <Select id="type" name="type" {...formik.getFieldProps("type")}> 
                              <option value="hireMe">Freelance project proposal</option> 
                              <option value="buildWeb">Building website</option> 
                              <option value="webOptimization">Performance and Optimization</option> 
                              <option value="seo">SEO</option> 
                              <option value="maintain">Maintenance and Updates</option> 
                              <option value="photoshop">Photoshop</option> 
                              <option value="consulting">Web consulting</option> 
                              <option value="other">Other Services</option> 
                            </Select>
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
   */ 