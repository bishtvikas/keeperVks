import React from "react";
 
export default function Feedback() {
  const [formState, setFormState] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    Feedback: "",
  });

  console.log(formState);
  function handleChange(event) {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    // destructuring form data
    const { fullName, email, phone, Feedback } = formState;
    const res = await fetch(
      // "https://facemash-instagramclone-default-rtdb.firebaseio.com/facemashloginpagedata.json"
      "https://keeper-keepapp-default-rtdb.firebaseio.com/feedbackFormData.json"
    , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        Feedback,
      }),
    });

    

    // field will be blank only if the response when we will receive successfully
    if (res) {
      setFormState({
        ...formState,
        fullName: "",
        email: "",
        phone: "",
        Feedback: "",
      });
    }
    alert("Feedback has been stored in our database.")
   };

  return (
    <div className="formFeedback--div">
      <h1>Feedback</h1>
      <form className="formFeedback" onSubmit={handleSubmit} method="POST">
        <input
        autoComplete = "off"
          type="text"
          placeholder="Full Name"
          required
          name="fullName"
          id="fullName"
          value={formState.fullName}
          onChange={handleChange}
          className="form-input"
        />
        <input
        autoComplete = "off"
          type="email"
          placeholder="vikasbisht1022@gmail.com"
          required
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
        autoComplete = "off"
          type="text"
          placeholder="+91-6349123517"
          required
          name="phone"
          id="phone"
          value={formState.phone}
          onChange={handleChange}
          className="form-input"
        />
        <textarea
         
        autoComplete = "off"
          type="text"
          placeholder="Let us know your thoughts..."
          className="form-contact-input"
          name="Feedback"
          id="Feedback"
          value={formState.Feedback}
          onChange={handleChange}
          required
        />

        <button className="form--submit">Send Feedback</button>
      </form>
    </div>
  );
}
