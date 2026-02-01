import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#355f4b] text-[#eae3d6]">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-lg md:text-xl font-medium mb-2">
          Subscribe to Our Emails
        </h2>
        <p className="text-sm text-[#d6cfc2] mb-6">
          Subscribe to our mailing list for insider news, product launches, and more.
        </p>

        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-2 text-black focus:outline-none"
          />
          <button className="px-5 bg-[#2c4f3f] hover:bg-[#244133] transition">
            →
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#4b6f5c]">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between text-xs text-[#d6cfc2]">
          <p>
            © 2026, India Powered by Shopify
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:underline">
              Refund policy
            </a>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <a href="#" className="hover:underline">
              Terms of service
            </a>
            <a href="#" className="hover:underline">
              Shipping policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
