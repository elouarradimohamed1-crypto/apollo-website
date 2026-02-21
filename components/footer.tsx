import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg text-primary">A</span>
              </div>
              <span className="text-xl font-bold">Apollo IPTV</span>
            </div>
            <p className="text-primary-foreground/80">
              The premium streaming platform for entertainment lovers worldwide.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="hover:text-accent transition">𝕏</button>
              <button className="hover:text-accent transition">Facebook</button>
              <button className="hover:text-accent transition">Instagram</button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="text-primary-foreground/80 hover:text-accent transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#why" className="text-primary-foreground/80 hover:text-accent transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/80 hover:text-accent transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition">
                  DMCA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-primary-foreground/20">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Email</p>
              <p className="text-primary-foreground/80">support@apolloiptv.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-primary-foreground/80">+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-1">Address</p>
              <p className="text-primary-foreground/80">San Francisco, CA 94105</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Official Apollo IPTV Provider. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition">
              Sitemap
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition">
              Security
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
