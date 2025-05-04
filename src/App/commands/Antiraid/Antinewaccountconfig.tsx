import { Link } from "react-router-dom";

type AntinewaccountConfigCommandProps = {
  isDark: boolean;
};

const AntinewaccountConfigCommand = ({ isDark }: AntinewaccountConfigCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-blue-200 text-blue-800" : "bg-blue-800 text-blue-200";
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs/commands/antiraid" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Antiraid Commands
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Command: antidc-config</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>antiraid</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Configure the minimum account creation date required for the antinewaccount system, ensuring only accounts older than the specified duration can join the server.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Subcommands</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>/antidc-config</code>: Set the minimum account age restriction.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Options</h3>
          <p className="text-sm opacity-80 mb-1">• <strong>temps</strong>: The minimum account age required to join the server (Required).</p>
          <p className="text-sm opacity-80">Format: Use <code>d</code> (days), <code>h</code> (hours), or <code>m</code> (minutes).</p>
          <ul className="list-disc list-inside text-sm opacity-80">
            <li>7d (7 days)</li>
            <li>12h (12 hours)</li>
            <li>30m (30 minutes)</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Required Permissions</h3>
          <p className="text-sm opacity-80">Only bot owners added with <code>/owner-add</code> can use this command.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Category</h3>
          <p className="text-sm opacity-80">ANTIRAID</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Usage Examples</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>/antidc-config 7d</code> – Set the minimum account age to 7 days</li>
            <li><code>/antidc-config 12h</code> – Set the minimum account age to 12 hours</li>
            <li><code>/antidc-config 30m</code> – Set the minimum account age to 30 minutes</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Notes</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li>The antinewaccount system blocks accounts that do not meet the specified age criteria.</li>
            <li>Use the <code>/antidc-config</code> command to adjust the restriction based on your server's security needs.</li>
            <li>Only users with administrative privileges can configure the account age restriction.</li>
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

export default AntinewaccountConfigCommand;
