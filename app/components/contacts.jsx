import { FaLinkedinIn } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { RiMailFill } from "react-icons/ri"

const Contacts = () => {
  const contactList = [
    {
      text: 'Send an Email',
      url: 'mailto:pandu.mahesa9@gmail.com',
      icon: <RiMailFill />
    },
    {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pandu-mahesa9/',
      icon: <FaLinkedinIn />
    },
    {
      text: 'GitHub',
      url: 'https://github.com/pndmhs/',
      icon: <FaGithub />
    },
  ]

  return (
    <section className="py-14 md:py-24" id="contacts">
      <div className="mx-auto w-10/12 flex flex-col md:flex-row max-w-6xl">
        <h2 className="mr-auto mb-4">CONTACTS</h2>
        <div className="flex flex-col sm:flex-row gap-2 text-[#C6C6C6]">
          {contactList.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-48 flex items-center justify-center py-2 px-4 border rounded border-[#C6C6C6] hover:bg-[#F0F0F0] hover:text-black active:bg-[#c4c4c4]"
            >
              <span className="mr-3">
                {contact.icon}
              </span>
              {contact.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contacts