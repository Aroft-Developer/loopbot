import { Link } from "react-router-dom";

type PlayCommandProps = {
  isDark: boolean;
};

const PlayCommand = ({ isDark }: PlayCommandProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-pink-200 text-pink-800" : "bg-pink-800 text-pink-200"; // Badge rose
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs/commands/music" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Music Commands
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Command: play</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>music</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-sm opacity-80 mb-4">
          Play a music track in the connected voice channel using a query.
        </p>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Subcommands</h3>
          <p className="text-sm opacity-80">/play – Start playing a music track in the voice channel.</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Options</h3>
          <p className="text-sm opacity-80">query: Provide the query to search for a music track (Required).</p>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>YouTube</code> – Search for tracks on YouTube.</li>
            <li><code>SoundCloud</code> – Search for tracks on SoundCloud.</li>
            <li><code>Spotify</code> – Search for tracks on Spotify.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Required Permissions</h3>
          <p className="text-sm opacity-80">EVERYONE: All users can play music.</p>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>Connect</code> – Required for the bot to join the voice channel.</li>
            <li><code>Speak</code> – Required for the bot to play music in the voice channel.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Usage Examples</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li><code>/play query:Rick Astley - Never Gonna Give You Up</code></li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Notes</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li>The bot must be in a voice channel to play music. If not, it will join the channel you are currently in.</li>
            <li>Ensure the query is valid and supported by the bot's configuration.</li>
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

export default PlayCommand;
