import { Link } from "react-router-dom";

type ModerationProps = {
  isDark: boolean;
};

const Moderation = ({ isDark }: ModerationProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";

  const commands = [
    { name: "ban", description: "Ban a member.", href: "/docs/commands/moderation/ban" },
    { name: "clear", description: "Delete messages from a specific member or channel.", href: "/docs/commands/moderation/clear" },
    { name: "kick", description: "Kick a member from the server.", href: "/docs/commands/moderation/kick" },
    { name: "lock", description: "Lock a channel.", href: "/docs/commands/moderation/lock" },
    { name: "logs", description: "Allows to configure the logs.", href: "/docs/commands/moderation/logs" },
    { name: "mute", description: "Mute a member to prevent them from speaking or writing in the server.", href: "/docs/commands/moderation/mute" },
    { name: "mutelist", description: "Display a list of all currently muted users in the server.", href: "/docs/commands/moderation/mutelist" },
    { name: "perm", description: "Manage server permissions.", href: "/docs/commands/moderation/perm" },
    { name: "unban", description: "Unban a user.", href: "/docs/commands/moderation/unban" },
    { name: "unlock", description: "Unlock a previously locked channel to allow normal user interactions.", href: "/docs/commands/moderation/unlock" },
    { name: "unmute", description: "Unmute a previously muted user to restore their ability to communicate in the server.", href: "/docs/commands/moderation/unmute" },
    { name: "unwarn", description: "Remove a warning from a user.", href: "/docs/commands/moderation/unwarn" },
    { name: "warn", description: "Warn a member.", href: "/docs/commands/moderation/warn" },
    { name: "warnlist", description: "Display a list of all warnings issued to a specified user.", href: "/docs/commands/moderation/warnlist" },
  ];
  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-[calc(100vh-136px)] transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs" className="text-sm opacity-60 hover:underline">
        ← Back to Documentation
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-8">Moderation Commands</h1>

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

export default Moderation;
