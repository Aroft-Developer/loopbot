import { Link } from "react-router-dom";

type AntilinkIgnoreListCommandProps = {
  isDark: boolean;
};

const AntilinkIgnoreListCommand = ({ isDark }: AntilinkIgnoreListCommandProps) => {
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
          <h1 className="text-2xl font-bold">Command: antilink-ignore-list</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>antiraid</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Display the list of channels currently ignored by the antilink system.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Subcommands</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>/antilink-ignore-list</code>: Show all channels on the antilink ignore list.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Options</h3>
          <p className="text-sm opacity-80">This command does not require any options.</p>
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
            <li><code>/antilink-ignore-list</code> – View the list of ignored channels</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Notes</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li>The command displays all channels where the antilink system is disabled.</li>
            <li>Use this list to review and manage ignored channels effectively.</li>
            <li>To add or remove channels from the list, use <code>/antilink-ignore-add</code> or <code>/antilink-ignore-remove</code>.</li>
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

export default AntilinkIgnoreListCommand;
