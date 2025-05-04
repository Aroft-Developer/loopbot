import { Link } from "react-router-dom";

type GiveawayCommandProps = {
  isDark: boolean;
};

const GiveawayCommand = ({ isDark }: GiveawayCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-zinc-400 text-zinc-900" : "bg-zinc-900 text-zinc-200";  // Orange foncé
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
          <h1 className="text-2xl font-bold">Command: giveaway</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>miscellaneous</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Manage giveaways on your server with advanced customization options.
        </p>

        <h3 className="font-semibold mb-1">Subcommands</h3>
        <ul className="list-disc list-inside text-sm opacity-80 mb-4 space-y-1">
          <li><code>/giveaway start</code> – Start a new giveaway (channel required)</li>
          <li><code>/giveaway pause</code> – Pause an ongoing giveaway</li>
          <li><code>/giveaway unpause</code> – Resume a paused giveaway</li>
          <li><code>/giveaway end</code> – End a giveaway immediately</li>
          <li><code>/giveaway reroll</code> – Reroll with new winners</li>
          <li><code>/giveaway edit</code> – Modify prize, duration, or winners</li>
        </ul>

        <h3 className="font-semibold mb-1">Configurable Options</h3>
        <ul className="list-disc list-inside text-sm opacity-80 mb-4 space-y-1">
          <li>Prize</li>
          <li>Duration</li>
          <li>Number of winners</li>
          <li>Embed color</li>
          <li>Required role to participate</li>
          <li>Custom emoji</li>
        </ul>

        <h3 className="font-semibold mb-1">Duration Format</h3>
        <p className="text-sm opacity-80 mb-1">Use the following units:</p>
        <ul className="list-disc list-inside text-sm opacity-80 mb-4">
          <li><code>s</code> = Seconds</li>
          <li><code>m</code> = Minutes</li>
          <li><code>h</code> = Hours</li>
          <li><code>d</code> = Days</li>
          <li>Examples: <code>1d</code>, <code>12h</code>, <code>30m</code></li>
        </ul>

        <h3 className="font-semibold mb-1">Required Permissions</h3>
        <p className="text-sm opacity-80 mb-4">ManageMessages</p>

        <h3 className="font-semibold mb-1">Usage Examples</h3>
        <ul className="list-disc list-inside text-sm opacity-80 mb-4 space-y-1">
          <li><code>/giveaway start #announcements</code></li>
          <li><code>/giveaway pause 123456789</code></li>
          <li><code>/giveaway edit 123456789 time:2d winners:3 prize:Nitro</code></li>
        </ul>

        <h3 className="font-semibold mb-1">Notes</h3>
        <ul className="list-disc list-inside text-sm opacity-80 mb-4 space-y-1">
          <li>Giveaway ID refers to the message ID containing the giveaway</li>
          <li>Customizations: colors, emojis, and role restrictions</li>
          <li>Paused giveaways display a special message and retain their duration</li>
          <li>Winners are randomly selected when the giveaway ends</li>
        </ul>

        <div className={`border-t pt-3 flex items-center justify-between ${borderTopColor}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor}`}>Slash Command</span>
          <span className={`text-xs ${textMuted}`}>Added in v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default GiveawayCommand;
