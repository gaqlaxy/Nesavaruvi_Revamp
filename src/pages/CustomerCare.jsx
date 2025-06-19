import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CustomerCare() {
  const [activeTab, setActiveTab] = useState("returns");
  const { section } = useParams();

  useEffect(() => {
    if (section && policies[section]) {
      setActiveTab(section);
    }
  }, [section]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const policies = {
    returns: {
      title: "Returns & Exchanges",
      content: [
        {
          heading: "Return Policy",
          details: [
            "30-day return window for unused items",
            "Items must be in original packaging",
            "Return shipping costs covered for defective items",
            "Store credit or refund options available",
          ],
        },
        {
          heading: "Exchange Process",
          details: [
            "Size exchanges processed within 48 hours",
            "Color/style exchanges subject to availability",
            "Free shipping on exchanges",
          ],
        },
      ],
    },
    shipping: {
      title: "Shipping Policy",
      content: [
        {
          heading: "Delivery Times",
          details: [
            "Standard delivery: 5-7 business days",
            "Express delivery: 2-3 business days",
            "Free shipping on orders above ₹2000",
            "International shipping available",
          ],
        },
        {
          heading: "Tracking Orders",
          details: [
            "Track your order through your account",
            "SMS and email updates",
            "Real-time delivery status",
          ],
        },
      ],
    },
    support: {
      title: "Customer Support",
      content: [
        {
          heading: "Contact Methods",
          details: [
            "WhatsApp: +91 7845151963",
            "Email: support@nesavaruvi.com",
            "Response time: Within 24 hours",
            "Live chat available 10 AM - 6 PM IST",
          ],
        },
        {
          heading: "Help Center",
          details: [
            "Size guide assistance",
            "Order modifications",
            "Payment support",
            "Product care instructions",
          ],
        },
      ],
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Customer Care
        </h1> */}
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center">
          Customer <span className="font-medium text-[#fb8000]">Care</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(policies).map((policy) => (
            <button
              key={policy}
              onClick={() => setActiveTab(policy)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeTab === policy
                  ? "bg-[#FB8000] text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {policies[policy].title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="bg-gray-50 rounded-2xl shadow-sm p-6 md:p-8">
          {/* <h2 className="text-2xl font-bold mb-6">
            {policies[activeTab].title}
          </h2> */}

          <div className="space-y-8">
            {policies[activeTab].content.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-[#FB8000]">
                  {section.heading}
                </h3>
                <ul className="space-y-2">
                  {section.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#FB8000] mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
