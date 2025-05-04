type DocumentationProps = {
    isDark: boolean;
  };
  
  const Documentation = ({ isDark }: DocumentationProps) => {
    const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
    const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
    const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  
    const commandCategories = [
      {
        title: "Antiraid",
        description: "Protection against raids and unwanted behavior",
        count: 8,
        path: "/docs/commands/antiraid",
      },
      {
        title: "Moderation",
        description: "Server moderation commands (ban, kick, mute, etc.)",
        count: 14,
        path: "/docs/commands/moderation",
      },
      {
        title: "Music",
        description: "Music playback and control commands (play, pause, skip, etc.)",
        count: 6,
        path: "/docs/commands/music",
      },
      {
        title: "Miscellaneous",
        description: "Miscellaneous commands (help, ping, etc.)",
        count: 11,
        path: "/docs/commands/miscellaneous",
      },
      {
        title: "Owner",
        description: "Owner commands (add, remove, show)",
        count: 3,
        path: "/docs/commands/owner",
      },
      {
        title: "Whitelist",
        description: "Whitelist commands (add, remove, show)",
        count: 3,
        path: "/docs/commands/whitelist",
      },
    ];
  
    const eventCategories = [
      {
        title: "Antibot",
        description: "Event triggered when the antibot system detects suspicious bot activities",
        path: "/docs/events/antibot",
      },
      {
        title: "Antilink",
        description: "Event triggered when a user tries to send a link in the server",
        path: "/docs/events/antilink",
      },
      {
        title: "Antinewaccount",
        description: "Event triggered when a new account is created and detected as a bot",
        path: "/docs/events/antinewaccount",
      },
      {
        title: "Antispam",
        description: "Event triggered when a user sends too many messages in a short period of time",
        path: "/docs/events/antispam",
      },
    ];
  
    return (
      <div className={`font-[Outfit] px-6 py-12 min-h-[calc(100vh-136px)] transition ${bgColor} mr-[17%] ml-[17%]`}>
        <h1 className="text-4xl font-bold mb-4">Discord Bot Documentation</h1>
  
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
          <p className="text-lg">
            Our Discord bot provides various features for moderation, anti-raid protection, music playback, and more.
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Commands</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {commandCategories.map((cmd) => (
              <a
                href={cmd.path}
                key={cmd.title}
                className={`rounded-lg border ${borderColor} p-5 duration-300 transition ease-in-out hover:${cardColor} hover:shadow-md`}
              >
                <h3 className="text-xl font-semibold">{cmd.title}</h3>
                <p className="text-sm opacity-80">{cmd.description}</p>
                <p className="text-xs mt-2 opacity-60">{cmd.count} commands available</p>
              </a>
            ))}
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-4">Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {eventCategories.map((evt) => (
              <a
                href={evt.path}
                key={evt.title}
                className={`rounded-lg border ${borderColor} p-5 duration-300 transition ease-in-out hover:${cardColor} hover:shadow-md`}
              >
                <h3 className="text-xl font-semibold">{evt.title}</h3>
                <p className="text-sm opacity-80">{evt.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default Documentation;
  