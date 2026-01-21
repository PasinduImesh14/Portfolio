import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="cassie-section bg-[var(--bg-contact)] py-16 sm:py-24 lg:py-32 text-[var(--text-main)] transition-colors duration-400 px-4 sm:px-6">
      <h2 className="mb-12 sm:mb-16 lg:mb-16 text-3xl sm:text-4xl lg:text-5xl text-center font-display">
        Say Hello
      </h2>
      <div className="space-y-3 sm:space-y-4 tracking-tighter text-center">
        <p className="text-lg sm:text-xl lg:text-2xl font-medium">{CONTACT.address}</p>
        <p className="text-lg sm:text-xl lg:text-2xl font-medium">{CONTACT.phoneNo}</p>
        <a 
          href={`mailto:${CONTACT.email}`} 
          className="inline-block mt-6 sm:mt-8 text-xl sm:text-2xl lg:text-2xl transition-all border-b-4 font-display border-black/20 hover:border-black"
        >
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;