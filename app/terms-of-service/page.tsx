import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Prestige Law",
  description: "Terms and conditions governing the use of Prestige Law's website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover:bg-law-beige-100 dark:hover:bg-law-brown-800/50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="heading-xl mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-law-brown-700 dark:text-law-beige-300">Last Updated: January 1, 2023</p>

          <h2 className="heading-md mt-8 mb-4">1. Introduction</h2>
          <p className="body-md mb-4">
            Welcome to Prestige Law. These Terms of Service ("Terms") govern your access to and use of our website,
            including any content, functionality, and services offered on or through our website (collectively, the
            "Website").
          </p>
          <p className="body-md mb-4">
            These Terms of Service govern your access to and use of Gebru Mahitem Law Office's website and services.
          </p>
          <p className="body-md mb-4">
            Please read these Terms carefully before using our Website. By accessing or using our Website, you agree to
            be bound by these Terms. If you do not agree to these Terms, you must not access or use our Website.
          </p>

          <h2 className="heading-md mt-8 mb-4">2. No Attorney-Client Relationship</h2>
          <p className="body-md mb-4">
            The information provided on our Website is for general informational purposes only and does not constitute
            legal advice. Your use of our Website does not create an attorney-client relationship between you and
            Prestige Law or any of our attorneys.
          </p>
          <p className="body-md mb-4">
            An attorney-client relationship is formed only when you and Prestige Law expressly agree to such a
            relationship through a written engagement agreement. Until such an agreement is established, any information
            you provide to us through our Website or other means is not protected by the attorney-client privilege.
          </p>

          <h2 className="heading-md mt-8 mb-4">3. Website Content</h2>
          <p className="body-md mb-4">
            The content on our Website, including text, graphics, images, videos, and other materials, is provided for
            informational purposes only. We make reasonable efforts to ensure that the content is accurate and up to
            date, but we do not warrant or guarantee the accuracy, completeness, or reliability of any content.
          </p>
          <p className="body-md mb-4">
            Legal information is constantly changing, and the content on our Website may not reflect the most current
            legal developments, verdicts, or settlements. The content on our Website should not be relied upon as a
            substitute for legal advice from a qualified attorney regarding your specific situation.
          </p>

          <h2 className="heading-md mt-8 mb-4">4. Intellectual Property Rights</h2>
          <p className="body-md mb-4">
            Our Website and its entire contents, features, and functionality (including but not limited to all
            information, software, text, displays, images, video, and audio, and the design, selection, and arrangement
            thereof) are owned by Prestige Law, its licensors, or other providers of such material and are protected by
            copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="body-md mb-4">
            You may access, view, and use our Website for your personal, non-commercial use only. You must not
            reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish,
            download, store, or transmit any of the material on our Website without our prior written consent.
          </p>

          <h2 className="heading-md mt-8 mb-4">5. User Conduct</h2>
          <p className="body-md mb-4">
            When using our Website, you agree not to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 body-md">
            <li>Use our Website in any way that violates any applicable federal, state, local, or international law or regulation</li>
            <li>Use our Website to transmit or send unsolicited commercial communications</li>
            <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of our Website, the server on which our Website is stored, or any server, computer, or database connected to our Website</li>
            <li>Attack our Website via a denial-of-service attack or a distributed denial-of-service attack</li>
            <li>Use any robot, spider, or other automatic device, process, or means to access our Website for any purpose, including monitoring or copying any of the material on our Website</li>
            <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful</li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">6. Links to Third-Party Websites</h2>
          <p className="body-md mb-4">
            Our Website may contain links to third-party websites or resources that are not owned or controlled by
            Prestige Law. We have no control over, and assume no responsibility for, the content, privacy policies, or
            practices of any third-party websites or resources. You acknowledge and agree that Prestige Law shall not be
            responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in
            connection with the use of or reliance on any such content, goods, or services available on or through any
            such websites or resources.
          </p>

          <h2 className="heading-md mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="body-md mb-4">
            To the fullest extent permitted by applicable law, Prestige Law and its officers, directors, employees,
            agents, affiliates, and licensors shall not be liable for any indirect, incidental, special, consequential,
            or punitive damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other
            intangible losses, resulting from (i) your access to or use of or inability to access or use the Website;
            (ii) any conduct or content of any third party on the Website; (iii) any content obtained from the Website;
            and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty,
            contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the
            possibility of such damage.
          </p>

          <h2 className="heading-md mt-8 mb-4">8. Indemnification</h2>
          <p className="body-md mb-4">
            You agree to defend, indemnify, and hold harmless Prestige Law, its officers, directors, employees, agents,
            licensors, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses,
            costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation
            of these Terms or your use of the Website, including, but not limited to, any use of the Website's content
            other than as expressly authorized in these Terms.
          </p>

          <h2 className="heading-md mt-8 mb-4">9. Governing Law and Jurisdiction</h2>
          <p className="body-md mb-4">
            These Terms and your use of the Website shall be governed by and construed in accordance with the laws of the
            State of New York, without regard to its conflict of law principles. Any legal action or proceeding relating
            to your access to, or use of, the Website or these Terms shall be instituted in a state or federal court in
            New York County, New York, and you agree to submit to the personal jurisdiction of such courts.
          </p>

          <h2 className="heading-md mt-8 mb-4">10. Changes to These Terms</h2>
          <p className="body-md mb-4">
            We may revise and update these Terms from time to time in our sole discretion. All changes are effective
            immediately when we post them and apply to all access to and use of the Website thereafter. Your continued
            use of the Website following the posting of revised Terms means that you accept and agree to the changes.
          </p>

          <h2 className="heading-md mt-8 mb-4">11. Severability</h2>
          <p className="body-md mb-4">
            If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid,
            illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent
            such that the remaining provisions of the Terms will continue in full force and effect.
          </p>

          <h2 className="heading-md mt-8 mb-4">12. Entire Agreement</h2>
          <p className="body-md mb-4">
            These Terms, together with our Privacy Policy, constitute the sole and entire agreement between you and
            Prestige Law regarding the Website and supersede all prior and contemporaneous understandings, agreements,
            representations, and warranties, both written and oral, regarding the Website.
          </p>

          <h2 className="heading-md mt-8 mb-4">13. Contact Information</h2>
          <p className="body-md mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-law-beige-100 dark:bg-law-brown-800/50 p-6 rounded-lg mb-8">
            <p className="body-md mb-2">
              <strong>Prestige Law</strong>
            </p>
            <p className="body-md mb-2">123 Legal Avenue, Suite 500</p>
            <p className="body-md mb-2">New York, NY 10001</p>
            <p className="body-md mb-2">
              <strong>Email:</strong> terms@prestigelaw.com
            </p>
            <p className="body-md">
              <strong>Phone:</strong> (212) 555-1234
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/">
            <Button className="btn-law">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
