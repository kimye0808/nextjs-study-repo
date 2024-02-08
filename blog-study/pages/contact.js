import Head from "next/head";
import ContactForm from "../components/contact/contact-form";


/*contact 페이지*/
export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message" />
      </Head>
      <ContactForm />
    </>
  );
}
