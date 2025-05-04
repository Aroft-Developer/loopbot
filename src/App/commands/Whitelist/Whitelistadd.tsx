import { Link } from "react-router-dom";

type WhitelistAddCommandProps = {
  isDark: boolean;
};

const WhitelistAddCommand = ({ isDark }: WhitelistAddCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-yellow-200 text-yellow-800" : "bg-yellow-800 text-yellow-200"; // Changement vers le jaune
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs/commands/whitelist" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Whitelist Commands
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Command: whitelist-add</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>whitelist</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Add a user to the whitelist, allowing them to use the bot despite existing restrictions.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Subcommands</h3>
          <p className="text-sm opacity-80">/whitelist-add – Add a specific user to the whitelist.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Options</h3>
          <p className="text-sm opacity-80">membre: Specify the user to be added to the whitelist (Required).</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Required Permissions</h3>
          <p className="text-sm opacity-80">Owner: Only users added to the owner list can use this command.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Usage Examples</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>/whitelist-add membre:@User</code> – Add a user to the whitelist</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Notes</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li>Users added to the whitelist bypass all restrictions applied to other members.</li>
            <li>This command is intended for trusted users who require unrestricted bot access.</li>
            <li>Ensure the specified user is valid and exists on the server before executing the command.</li>
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

export default WhitelistAddCommand;
