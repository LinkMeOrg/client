import React from "react";
import {
  X,
  Shield,
  Lock,
  UserCheck,
  FileText,
  AlertCircle,
} from "lucide-react";

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col my-8">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-brand-primary to-blue-600 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Terms & Conditions
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Please read carefully before creating your account
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="prose prose-sm max-w-none space-y-6">
            {/* Important Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-yellow-800">
                    Important Notice
                  </p>
                  <p className="text-sm text-yellow-700 mt-1">
                    By creating an account on LinkMe, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms
                    & Conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    1. Account Registration & Information Accuracy
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed ml-13">
                You agree to provide accurate, current, and complete information
                during registration, including your full legal name, valid email
                address, phone number, and date of birth. Providing false,
                misleading, or fraudulent information may result in immediate
                account suspension or termination without prior notice.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    2. Digital Profile Ownership & Responsibility
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed ml-13">
                Your LinkMe profile represents your digital identity. You retain
                full ownership of your data and are solely responsible for the
                accuracy and legality of all content you upload, including
                profile information, social media links, images, QR codes, and
                NFC card content. LinkMe provides the platform but does not own
                or control your personal data.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    3. NFC & QR Code Usage Policy
                  </h3>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed ml-13">
                <p className="mb-3">
                  When using NFC cards or QR codes generated through LinkMe, you
                  agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Use them exclusively for legitimate personal or business
                    networking purposes
                  </li>
                  <li>
                    Not embed, link to, or redirect users to harmful, malicious,
                    phishing, or misleading URLs
                  </li>
                  <li>
                    Not impersonate another individual, company, or organization
                  </li>
                  <li>
                    Not use LinkMe technology for illegal activities, fraud, or
                    scams
                  </li>
                </ul>
                <p className="mt-3 text-sm text-red-600 font-medium">
                  ⚠️ Violation of this policy will result in immediate and
                  permanent account termination.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    4. Privacy & Data Protection
                  </h3>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed ml-13">
                <p className="mb-3">
                  LinkMe is committed to protecting your privacy and personal
                  information:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    We <strong>never</strong> sell, rent, or share your personal
                    data with third parties for marketing purposes
                  </li>
                  <li>
                    All data is encrypted and stored on secure, protected
                    servers
                  </li>
                  <li>
                    Passwords are hashed using industry-standard encryption and
                    never stored in plain text
                  </li>
                  <li>
                    Your public profile may be visible when shared via QR code
                    or NFC tap
                  </li>
                  <li>
                    You can delete your account and all associated data at any
                    time
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                5. User-Generated Content Policy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You are fully responsible for all content you add to your
                profile, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Social media links and website URLs</li>
                <li>Profile pictures, logos, and images</li>
                <li>Business information and descriptions</li>
                <li>Portfolio content and work samples</li>
              </ul>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Content that is harmful, offensive, discriminatory, threatening,
                sexually explicit, or deceptive is strictly prohibited and will
                result in account termination.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                6. Account Security & Access
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                password and account credentials. All activities performed under
                your account are your responsibility. LinkMe is not liable for
                unauthorized access resulting from weak passwords, sharing
                credentials, or user negligence. Enable two-factor
                authentication (2FA) when available for enhanced security.
              </p>
            </div>

            {/* Section 7 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                7. AI-Powered Features & Recommendations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                LinkMe may provide AI-powered design suggestions, profile
                optimization tips, color scheme recommendations, and automated
                layout enhancements. These features are optional and based on
                data patterns and user preferences. You retain full control over
                your profile's appearance and content at all times.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                8. Limitation of Liability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                LinkMe is not responsible or liable for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Misuse of your profile links by third parties who scan your QR
                  code or tap your NFC card
                </li>
                <li>
                  Unauthorized access or data breaches caused by user negligence
                </li>
                <li>
                  Incorrect, outdated, or misleading information added by users
                </li>
                <li>
                  Third-party services, websites, or platforms linked from your
                  profile
                </li>
                <li>
                  Loss of business opportunities or reputational damage due to
                  user error
                </li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                9. Account Deletion & Data Removal
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You may permanently delete your account at any time through your
                account settings. This action will immediately and irreversibly
                remove:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>All profile data and personal information</li>
                <li>QR codes and NFC card links</li>
                <li>Uploaded images and media files</li>
                <li>Saved designs and templates</li>
                <li>Analytics and usage statistics</li>
              </ul>
              <p className="mt-3 text-sm text-red-600 font-medium">
                ⚠️ Once deleted, your account cannot be recovered.
              </p>
            </div>

            {/* Section 10 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                10. Business & Team Profiles
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Business account holders must ensure that all team members and
                employees listed on the profile are real, authorized, and aware
                of their inclusion. LinkMe is not responsible for
                misrepresentation, unauthorized listings, or disputes arising
                from business account management.
              </p>
            </div>

            {/* Section 11 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                11. Fair Usage & Prohibited Activities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You agree not to use LinkMe for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Spamming users or sending unsolicited messages</li>
                <li>Distributing malware, viruses, or harmful code</li>
                <li>Conducting fraudulent activities or scams</li>
                <li>Impersonating individuals or organizations</li>
                <li>Promoting illegal products, services, or activities</li>
                <li>Violating intellectual property rights</li>
                <li>
                  Scraping, harvesting, or collecting user data without consent
                </li>
              </ul>
            </div>

            {/* Section 12 */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                12. Service Availability & Modifications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                LinkMe reserves the right to modify, suspend, or discontinue any
                feature or service at any time with or without notice. We strive
                for 99.9% uptime but are not liable for temporary service
                interruptions due to maintenance, updates, or unforeseen
                technical issues.
              </p>
            </div>

            {/* Section 13 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-brand-primary rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                13. Acceptance & Agreement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By clicking "Create Account" or using any LinkMe services, you
                confirm that you have read, understood, and agree to be legally
                bound by these Terms & Conditions. If you do not agree with any
                part of these terms, you must not use LinkMe services.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                <strong>Last Updated:</strong> November 23, 2025
              </p>
              <p className="text-sm text-gray-600 mt-1">
                These terms may be updated periodically. Continued use of LinkMe
                after updates constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors font-medium"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
