import React, {useState} from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId="service_hnbj5bq"
    const templateId="template_tlf5eji"
    const publicKey="uGHmmGzvOK-QLZPb8"

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Nareshsanjay Muthukumar',
      message: message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      console.log('Email sent successfully!', response);
      setName('');
      setEmail('');
      setMessage('');
    })



  }

  
  return (
    <div className='flex text-white'>
      <div className="w-1/2 h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold px-8 mb-1 text-center"> Contact me if you are interested in buying a print or booking me for an event</h1>
        <h1 className='text-2xl py-3'>Email: nareshsanjayphoto@gmail.com </h1>
        <h1 className='text-2xl py-3'>Phone #: 732-647-8354 </h1>
        <h1 className='text-2xl'>Freehold, NJ</h1>

      </div>

      <div className='w-1/2 h-screen flex justify-center'>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center h-full w-[70%]">
          
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-8"
              required
            />
            
          
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-8 "
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 mb-8 resize-none h-32 "
              required
            ></textarea>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
