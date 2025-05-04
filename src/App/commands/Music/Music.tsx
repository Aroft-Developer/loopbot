import { Link } from "react-router-dom";

type MusicProps = {
  isDark: boolean;
};

const Music = ({ isDark }: MusicProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";

  const commands = [
    {
      name: "loop",
      description: "Enable or disable the loop mode for the currently playing music track.",
      href: "/docs/commands/music/loop",
    },
    {
      name: "play",
      description: "Play a music track in the connected voice channel using a query.",
      href: "/docs/commands/music/play",
    },
    {
      name: "queue",
      description: "View the list of songs currently in the playback queue.",
      href: "/docs/commands/music/queue",
    },
    {
      name: "replay",
      description: "Replay the last stopped or finished music track.",
      href: "/docs/commands/music/replay",
    },
    {
      name: "skip",
      description: "Skip to the next song in the playback queue.",
      href: "/docs/commands/music/skip",
    },
    {
      name: "stop",
      description: "Stop the currently playing music and clear the playback queue.",
      href: "/docs/commands/music/stop",
    },
  ];

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-[calc(100vh-136px)] transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs" className="text-sm opacity-60 hover:underline">
        ← Back to Documentation
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-8">Music Commands</h1>

      <div className="space-y-4 mb-10">
        {commands.map((cmd) => (
          <a
            key={cmd.name}
            href={cmd.href}
            className={`block border ${borderColor} rounded-lg p-5 duration-300 transition ease-in-out hover:${cardColor} hover:shadow`}
          >
            <h2 className="text-lg font-semibold mb-1">{cmd.name}</h2>
            <p className="text-sm opacity-80">{cmd.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Music;
