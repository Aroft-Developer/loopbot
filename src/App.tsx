import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useDarkMode } from "./App/hooks/useDarkMode";
import Navbar from "./App/Navbar";
import Antiraid from "./App/commands/Antiraid/Antiraid";
import Moderation from "./App/commands/Moderation/Moderation";
import Miscellaneous from "./App/commands/Miscellaneous/Miscellaneous";
import Music from "./App/commands/Music/Music";
import Content from "./App/Content";
import Footer from "./App/Footer";
import Documentation from "./App/Documentation";
import LoadingIndicator from "./LoadingIndicator";
import { useEffect, useState } from "react";
import Owner from "./App/commands/Owner/Owner";
import Whitelist from "./App/commands/Whitelist/Whitelist";
import Antibot from "./App/event/Antibot/Antibot";
import Antilink from "./App/event/Antilink/Antilink";
import Antinewaccount from "./App/event/Antinewaccount/antinewaccount";
import Antispam from "./App/event/Antispam/Antispam";
import AntibotCommand from "./App/commands/Antiraid/Antibot";
import AntilinkIgnoreAddCommand from "./App/commands/Antiraid/Antilinkignoreadd"
import AntilinkIgnoreListCommand from "./App/commands/Antiraid/Antilinkignorelist";
import AntilinkIgnoreRemoveCommand from "./App/commands/Antiraid/Antilinkignoreremove";
import AntilinkCommand from "./App/commands/Antiraid/Antilink";
import AntinewaccountCommand from "./App/commands/Antiraid/Antinewaccount";
import AntinewaccountConfigCommand from "./App/commands/Antiraid/Antinewaccountconfig";
import AntispamCommand from "./App/commands/Antiraid/Antispam";
import BanCommand from "./App/commands/Moderation/Ban";
import ClearCommand from "./App/commands/Moderation/Clear";
import KickCommand from "./App/commands/Moderation/Kick";
import LockCommand from "./App/commands/Moderation/Lock";
import LogsCommand from "./App/commands/Moderation/Logs";
import MuteCommand from "./App/commands/Moderation/Mute";
import MuteListCommand from "./App/commands/Moderation/Mutelist";
import PermCommand from "./App/commands/Moderation/Perm";
import UnbanCommand from "./App/commands/Moderation/Unban";
import UnlockCommand from "./App/commands/Moderation/Unlock";
import UnmuteCommand from "./App/commands/Moderation/Unmute";
import UnwarnCommand from "./App/commands/Moderation/Unwarn";
import WarnCommand from "./App/commands/Moderation/Warn";
import WarnListCommand from "./App/commands/Moderation/Warnlist";
import OwnerAddCommand from "./App/commands/Owner/Owneradd";
import OwnerShowCommand from "./App/commands/Owner/Ownershow";
import OwnerRemoveCommand from "./App/commands/Owner/Ownerremove";
import WhitelistAddCommand from "./App/commands/Whitelist/Whitelistadd";
import WhitelistRemoveCommand from "./App/commands/Whitelist/Whitelistremove";
import WhitelistShowCommand from "./App/commands/Whitelist/Whitelistshow";
import LoopCommand from "./App/commands/Music/Loop";
import PlayCommand from "./App/commands/Music/Play";
import QueueCommand from "./App/commands/Music/Queue";
import ReplayCommand from "./App/commands/Music/Replay";
import SkipCommand from "./App/commands/Music/Skip";
import StopCommand from "./App/commands/Music/Stop";
import AvatarCommand from "./App/commands/Miscellaneous/Avatar";
import BotInfoCommand from "./App/commands/Miscellaneous/Botinfo";
import GiveawayCommand from "./App/commands/Miscellaneous/Giveaway";
import HelpCommand from "./App/commands/Miscellaneous/Help";
import PingCommand from "./App/commands/Miscellaneous/Ping";
import SayCommand from "./App/commands/Miscellaneous/Say";
import ServerInfoCommand from "./App/commands/Miscellaneous/Serverinfo";
import SnipeCommand from "./App/commands/Miscellaneous/Snipe";
import UserInfoCommand from "./App/commands/Miscellaneous/Userinfo";
import TermsAndConditions from "./App/terms/Use";
import GeneralTermsAndConditions from "./App/terms/Sal";

