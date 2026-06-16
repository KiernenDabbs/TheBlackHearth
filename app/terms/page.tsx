import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Flame } from "lucide-react"

export const metadata = {
  title: "Terms of Service | The Black Hearth",
  description: "Terms of Service for The Black Hearth.",
}

export default function TermsPage() {
  const lastUpdated = "June 15, 2026"

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-3xl relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-5 w-5 text-violet-400" />
            <span className="text-violet-400 text-sm tracking-widest uppercase font-medium">Legal</span>
          </div>
          <h1 className="text-5xl font-[family-name:var(--font-one-slice)] text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-10">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using The Black Hearth website, mobile application, or any related services
              (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms").
              If you do not agree to these Terms, please do not use the Service.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or use the Service. We
              reserve the right to update or modify these Terms at any time. Continued use of the Service
              after changes constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="2. Use of the Service">
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Service in any way that violates applicable local, national, or international laws or regulations.</li>
              <li>Transmit any unsolicited or unauthorized advertising or promotional material.</li>
              <li>Impersonate or attempt to impersonate The Black Hearth, its employees, other users, or any other person or entity.</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
              <li>Attempt to gain unauthorized access to any portion of the Service or its related systems.</li>
              <li>Use any robot, spider, or other automated means to access the Service for any purpose.</li>
            </ul>
          </Section>

          <Section title="3. Accounts and Registration">
            <p>
              To access certain features of the Service, you may be required to create an account. You
              are responsible for maintaining the confidentiality of your account credentials and for all
              activities that occur under your account.
            </p>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information during registration.</li>
              <li>Update your information to keep it accurate and current.</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
              <li>Accept responsibility for all activities conducted through your account.</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms, engage in
              fraudulent activity, or are otherwise deemed harmful to the Service or its users.
            </p>
          </Section>

          <Section title="4. Purchases and Payments">
            <p>
              The Black Hearth sells physical and digital tabletop gaming products. By making a purchase,
              you represent that you are authorized to use the payment method provided and agree to pay
              all charges incurred.
            </p>
            <p>
              All prices are listed in US dollars and are subject to change without notice. We reserve
              the right to refuse or cancel orders at our discretion, including in cases of suspected
              fraud or pricing errors. Sales tax will be applied where required by law.
            </p>
            <p>
              Digital products are delivered electronically and are non-refundable once accessed. Physical
              products are subject to our Refund and Return Policy outlined below.
            </p>
          </Section>

          <Section title="5. Refunds and Returns">
            <p>
              We want you to be satisfied with your purchase. If you receive a defective or incorrect
              physical item, please contact us within 30 days of delivery. We will arrange a replacement
              or refund at our discretion.
            </p>
            <p>
              We do not accept returns on opened physical products unless they are defective. Digital
              products, including downloadable rulebooks and campaign settings, are non-refundable once
              the download link has been accessed.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              The Service and its original content, features, and functionality — including but not
              limited to text, graphics, logos, game mechanics, artwork, and software — are and will
              remain the exclusive property of The Black Hearth and its licensors.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display,
              or commercially exploit any content from the Service without our prior written permission.
              User-generated content (such as reviews or community posts) remains the property of the
              user, but by submitting it you grant us a non-exclusive, royalty-free license to use,
              reproduce, and display that content in connection with the Service.
            </p>
          </Section>

          <Section title="7. Privacy">
            <p>
              Your use of the Service is also governed by our{" "}
              <Link href="/privacy" className="text-violet-400 hover:text-violet-300 transition-colors">
                Privacy Policy
              </Link>
              , which is incorporated by reference into these Terms. Please review our Privacy Policy
              to understand our practices regarding the collection and use of your personal information.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              The Service is provided on an "as is" and "as available" basis without any warranties of
              any kind, either express or implied, including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted, error-free, or free of viruses
              or other harmful components. We make no warranty regarding the accuracy or reliability of
              any content obtained through the Service.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, The Black Hearth and its affiliates,
              officers, directors, employees, and agents shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages — including loss of profits, data, or goodwill —
              arising out of or in connection with your use of the Service.
            </p>
            <p>
              Our total liability to you for any claims arising from these Terms or the Service shall
              not exceed the amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State
              of Illinois, United States, without regard to its conflict of law provisions. Any disputes
              arising under these Terms shall be subject to the exclusive jurisdiction of the courts
              located in Illinois.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-3 p-4 rounded-lg bg-card border border-border/60 text-sm space-y-1">
              <p className="font-medium text-foreground">The Black Hearth</p>
              <p className="text-muted-foreground">Email: legal@theblackhearth.com</p>
              <p className="text-muted-foreground">Website: theblackhearth.com</p>
            </div>
          </Section>

          {/* Back links */}
          <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="text-violet-400 hover:text-violet-300 transition-colors">
              Privacy Policy →
            </Link>
            <Link href="/register" className="text-violet-400 hover:text-violet-300 transition-colors">
              Back to Register →
            </Link>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} The Black Hearth. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-[family-name:var(--font-one-slice)] text-foreground border-b border-border/40 pb-2">
        {title}
      </h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mt-2">
        {children}
      </div>
    </section>
  )
}