import { Link } from "react-router-dom";

type TermsAndConditionsProps = {
  isDark: boolean;
};

const TermsAndConditions = ({ isDark }: TermsAndConditionsProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200"; // Jaune
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Home
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Terms and Conditions of Use</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>Terms</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Last updated: 1/24/2025</h2>

        <h3 className="font-semibold mb-1">1. Acceptance of Terms</h3>
        <p className="text-sm opacity-80 mb-4">
          By using LoopBot, you accept these terms of use. If you do not accept these terms, you must not use the bot.
        </p>

        <h3 className="font-semibold mb-1">2. Service Description</h3>
        <p className="text-sm opacity-80 mb-4">
          LoopBot is a Discord bot offering moderation, anti-raid, music, and server management features. Some features may be limited to the premium version.
        </p>

        <h3 className="font-semibold mb-1">3. Use of the Bot</h3>
        <ul className="list-disc list-inside text-sm opacity-80 mb-4">
          <li>Not use the bot for malicious purposes</li>
          <li>Not attempt to bypass technical limitations</li>
          <li>Respect Discord's terms of use</li>
          <li>Not resell or redistribute the service</li>
        </ul>

        <h3 className="font-semibold mb-1">4. Data Protection</h3>
        <p className="text-sm opacity-80 mb-4">
          We only collect data necessary for the bot's operation. This data is processed in accordance with the GDPR and our privacy policy.
        </p>

        <h3 className="font-semibold mb-1">5. Availability</h3>
        <p className="text-sm opacity-80 mb-4">
          We strive to keep the bot available at all times, but cannot guarantee 100% availability. Interruptions may occur for maintenance.
        </p>

        <h3 className="font-semibold mb-1">6. Intellectual Property</h3>
        <p className="text-sm opacity-80 mb-4">
          All intellectual property rights related to LoopBot belong to its creators. Any reproduction is prohibited without authorization.
        </p>

        <h3 className="font-semibold mb-1">7. Sanctions</h3>
        <p className="text-sm opacity-80 mb-4">
          In case of non-compliance with these terms, we reserve the right to restrict or remove access to the bot without notice.
        </p>

        <h3 className="font-semibold mb-1">8. Modifications</h3>
        <p className="text-sm opacity-80 mb-4">
          These terms may be modified at any time. Users will be informed of changes via the official Discord server.
        </p>

        <div className={`border-t pt-3 flex items-center justify-between ${borderTopColor}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor}`}>Terms and Conditions</span>
          <span className={`text-xs ${textMuted}`}>Last updated: 1/24/2025</span>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
