function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Merkato Store
            </h2>
            <p className="mt-3 text-gray-400">
              Your trusted online marketplace for quality products at
              affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>

              <li>
                <a href="/products" className="hover:text-yellow-400">
                  Products
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-yellow-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-400">
              Addis Ababa, Ethiopia
            </p>

            <p className="text-gray-400">
              info@merkatostore.com
            </p>

            <p className="text-gray-400">
              +251 900 000 000
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-400">
          © 2026 Merkato Store. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;