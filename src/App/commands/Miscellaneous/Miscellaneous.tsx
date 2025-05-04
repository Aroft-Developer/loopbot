import { Link } from "react-router-dom";

type MiscellaneousProps = {
  isDark: boolean;
};

const Miscellaneous = ({ isDark }: MiscellaneousProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";

  const commands = [
    {
      name: "avatar",
      description: "Display the avatar of a specified user.",
      href: "/docs/commands/miscellaneous/avatar",
    },
    {
      name: "bot-info",
      description: "Get detailed information about the bot, including statistics, versions, and uptime.",
      href: "/docs/commands/miscellaneous/bot-info",
    },
    {
      name: "giveaway",
      description: "Manage giveaways on your server with advanced customization options.",
      href: "/docs/commands/miscellaneous/giveaway",
    },
    {
      name: "help",
      description: "This command allows you to view all the commands of the bot.",
      href: "/docs/commands/miscellaneous/help",
    },
    {
      name: "pfc",
      description: "When the `pfc` command is invoked, the user must choose one of three options: rock, paper, or scissors. The bot will then randomly select one of the options and determine the winner.",
      href: "/docs/commands/miscellaneous/pfc",
    },
    {
      name: "ping",
      description: "When the `ping` command is invoked, the bot will respond with the current latency times for the API, the bot itself, and the MySQL database.",
      href: "/docs/commands/miscellaneous/ping",
    },
    {
      name: "reportbug",
      description: "Allows you to report a bug.",
      href: "/docs/commands/miscellaneous/reportbug",
    },
    {
      name: "say",
      description: "This command displays a modal where the user can enter a message. Once the message is submitted, LoopBot will repeat it in the channel.",
      href: "/docs/commands/miscellaneous/say",
    },
    {
      name: "server-info",
      description: "Allows you to get information about the server.",
      href: "/docs/commands/miscellaneous/server-info",
    },
    {
      name: "snipe",
      description: "Retrieve and display the most recently deleted message in the current channel.",
      href: "/docs/commands/miscellaneous/snipe",
    },
    {
      name: "userinfo",
      description: "Display detailed information about a specified user, including join date, roles, and activity.",
      href: "/docs/commands/miscellaneous/user-info",
    },
  ];

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-[calc(100vh-136px)] transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs" className="text-sm opacity-60 hover:underline">
        ← Back to Documentation
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-8">Miscellaneous Commands</h1>

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

export default Miscellaneous;
