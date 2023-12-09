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
    <div className='md:flex block text-white'>
      <div className="w-full md:w-1/2 md:h-screen flex flex-col justify-center items-center mb-16 pt-28 md:mb-0 md:pt-0">
        <h1 className="text-xl md:text-3xl font-bold px-8 mb-1 text-center"> Contact me if you are interested in buying a print or booking me for an event</h1>
        <h1 className='text-lg sm:text-xl md:text-2xl py-3'>Email: nareshsanjayphoto@gmail.com </h1>
        <h1 className='text-lg sm:text-xl md:text-2xl'>Freehold, NJ</h1>

      </div>

      <div className='w-full md:w-1/2 md:h-screen flex justify-center mb-8'>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center h-full w-[70%] text-black">
          
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
