import { Link } from "react-router-dom";

type AntispamEventProps = {
  isDark: boolean;
};

const Antispam = ({ isDark }: AntispamEventProps) => {
  const bgColor = isDark ? "bg-white text-[#1d283a]" : "bg-[#040712] text-white";
  const cardColor = isDark ? "bg-gray-300" : "bg-[#1d283a]";
  const borderColor = isDark ? "border-gray-300" : "border-[#1d283a]";
  const badgeColor = isDark ? "bg-blue-200 text-blue-800" : "bg-blue-800 text-blue-200";
  const tagColor = isDark ? "bg-green-200 text-green-800" : "bg-green-800 text-green-200";
  const borderTopColor = isDark ? "border-gray-300" : "border-gray-700";
  const textMuted = isDark ? "text-gray-700" : "text-gray-300";

  return (
    <div className={`font-[Outfit] px-6 py-12 min-h-screen transition ${bgColor} mr-[17%] ml-[17%]`}>
      <Link to="/docs" className="text-sm opacity-60 hover:underline block mb-6">
        ← Back to Events
      </Link>

      <div className={`rounded-xl p-6 shadow border ${borderColor} ${cardColor}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">antispam</h1>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>Event</span>
        </div>

        <h2 className="text-xl font-semibold mb-2">Event: Antispam</h2>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Identifier</h3>
          <ul className="list-disc list-inside text-sm opacity-80">
            <li>antispamTrigger</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-1">Description</h3>
          <p className="text-sm opacity-80">
            This identifier is used for events triggered by the antispam system when it detects spam activity.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-1">Typical Actions</h3>
          <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
            <li>Automatic warning or muting of the user</li>
            <li>Notification in a moderation channel</li>
            <li>Recording the incident for future analysis</li>
          </ul>
        </div>

        <div className={`border-t pt-3 flex items-center justify-between ${borderTopColor}`}>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor}`}>Event</span>
          <span className={`text-xs ${textMuted}`}>Added in v1.0.0</span>
        </div>
      </div>
    </div>
  );
};

export default Antispam;
