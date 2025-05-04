import { Link } from "react-router-dom";

type OwnerProps = {
  isDark: boolean;
};

const Owner = ({ isDark }: OwnerProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";

  const commands = [
    {
      name: "owner-add",
      description: "Add members as owners of the bot, granting them special privileges.",
      href: "/docs/commands/owner/owner-add",
    },
    {
      name: "owner-remove",
      description: "Remove members from the list of bot owners, revoking their special privileges.",
      href: "/docs/commands/owner/owner-remove",
    },
    {
      name: "owner-show",
      description: "Display a list of members who are owners of the bot.",
      href: "/docs/commands/owner/owner-show",
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

export default Owner;
