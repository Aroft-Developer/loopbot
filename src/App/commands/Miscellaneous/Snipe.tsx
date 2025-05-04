import { Link } from "react-router-dom";

type SnipeCommandProps = {
  isDark: boolean;
};

const SnipeCommand = ({ isDark }: SnipeCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-zinc-400 text-zinc-900" : "bg-zinc-900 text-zinc-200";; // Cyan
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
          <h1 className="text-2xl font-bold">Command: snipe</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>miscellaneous</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Retrieve and display the most recently deleted message in the current channel.
        </p>

        <h3 className="font-semibold mb-1">Required Permissions</h3>
        <p className="text-sm opacity-80 mb-4">Manage Messages</p>

        <h3 className="font-semibold mb-1">How It Works</h3>
        <ul className="list-disc list-inside text-sm opacity-80 space-y-1 mb-4">
          <li>Use the command <code>/snipe</code> to retrieve the last deleted message in the channel.</li>
          <li>It can be useful for moderation to check deleted messages.</li>
        </ul>

        <h3 className="font-semibold mb-1">Usage</h3>
        <p className="text-sm opacity-80 mb-4">
          Simply use <code>/snipe</code> to see the most recent deleted message in the channel.
        </p>

        <div className={`border-t pt-3 flex items-center justify-between ${borderTopColor}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor}`}>Slash Command</span>
          <span className={`text-xs ${textMuted}`}>Added in v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default SnipeCommand;
