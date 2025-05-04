import { Link } from "react-router-dom";

type UnmuteCommandProps = {
  isDark: boolean;
};

const UnmuteCommand = ({ isDark }: UnmuteCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-red-200 text-red-800" : "bg-red-800 text-red-200";
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs/commands/moderation" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Moderation Commands
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Command: unmute</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>moderation</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Unmute a previously muted user to restore their ability to communicate in the server.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Options</h3>
          <p className="text-sm opacity-80">user: Mention the user to unmute (Required).</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Required Permissions</h3>
          <p className="text-sm opacity-80">Administrator or Manage Messages.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Usage Examples</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>/unmute user:@Username</code> – Unmute the specified user</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Notes</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li>Ensure the user has served their mute duration before unmuting, if applicable.</li>
          </ul>
        </div>

        <div className={`border-t pt-3 flex items-center justify-between ${borderTopColor}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor}`}>Slash Command</span>
          <span className={`text-xs ${textMuted}`}>Added in v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default UnmuteCommand;
