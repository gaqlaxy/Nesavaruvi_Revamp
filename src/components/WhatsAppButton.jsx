import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+917845151962";
  const message = "Hi there! I have an enquiry about your boutique products.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
