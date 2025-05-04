import { Link } from "react-router-dom";

type BotInfoCommandProps = {
  isDark: boolean;
};

const BotInfoCommand = ({ isDark }: BotInfoCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-zinc-400 text-zinc-900" : "bg-zinc-900 text-zinc-200"; // Marron
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs/commands/miscellaneous" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Miscellaneous Commands
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Command: bot-info</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>miscellaneous</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Get detailed information about the bot, including statistics, versions, and uptime.
        </p>

        <h3 className="font-semibold mb-1">Display Information</h3>
        <ul className="list-disc list-inside text-sm opacity-80 space-y-1 mb-4">
          <li>Bot Details: Developer names, Bot name, Bot ID, Discord.js version, Node.js version, Current uptime</li>
          <li>Statistics: Number of servers, Total users, Command count, Channel count</li>
        </ul>

        <h3 className="font-semibold mb-1">Interactive Elements</h3>
        <ul className="list-disc list-inside text-sm opacity-80 space-y-1 mb-4">
          <li><strong>Invite Me</strong>: Direct link to add the bot to your server</li>
          <li><strong>Support Server</strong>: Link to join the official support server</li>
        </ul>

        <h3 className="font-semibold mb-1">Technical Details</h3>
        <ul className="list-disc list-inside text-sm opacity-80 space-y-1 mb-4">
          <li>Updates every 2 seconds</li>
          <li>Displays uptime in days, hours, minutes, and seconds</li>
          <li>Shows real-time statistics</li>
          <li>Includes bot's avatar as thumbnail</li>
        </ul>

        <h3 className="font-semibold mb-1">Required Permissions</h3>
        <p className="text-sm opacity-80 mb-4">None (Everyone can use this command)</p>

        <h3 className="font-semibold mb-1">Usage Example</h3>
        <ul className="list-disc list-inside text-sm opacity-80 mb-4">
          <li><code>/bot-info</code></li>
        </ul>

        <h3 className="font-semibold mb-1">Notes</h3>
        <ul className="list-disc list-inside text-sm opacity-80 mb-4 space-y-1">
          <li>All information is displayed in a clean, organized embed</li>
          <li>Uptime format automatically adjusts (removes zero values)</li>
          <li>Statistics are pulled from live data</li>
          <li>Response includes interactive buttons for quick access to important links</li>
        </ul>

        <div className={`border-t pt-3 flex items-center justify-between ${borderTopColor}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor}`}>Slash Command</span>
          <span className={`text-xs ${textMuted}`}>Added in v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default BotInfoCommand;
