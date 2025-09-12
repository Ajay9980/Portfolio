import {motion} from 'framer-motion'
import resume from '../assets/Resume2.pdf'
 

 

function Contact(){



     
    return (
       <div id="contact" className="mt-30 overflow-hidden">
  <motion.h1 
  initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
  className="text-purple-400 text-center text-[15vw] md:text-[5vw]">Contact</motion.h1>

  <div className="flex flex-col md:flex-row gap-20 mb-10 md:items-start mt-15 px-4 md:px-10">
    {/* Form */}
    <motion.form
    initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
      action="https://api.web3forms.com/submit"
      method="POST"
      className=" flex flex-col bg-black w-full md:w-1/2 items-center rounded-xl shadow-md shadow-slate-50 px-4 py-6"
    >
      <input type="hidden" name="access_key" value="34272431-0ac5-41ed-bfb2-0b505960605c" />

      <div className="flex flex-col mt-7 md:flex-row w-full gap-5">
        <input
          type="text"
          name="name"
          placeholder="Jhon"
          className="bg-white text-black px-4 py-2 rounded-xl w-full md:w-1/2"
        />
        <input
          type="text"
          name="surname"
          placeholder="Doe"
          className="bg-white text-black px-4 py-2 rounded-xl w-full md:w-1/2"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="john@gmail.com"
        className="bg-white text-black mt-5 px-4 py-2 rounded-xl w-full"
      />

      <textarea
        name="messagge"
        placeholder="Your Message..."
        className="bg-white text-black mt-5 px-4 py-2 rounded-xl w-full"
        rows={5}
      ></textarea>

      <button
        type="submit"
        className="bg-gradient-to-r from-purple-900 to-purple-600 rounded-full w-1/2 my-6 text-white p-4 text-xl md:text-2xl"
      >
        <i className="ri-send-plane-fill mr-4"></i>Send Message
      </button>
    </motion.form>

    {/* Contact Info */}
    <motion.div 
    initial={{ opacity: 0, y: 50 }}          // starting state
                    whileInView={{ opacity: 1, y: 0 }}       // animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
    className="info w-full md:w-1/2 px-4">
      <h1 className="text-3xl md:text-[3vw] mb-4 text-purple-400">Contact Information</h1>
      <p className="text-lg md:text-2xl mb-5">
        Fill up the form and send me your message or contact through the details below.
      </p>

      <h2 className="text-lg md:text-2xl mb-2">
        <span className="text-purple-400">Email:</span> ajaychavan.dev@gmail.com
      </h2>
      <h2 className="text-lg md:text-2xl mb-5">
        <span className="text-purple-400">Phone:</span> +91 7498177115
      </h2>

      <div className="flex gap-4 mb-5">
        <a href="https://www.linkedin.com/in/ajay-chavan-b86638301/">
          <i className="ri-linkedin-box-fill text-[10vw] md:text-[2.5vw]"></i>
        </a>
        <a href="https://github.com/Ajay9980">
          <i className="ri-github-fill text-[10vw] md:text-[2.5vw]"></i>
        </a>
        <a href="https://x.com/Ajay_a95313943">
          <i className="ri-twitter-x-fill text-[10vw] md:text-[2.5vw]"></i>
        </a>
        <a href="https://www.instagram.com/ajaychavan9910?igsh=Mm9ydHhqcWx2NGds">
          <i className="ri-instagram-line text-[10vw] md:text-[2.5vw]"></i>
        </a>
      </div>

      <a
        href={resume}
        download
        className="inline-block px-6 py-2 bg-purple-700 text-white mt-5 text-xl md:text-2xl rounded-full hover:bg-purple-800 transition"
      >
        <i className="ri-download-line mr-2"></i>Resume
      </a>
    </motion.div>
  </div>
</div>

    )
}

export default Contact