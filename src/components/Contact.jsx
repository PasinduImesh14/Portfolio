import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="cassie-section bg-[var(--bg-contact)] py-32 text-[var(--text-main)] transition-colors duration-400">
      <h2 className="mb-16 text-6xl text-center lg:text-8xl font-display">
        Say Hello
      </h2>
      <div className="space-y-4 tracking-tighter text-center">
        <p className="text-2xl font-medium">{CONTACT.address}</p>
        <p className="text-2xl font-medium">{CONTACT.phoneNo}</p>
        <a 
          href={`mailto:${CONTACT.email}`} 
          className="inline-block mt-8 text-3xl transition-all border-b-4 lg:text-2xl font-display border-black/20 hover:border-black"
        >
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;