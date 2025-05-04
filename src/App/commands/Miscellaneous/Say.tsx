import { Link } from "react-router-dom";

type SayCommandProps = {
  isDark: boolean;
};

const SayCommand = ({ isDark }: SayCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-zinc-400 text-zinc-900" : "bg-zinc-900 text-zinc-200";; // Teal
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
          <h1 className="text-2xl font-bold">Command: say</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>miscellaneous</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          The say command allows LoopBot to repeat a message on your behalf. It's useful for admins to communicate without typing manually.
        </p>

        <h3 className="font-semibold mb-1">Permissions</h3>
        <p className="text-sm opacity-80 mb-4">Administrator</p>

        <h3 className="font-semibold mb-1">Category</h3>
        <p className="text-sm opacity-80 mb-4">MISCELLANEOUS</p>

        <h3 className="font-semibold mb-1">How It Works</h3>
        <ul className="list-disc list-inside text-sm opacity-80 space-y-1 mb-4">
          <li>When invoked, a modal will appear with a text input field.</li>
          <li>The user must type a message in the input field (mandatory).</li>
          <li>Once the message is typed, the user submits the modal, and LoopBot repeats the message in the channel.</li>
        </ul>

        <h3 className="font-semibold mb-1">Usage</h3>
        <p className="text-sm opacity-80 mb-4">
          This command is useful for admins who need to announce something quickly without manually typing it out.
        </p>

        <div className={`border-t pt-3 flex items-center justify-between ${borderTopColor}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor}`}>Slash Command</span>
          <span className={`text-xs ${textMuted}`}>Added in v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default SayCommand;
