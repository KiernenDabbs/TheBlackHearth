import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Flame } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | The Black Hearth",
  description: "Privacy Policy for The Black Hearth.",
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-10">

          <Section title="1. Introduction">
            <p>
              The Black Hearth ("we," "us," or "our") is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or use our services.
            </p>
            <p>
              Please read this policy carefully. If you disagree with its terms, please discontinue
              use of the Service. By continuing to use the Service, you consent to the practices
              described in this policy.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information in the following ways:</p>
            <p className="font-medium text-foreground/80">Information you provide directly:</p>
            <ul>
              <li>Account registration details (username, email address, password)</li>
              <li>Billing and shipping information when you make a purchase</li>
              <li>Profile information such as your display name or avatar</li>
              <li>Communications you send us, including support requests</li>
              <li>Reviews, ratings, or other content you submit</li>
            </ul>
            <p className="font-medium text-foreground/80">Information collected automatically:</p>
            <ul>
              <li>Log data such as your IP address, browser type, pages visited, and time spent</li>
              <li>Device information including hardware model, operating system, and unique identifiers</li>
              <li>Cookies and similar tracking technologies (see Section 6)</li>
              <li>Purchase history and browsing behavior within the Service</li>
            </ul>
            <p className="font-medium text-foreground/80">Information from third parties:</p>
            <ul>
              <li>If you connect a third-party account (e.g. Google), we receive basic profile information from that provider</li>
              <li>Payment processors may share transaction confirmation data with us</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Create and manage your account</li>
              <li>Process transactions and send order confirmations and receipts</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send transactional emails (order updates, password resets)</li>
              <li>Send promotional communications, if you have opted in</li>
              <li>Improve, personalize, and expand our Service</li>
              <li>Monitor and analyze usage patterns to enhance user experience</li>
              <li>Detect, prevent, and address fraud, abuse, or security issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Sharing Your Information">
            <p>
              We do not sell, trade, or rent your personal information to third parties for their
              marketing purposes. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>
                <span className="text-foreground/80 font-medium">Service providers:</span> Third-party
                vendors who assist us in operating the Service (e.g., payment processors, shipping
                carriers, email providers). These parties are contractually obligated to keep your
                information confidential.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Legal requirements:</span> When
                required by law, court order, or governmental authority, or to protect the rights,
                property, or safety of The Black Hearth, our users, or others.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Business transfers:</span> In the
                event of a merger, acquisition, or sale of assets, your information may be transferred
                as part of that transaction. You will be notified via email or prominent notice on
                our website.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">With your consent:</span> We may
                share your information for any other purpose with your explicit consent.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your personal information for as long as your account is active or as needed
              to provide you with the Service. If you close your account, we will delete or anonymize
              your personal data within 90 days, except where we are required to retain it for legal,
              tax, or regulatory purposes.
            </p>
            <p>
              Aggregated, anonymized data may be retained indefinitely for analytics and business
              improvement purposes.
            </p>
          </Section>

          <Section title="6. Cookies and Tracking Technologies">
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our
              Service. Cookies are small data files stored on your device that help us remember your
              preferences and understand how you use the Service.
            </p>
            <p>We use the following types of cookies:</p>
            <ul>
              <li>
                <span className="text-foreground/80 font-medium">Essential cookies:</span> Required
                for the Service to function, including authentication and session management.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Analytics cookies:</span> Help us
                understand how visitors interact with the Service so we can improve it.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Preference cookies:</span> Remember
                your settings and personalization choices.
              </li>
            </ul>
            <p>
              You can control cookie settings through your browser. Note that disabling certain cookies
              may affect the functionality of the Service.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We implement industry-standard security measures to protect your personal information,
              including SSL/TLS encryption for data in transit and encryption at rest for sensitive
              data such as passwords.
            </p>
            <p>
              However, no method of transmission over the internet or electronic storage is 100%
              secure. While we strive to use commercially acceptable means to protect your information,
              we cannot guarantee its absolute security. You are responsible for maintaining the
              secrecy of your account credentials.
            </p>
          </Section>

          <Section title="8. Your Rights and Choices">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li>
                <span className="text-foreground/80 font-medium">Access:</span> Request a copy of
                the personal information we hold about you.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Correction:</span> Request that
                we correct inaccurate or incomplete information.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Deletion:</span> Request that we
                delete your personal information, subject to legal requirements.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Portability:</span> Request a
                machine-readable copy of your data to transfer to another service.
              </li>
              <li>
                <span className="text-foreground/80 font-medium">Opt-out of marketing:</span> Unsubscribe
                from promotional emails at any time via the link in each email or through your account settings.
              </li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@theblackhearth.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                privacy@theblackhearth.com
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              The Service is not directed to children under the age of 13. We do not knowingly collect
              personal information from children under 13. If we become aware that we have inadvertently
              collected such information, we will take steps to delete it promptly.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided us with personal
              information, please contact us at{" "}
              <a href="mailto:privacy@theblackhearth.com" className="text-violet-400 hover:text-violet-300 transition-colors">
                privacy@theblackhearth.com
              </a>
              .
            </p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>
              Our Service may contain links to third-party websites or services. We are not responsible
              for the privacy practices of those sites and encourage you to review their privacy policies
              before providing any personal information.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              "Last updated" date at the top of this page and, where appropriate, notify you by email
              or via a prominent notice on the Service.
            </p>
            <p>
              Your continued use of the Service after any changes constitutes your acceptance of the
              updated Privacy Policy.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-3 p-4 rounded-lg bg-card border border-border/60 text-sm space-y-1">
              <p className="font-medium text-foreground">The Black Hearth — Privacy Team</p>
              <p className="text-muted-foreground">Email: privacy@theblackhearth.com</p>
              <p className="text-muted-foreground">Website: theblackhearth.com</p>
            </div>
          </Section>

          {/* Back links */}
          <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="text-violet-400 hover:text-violet-300 transition-colors">
              Terms of Service →
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