function AppWrapper() {
  const [isDark, setIsDark] = useDarkMode();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`${isDark ? "bg-white text-black" : "bg-[#040712] text-white"} min-h-screen relative`}>
      <LoadingIndicator />

      {loading && <div id="blur-overlay"></div>}

      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Routes>
        <Route path="/" element={<Content isDark={isDark} />} />
        <Route path="/docs" element={<Documentation isDark={isDark} />} />
        <Route path="/docs/commands/antiraid" element={<Antiraid isDark={isDark} />} />
        <Route path="/docs/commands/moderation" element={<Moderation isDark={isDark} />} />
        <Route path="/docs/commands/music" element={<Music isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous" element={<Miscellaneous isDark={isDark} />} />
        <Route path="/docs/commands/owner" element={<Owner isDark={isDark} />} />
        <Route path="/docs/commands/whitelist" element={<Whitelist isDark={isDark} />} />
        <Route path="/docs/events/antibot" element={<Antibot isDark={isDark} />} />
        <Route path="/docs/events/antilink" element={<Antilink isDark={isDark} />} />
        <Route path="/docs/events/antinewaccount" element={<Antinewaccount isDark={isDark} />} />
        <Route path="/docs/events/antispam" element={<Antispam isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antibot" element={<AntibotCommand isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antilink-ignore-add" element={<AntilinkIgnoreAddCommand isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antilink-ignore-list" element={<AntilinkIgnoreListCommand isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antilink-ignore-remove" element={<AntilinkIgnoreRemoveCommand isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antilink-ignore-remove" element={<AntilinkIgnoreRemoveCommand isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antilink" element={<AntilinkCommand isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antinewaccount" element={<AntinewaccountCommand isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antinewaccountconfig" element={<AntinewaccountConfigCommand isDark={isDark} />} />
        <Route path="/docs/commands/antiraid/antispam" element={<AntispamCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/ban" element={<BanCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/clear" element={<ClearCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/kick" element={<KickCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/lock" element={<LockCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/logs" element={<LogsCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/mute" element={<MuteCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/mutelist" element={<MuteListCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/perm" element={<PermCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/unban" element={<UnbanCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/unlock" element={<UnlockCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/unmute" element={<UnmuteCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/unwarn" element={<UnwarnCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/warn" element={<WarnCommand isDark={isDark} />} />
        <Route path="/docs/commands/moderation/warnlist" element={<WarnListCommand isDark={isDark} />} />
        <Route path="/docs/commands/owner/owner-add" element={<OwnerAddCommand isDark={isDark} />} />
        <Route path="/docs/commands/owner/owner-show" element={<OwnerShowCommand isDark={isDark} />} />
        <Route path="/docs/commands/owner/owner-remove" element={<OwnerRemoveCommand isDark={isDark} />} />
        <Route path="/docs/commands/whitelist/whitelist-add" element={<WhitelistAddCommand isDark={isDark} />} />
        <Route path="/docs/commands/whitelist/whitelist-remove" element={<WhitelistRemoveCommand isDark={isDark} />} />
        <Route path="/docs/commands/whitelist/whitelist-show" element={<WhitelistShowCommand isDark={isDark} />} />
        <Route path="/docs/commands/music/loop" element={<LoopCommand isDark={isDark} />} />
        <Route path="/docs/commands/music/play" element={<PlayCommand isDark={isDark} />} />
        <Route path="/docs/commands/music/queue" element={<QueueCommand isDark={isDark} />} />
        <Route path="/docs/commands/music/replay" element={<ReplayCommand isDark={isDark} />} />
        <Route path="/docs/commands/music/skip" element={<SkipCommand isDark={isDark} />} />
        <Route path="/docs/commands/music/stop" element={<StopCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/avatar" element={<AvatarCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/bot-info" element={<BotInfoCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/giveaway" element={<GiveawayCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/help" element={<HelpCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/pfc" element={<HelpCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/ping" element={<PingCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/say" element={<SayCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/server-info" element={<ServerInfoCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/snipe" element={<SnipeCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/reportbug" element={<SnipeCommand isDark={isDark} />} />
        <Route path="/docs/commands/miscellaneous/user-info" element={<UserInfoCommand isDark={isDark} />} />
        <Route path="/docs/terms/cgu" element={<TermsAndConditions isDark={isDark} />} />
        <Route path="/docs/terms/cgv" element={<GeneralTermsAndConditions isDark={isDark} />} />
        <Route path="*" element={<Content isDark={isDark}/>} />
      </Routes>
      <Footer isDark={isDark} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}