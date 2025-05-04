import { Link } from "react-router-dom";

type AntiraidProps = {
  isDark: boolean;
};

const Antiraid = ({ isDark }: AntiraidProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";

  const commands = [
    {
      name: "antibot",
      description:
        "Enable or disable the antibot system to enhance server security by preventing malicious bot entries.",
      href: "/docs/commands/antiraid/antibot",
    },
    {
      name: "antilink",
      description:
        "Enable or disable the antilink system to prevent unauthorized or malicious links from being shared in the server.",
      href: "/docs/commands/antiraid/antilink",
    },
    {
      name: "antilink-ignore-add",
      description:
        "Add channels to the ignore list for the antilink system, allowing links to be shared in specific channels.",
      href: "/docs/commands/antiraid/antilink-ignore-add",
    },
    {
      name: "antilink-ignore-list",
      description:
        "Display the list of channels currently ignored by the antilink system.",
      href: "/docs/commands/antiraid/antilink-ignore-list",
    },
    {
      name: "antilink-ignore-remove",
      description:
        "Remove channels from the antilink ignore list, reactivating the antilink system in those channels.",
      href: "/docs/commands/antiraid/antilink-ignore-remove",
    },
    {
      name: "antinewaccount",
      description:
        "Enable or disable the antinewaccount system to prevent newly created accounts from joining the server.",
      href: "/docs/commands/antiraid/antinewaccount",
    },
    {
      name: "antinewaccountconfig",
      description:
        "Configure the minimum account creation date required for the antinewaccount system, ensuring only accounts older than the specified duration can join the server.",
      href: "/docs/commands/antiraid/antinewaccountconfig",
    },
    {
      name: "antispam",
      description:
        "Enable or disable the antispam system to protect the server from spam messages.",
      href: "/docs/commands/antiraid/antispam",
    },
  ];

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-[calc(100vh-136px)] transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs" className="text-sm opacity-60 hover:underline">
        ← Back to Documentation
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-8">Antiraid Commands</h1>

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

export default Antiraid;                                           
