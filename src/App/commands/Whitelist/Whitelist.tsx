import { Link } from "react-router-dom";

type WhitelistProps = {
  isDark: boolean;
};

const Whitelist = ({ isDark }: WhitelistProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";

  const commands = [
    {
      name: "whitelist-add",
      description: "Add a user to the whitelist, allowing them to use the bot despite existing restrictions.",
      href: "/docs/commands/whitelist/whitelist-add",
    },
    {
      name: "whitelist-remove",
      description: "Remove a user from the whitelist, revoking their special access to the bot.",
      href: "/docs/commands/whitelist/whitelist-remove",
    },
    {
      name: "whitelist-show",
      description: "Display a list of members who are ignored by the antiraid system.",
      href: "/docs/commands/whitelist/whitelist-show",
    },
  ];

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-[calc(100vh-136px)] transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs" className="text-sm opacity-60 hover:underline">
        ← Back to Documentation
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-8">Owner Commands</h1>

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

export default Whitelist;
