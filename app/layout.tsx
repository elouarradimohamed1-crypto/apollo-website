import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/header'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

// --- SEO ناضي باش يبان السيت في جوجل ---
export const metadata: Metadata = {
  title: 'Apollo IPTV | Premium IPTV Subscription 2024 - 4K HD quality',
  description: 'Experience the best IPTV service with Apollo IPTV. 49,000+ Channels, Movies & Series in 4K. Stable servers, No buffering. Get your premium subscription now!',
  keywords: ['best iptv subscription', 'apollo iptv', '4k iptv service', 'iptv channels list', 'buy iptv morocco', 'smart iptv subscription'],
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  // هادو باش فاش تبارطاجي السيت في واتساب يبان واعر
  openGraph: {
    title: 'Apollo IPTV - Watch 49K+ Channels in 4K',
    description: 'Premium streaming service with worldwide coverage. Movies, Sports, and Live TV.',
    type: 'website',
    url: 'https://apollo-iptv-website.vercel.app', // بدلها بدومين ديالك إيلا شريتيه
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased relative`}>
        <Header /> 
        
        <main>
          {children}
        </main>

        {/* --- WhatsApp Floating Button --- */}
        <a
          href="https://wa.me/212707711512?text=Hello%20Apollo%20IPTV,%20I%20want%20to%20know%20more%20about%20your%20subscription"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform z-[9999] flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.875 1.215 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.991c-1.59 0-3.147-.419-4.515-1.212L5 19.108l1.013-3.704c-.872-1.423-1.332-3.057-1.332-4.737 0-4.994 4.065-9.059 9.06-9.059 2.42 0 4.695.941 6.405 2.651 1.71 1.71 2.651 3.985 2.651 6.405 0 4.995-4.066 9.06-9.06 9.06m7.685-16.746C18.114 1.04 15.656 0 13.061 0 7.334 0 2.677 4.657 2.677 10.384c0 1.829.479 3.614 1.387 5.19L2 22l6.564-1.722c1.479.805 3.141 1.23 4.842 1.23 5.73 0 10.387-4.658 10.387-10.385 0-2.774-1.08-5.382-3.048-7.35" />
          </svg>
          {/* Tooltip ليبان غير فاش يدوزو عليه الماوس */}
          <span className="absolute right-full mr-4 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Contact Support
          </span>
        </a>

        <Analytics />
      </body>
    </html>
  )
}