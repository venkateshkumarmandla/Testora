import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12"  style={{ backgroundImage: 'url(./media/backgrounds/footer.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto px-4 md:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-emerald-800">FutureHub</h3>
            <p className="text-gray-600 text-sm">
              Empowering learners worldwide with quality education and skills for the future.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-orange-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-orange-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="text-gray-600 hover:text-orange-500">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-orange-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-orange-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Subscribe</h4>
            <p className="text-sm text-gray-600 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="px-3 py-2 border rounded-md text-sm flex-1" />
              <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} FutureHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
