import { Link } from "react-router-dom";

type OwnerRemoveCommandProps = {
  isDark: boolean;
};

const OwnerRemoveCommand = ({ isDark }: OwnerRemoveCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-purple-200 text-purple-800" : "bg-purple-800 text-purple-200"; // Changement de couleur ici
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs/commands/owner" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Owner Commands
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Command: owner-remove</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>owner</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Remove members from the list of bot owners, revoking their special privileges.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Subcommands</h3>
          <p className="text-sm opacity-80">/owner-remove – Remove a specific member from the bot owner list.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Options</h3>
          <p className="text-sm opacity-80">membre: Specify the member to be removed from the owner list (Required).</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Required Permissions</h3>
          <p className="text-sm opacity-80">Server Owner: Only the server owner can use this command.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Usage Examples</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>/owner-remove membre:@User</code> – Remove a member from the owner list</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Notes</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li>Members removed from the owner list will lose any elevated privileges they had.</li>
            <li>Ensure the specified member is valid and exists on the server before executing the command.</li>
            <li>Use this command carefully to manage who has elevated access to the bot.</li>
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

export default OwnerRemoveCommand;
