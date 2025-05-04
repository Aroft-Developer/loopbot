import { Link } from "react-router-dom";

type GeneralTermsAndConditionsProps = {
  isDark: boolean;
};

const GeneralTermsAndConditions = ({ isDark }: GeneralTermsAndConditionsProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-yellow-200 text-yellow-800" : "bg-yellow-800 text-yellow-200"; // Jaune
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Documentation
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">General Terms and Conditions of Sale</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>Sale Terms</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Last updated: 1/24/2025</h2>

        <h3 className="font-semibold mb-1">1. Object</h3>
        <p className="text-sm opacity-80 mb-4">
          These General Terms and Conditions of Sale govern the commercial relations between LoopBot and its customers for the use of the bot Discord LoopBot.
        </p>

        <h3 className="font-semibold mb-1">2. Price and Payment</h3>
        <p className="text-sm opacity-80 mb-4">
          Prices are indicated in euros and are subject to change. Payment is made via the means of payment accepted by Discord.
        </p>

        <h3 className="font-semibold mb-1">3. Premium Services</h3>
        <p className="text-sm opacity-80 mb-4">
          Premium features are accessible after subscribing to a monthly or annual subscription. Rates are available on our Discord server.
        </p>

        <h3 className="font-semibold mb-1">4. Duration and Termination</h3>
        <p className="text-sm opacity-80 mb-4">
          The premium subscription is for a fixed term and is automatically renewed. Termination must be made before the renewal date.
        </p>

        <h3 className="font-semibold mb-1">5. Liability</h3>
        <p className="text-sm opacity-80 mb-4">
          LoopBot cannot be held responsible for indirect damage resulting from the use of the bot. Our liability is limited to the amount of the subscription.
        </p>

        <h3 className="font-semibold mb-1">6. Customer Support</h3>
        <p className="text-sm opacity-80 mb-4">
          Technical support is available via our official Discord server. Response time may vary depending on the nature of the request.
        </p>

        <h3 className="font-semibold mb-1">7. Modifications</h3>
        <p className="text-sm opacity-80 mb-4">
          We reserve the right to modify these conditions at any time. Users will be informed of changes via our server Discord.
        </p>

        <h3 className="font-semibold mb-1">8. Contact</h3>
        <p className="text-sm opacity-80 mb-4">
          For any questions regarding these GTCS, you can contact us via our Discord server or by email.
        </p>

        <div className={`border-t pt-3 flex items-center justify-between ${borderTopColor}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor}`}>Terms and Conditions</span>
          <span className={`text-xs ${textMuted}`}>Last updated: 1/24/2025</span>
        </div>
      </div>
    </div>
  );
};

export default GeneralTermsAndConditions;
