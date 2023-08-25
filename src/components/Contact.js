import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceID = "default_service";
  const templateID = "template_wacj65a";
  const userID = "x96Fcmlt356nuYM7-";

  const [successMessage, setSuccessMessage] = useState(""); // Add state for success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        setSuccessMessage("Email sent successfully!"); // Set success message when email is sent
      },
      (error) => {
        console.log(error.text);
        setSuccessMessage("Error"); // Set success message when email is sent
      }
    );
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>Please fill out the form if you wish to contact me.</p>
        <span className="success-message">{successMessage}</span>{" "}
        {/* Display success message */}
      </div>
      <div className="container justify-items-center">
        <form onSubmit={sendEmail}>
          <div className="row form-fields">
            <div className="col-md-12 col-xs-12">
              {/* Name Input */}
              <div className="text-center inputs">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
                <div className="line"></div>
              </div>
              {/* Phone Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                />
                <div className="line"></div>
              </div>
              {/* Email Input */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  required
                />
                <div className="line"></div>
              </div>
              {/* Subject Input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
                <div className="line"></div>
              </div>
              {/* <div className="col-md-6 col-xs-12"> */}
              <div className="text-center">
                {/* Description */}
                <input
                  type="text"
                  className="form-control message"
                  placeholder="Message"
                  name="message"
                />
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contacts-btn" type="submit">
                Contact Me
              </button>
              {/* </div> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// import React, {useState} from 'react';
// import emailjs from "emailjs-com";
// import {useForm} from "react-hook-form";

// const Contacts = () => {
//     const [successMessage, setSuccessMessage] = useState("");
//     const {register, handleSubmit, formState: {errors}} = useForm();

//     const serviceID = "service_ID";
//     const templateID = "template_ID";
//     const userID = "user_F6yiRlgRWKL2gZ5nzgm7S";

//     const onSubmit = (data, r) => {
//         sendEmail(
//             templateID,
//             {
//                 name:data.name,
//                 phone:data.phone,
//                 email:data.email,
//                 subject:data.subject,
//                 description:data.description
//             },
//             userID
//         )
//         r.target.reset();
//     }

//     const sendEmail = (serviceID, templateID, variables, userID) => {
//         emailjs.send(serviceID, templateID, variables, userID)
//           .then(() => {
//             setSuccessMessage("Form sent sucessfully! I will contact you as soon as possible");
//           }).catch(err => console.error(`Something went wrong ${err}`));
//       }

//     return (
//         <div className="contacts">
//            <div className="text-center">
//                 <h1>Contact Me</h1>
//                 <p>Please fill out the form if you wish to contact me.</p>
//                 <span className="success-message">{successMessage}</span>
//            </div>
//            <div className="container">
//                <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="row">
//                         <div className="col-md-6 col-xs-12">
//                             {/* Name Input */}
//                             <div className="text-center">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Name"
//                                     name="name"
//                                     aria-invalid={errors.name ? "true" : "false"}
//                                     {...register("name", {
//                                         required: "Please enter your name",
//                                         maxLength: {
//                                             value: 50,
//                                             message: "Please enter a name with less than 50 characters",
//                                         },
//                                     })}
//                                 />
//                                 <div className="line"></div>
//                             </div>
//                             <span className="error-message">
//                                 {errors.name && errors.name.message}
//                             </span>
//                             {/* Phone Input */}
//                             <div className="text-center">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Phone Number"
//                                     name="phone"
//                                     // aria-invalid={errors.phone ? "true" : "false"}
//                                     // {...register("phone", {
//                                     //     required: "Please enter your phone number",
//                                     //     maxLength: {
//                                     //         value: 50,
//                                     //         message: "Please enter a name with less than 50 characters",
//                                     //     },
//                                     // })}
//                                 />
//                                 <div className="line"></div>
//                             </div>
//                             {/* <span className="error-message">
//                                 {errors.phone && errors.phone.message}
//                             </span> */}
//                             {/* Email Input */}
//                             <div className="text-center">
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Email"
//                                     name="email"
//                                     aria-invalid={errors.email ? "true" : "false"}
//                                     {...register("email", {
//                                         required: "Please enter your email",
//                                         pattern: {
//                                             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                                             message: "Invalid Email",
//                                         },
//                                     })}
//                                 />
//                                 <div className="line"></div>
//                             </div>
//                             <span className="error-message">
//                                 {errors.email && errors.email.message}
//                             </span>
//                             {/* Subject Input */}
//                             <div className="text-center">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Subject"
//                                     name="subject"
//                                 />
//                                 <div className="line"></div>
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-xs-12">
//                             <div className="text-center">
//                                 {/* Description */}
//                                 <textarea
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Name"
//                                     name="name">
//                                 </textarea>
//                                 <div className="line"></div>
//                             </div>
//                             <button className="btn-main-offer contacts-btn" type="submit">Contact Me</button>
//                         </div>
//                     </div>
//                 </form>
//            </div>
//         </div>
//     )
// }

// export default Contacts
