import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaUser,FaEnvelope,FaCommentDots,FaGithub } from "react-icons/fa";

function Contact()
{
    const formRef=useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm(
"service_5itzfap",
"template_bngjgfm",
formRef.current,
"nu2fbF_WCYMD6611f"
        )
        .then(
            ()=>{
                alert("Message sent successfully!");
                formRef.current.reset();
            },
            ()=>{
                alert("Failed to send message. Try again.");
                
            }
        );

    };


    return (
<section id="contact" className="min-h-screen flex items-center justify-center bg-slate-900 text-white pt-24 px-6">
<div className="relative max-w-lg w-full bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">

    <h3 className="py-6 font-bold text-2xl sm:text-3xl font-sans
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent
        tracking-tight text-center ">Contact Me</h3>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div className="relative flex items-center justify-center ">
                <FaUser className="absolute left-14 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="text" name="user_name" placeholder="Your Name" required
                className="w-10/12 pl-12 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-indigo-400"/>

           
            </div>
            
            <div className="relative flex items-center justify-center">
                <FaEnvelope className="absolute left-14 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="email" name="user_email" placeholder="Your Email" required 
                className="w-10/12 pl-12 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-indigo-400"/>
                </div>
            <div className="relative flex items-center justify-center">
                <FaCommentDots className="absolute left-14 top-4 text-gray-400"/>
                <textarea name="message" placeholder="Your Message" rows="4" required 
                className="w-10/12 pl-12 py-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-indigo-400 resize-none">
                    </textarea>

            </div>
            <div className="relative flex items-center justify-center">
            <button type="submit" className="w-32  py-2 mb-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
                Send Message
            </button>
            
            </div>
            <div className="h-px w-10/12 mx-auto bg-white/10 my-4"></div>
           <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
            <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
           </div>
            <div className="relative flex py-3 items-center justify-center">
               <a href="https://github.com/jeeva6347" target="_blank" rel="noreferrer" className="w-10/12 flex items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
               <FaGithub className="text-2xl text-gray-300"/>
               <div>
                <p className="text-white font font-medium">GitHub</p>
                <p className="text-sm text-gray-400 ">@Jeeva L</p>
               </div>
               </a>
                </div>
        </form>


</div>

</section>


    );
}
export default Contact;