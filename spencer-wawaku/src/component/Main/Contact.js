/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
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
/*
<FullScreenSection 
     isDarkBackground 
     backgroundColor="#512DA8" 
     py={16} 
     spacing={8} 
   > 
     <VStack w="1024px" p={32} alignItems="flex-start"> 
       <Heading as="h1" id="contactme-section"> 
         Contact me 
       </Heading> 
       <Box p={6} rounded="md" w="100%"> 
         <form onSubmit={formik.handleSubmit}> 
           <VStack spacing={4}> 
             <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
               <FormLabel htmlFor="firstName">Name</FormLabel> 
               <Input 
                 id="firstName" 
                 name="firstName" 
                 {...formik.getFieldProps("firstName")} 
               /> 
               <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
               <FormLabel htmlFor="email">Email Address</FormLabel> 
               <Input 
                 id="email" 
                 name="email" 
                 type="email" 
                 {...formik.getFieldProps("email")} 
               /> 
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
             </FormControl> 
             <FormControl> 
               <FormLabel htmlFor="type">Type of enquiry</FormLabel> 
               <Select id="type" name="type" {...formik.getFieldProps("type")}> 
                 <option value="hireMe">Freelance project proposal</option> 
                 <option value="openSource"> 
                   Open source consultancy session 
                 </option> 
                 <option value="other">Other</option> 
               </Select> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
               <FormLabel htmlFor="comment">Your message</FormLabel> 
               <Textarea 
                 id="comment" 
                 name="comment" 
                 height={250} 
                 {...formik.getFieldProps("comment")} 
               /> 
               <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
             </FormControl> 
             <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
           </VStack> 
         </form> 
       </Box> 
     </VStack> 
   </FullScreenSection>

===================================
<h3 className="Contact__form__content__title">Let's get in touch</h3>
                        <FormControl as='fieldset'>
                            <FormControl isRequired>
                                <FormLabel>First name</FormLabel>
                                <Input placeholder='First name' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Last name</FormLabel>
                                <Input placeholder='Last name' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Subject</FormLabel>
                                <Input placeholder='Subject' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder='Email' />
                            </FormControl>
                            <FormControl isRequired isInvalid={!!formik.errors.comment && formik.touched.comment}> 
                                <FormLabel htmlFor="comment">Your message</FormLabel> 
                                <Textarea 
                                    id="comment" 
                                    name="comment" 
                                    height={250} 
                                    {...formik.getFieldProps("comment")} 
                                /> 
                                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
                            </FormControl> 
                            <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
                            Send Message 
                            </Button>
                        </FormControl>
   */ 