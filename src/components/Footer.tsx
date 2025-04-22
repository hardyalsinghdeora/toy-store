import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-12">
      <div className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">ToyShop</h3>
            <p className="mb-4 text-sm text-gray-600">
              We offer a wide range of high-quality toys for children of all ages. Our toys are
              designed to be fun, educational, and safe.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12.001 2.002c-2.71 0-3.051.007-4.125.06-1.076.051-1.812.22-2.456.465a5.003 5.003 0 0 0-1.801 1.173 5.01 5.01 0 0 0-1.173 1.802c-.247.644-.415 1.38-.464 2.458-.055 1.072-.062 1.412-.062 4.122 0 2.709.006 3.051.06 4.125.051 1.077.219 1.812.464 2.456a4.99 4.99 0 0 0 1.173 1.801c.514.514 1.131.908 1.802 1.173.644.247 1.38.415 2.456.465 1.074.053 1.415.058 4.125.058 2.711 0 3.052-.005 4.125-.058 1.077-.05 1.812-.218 2.456-.465.67-.265 1.289-.659 1.802-1.173a4.994 4.994 0 0 0 1.173-1.801c.247-.644.415-1.38.465-2.456.052-1.074.058-1.416.058-4.125 0-2.71-.007-3.051-.06-4.122-.05-1.078-.218-1.814-.465-2.458a5.003 5.003 0 0 0-1.173-1.802 5.003 5.003 0 0 0-1.802-1.173c-.644-.247-1.38-.415-2.456-.465-1.074-.053-1.415-.058-4.125-.058zm0 1.802c2.664 0 2.979.008 4.028.058.972.045 1.501.207 1.854.345.465.18.8.395 1.15.745.35.35.565.686.744 1.15.138.353.301.883.344 1.854.052 1.05.058 1.366.058 4.03 0 2.663-.006 2.979-.058 4.028-.043.972-.207 1.5-.344 1.853-.18.466-.394.8-.744 1.151-.35.35-.685.565-1.15.744-.353.137-.882.3-1.854.344-1.05.052-1.366.058-4.028.058-2.663 0-2.98-.007-4.029-.058-.97-.044-1.499-.207-1.853-.344a3.149 3.149 0 0 1-1.15-.744 3.161 3.161 0 0 1-.744-1.15c-.138-.353-.301-.883-.345-1.854-.05-1.05-.058-1.366-.058-4.029 0-2.663.007-2.979.058-4.029.044-.97.207-1.499.345-1.853.18-.466.394-.8.744-1.15a3.16 3.16 0 0 1 1.15-.745c.353-.137.882-.3 1.853-.344 1.05-.05 1.366-.058 4.029-.058zm0 11.714a3.48 3.48 0 1 1 0-6.961 3.48 3.48 0 0 1 0 6.961zm0-9.809a6.33 6.33 0 1 0 0 12.66 6.33 6.33 0 0 0 0-12.66zm8.049-1.01a1.48 1.48 0 1 1-2.96 0 1.48 1.48 0 0 1 2.96 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/account" className="text-gray-600 hover:text-blue-600">My Account</Link>
              </li>
              <li>
                <Link href="/orders" className="text-gray-600 hover:text-blue-600">Order History</Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-blue-600">Shipping Information</Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-blue-600">Returns & Refunds</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                123 Toy Street, Playland City, PC 12345
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 flex-shrink-0 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                info@toyshop.com
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 flex-shrink-0 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-100 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 md:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ToyShop. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-blue-600">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 