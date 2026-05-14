import React, { useState } from "react"

export function Testcont() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = (e.target as HTMLFormElement).action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({
        name: "",
        email: "",
        message: ""
      })

      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
    })
  }

  return (
    <div>
      <h1>Contact form</h1>
      {formSuccess ?
        <div>{formSuccessMessage}</div>
        :
        <form method="POST" action="https://www.formbackend.com/f/068f8a8354d0c373" onSubmit={submitForm}>
          <div>
            <label>Name</label>
            <input type="text" name="name" onChange={handleInput} value={formData.name} />
          </div>

          <div>
            <label>Email</label>
            <input type="text" name="email" onChange={handleInput} value={formData.email} />
          </div>

          <div>
            <label>Message</label>
            <textarea name="message" onChange={handleInput} value={formData.message}></textarea>
          </div>

          <button className="text-accent border-b border-accent/40 pb-1 hover:border-accent transition-all text-xs uppercase tracking-widest font-sans" type="submit">Send message</button>
        </form>
      }
    </div>
  )
}