import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Leads from "./scenes/leads";
import Users from "./scenes/users";
import Customers from "./scenes/customers";
import MenuBase from "./scenes/global/MenuBase";
import Dialer from "./scenes/dialer/old";
import Queue from "./scenes/queue";
import Login from "./features/auth/Login";
import Diagram from "./scenes/diagram";
import RequireAuth from "./features/auth/RequireAuth";
import Chart from "./scenes/charts/";
import Lab from "./scenes/lab";
import Profile from "./scenes/profile";
import Ticket from "./scenes/tickets";
import CarriersAnalytics from "./scenes/analytics/carriers";
import Channels from "./scenes/channels";
import ChannelsLogs from "./scenes/channels/logs";
import TestApi from "./scenes/analytics/carriers/testApi";
import Endpoints from "./scenes/asterisk/endpoints";
import Bridges from "./scenes/asterisk/bridges";
import Calls from "./scenes/asterisk/calls";
import TestRtc from "./scenes/asterisk";
import Maps from "./scenes/maps";
import LandingPage from "./scenes/landing-page";
import Settings from "./scenes/settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuBase />}>
        <Route path="login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics/carriers" element={<CarriersAnalytics />} />
          <Route path="/team" element={<Team />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/charts" element={<Chart />} />

          <Route path="/testrtc" element={<TestRtc />} />

          <Route path="/dialer" element={<Dialer />} />
          <Route path="/dialer/power-dialer" element={<Dialer />} />
          <Route path="/endpoints" element={<Endpoints />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/bridges" element={<Bridges />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/channels/logs" element={<ChannelsLogs />} />
          <Route path="/queues" element={<Queue />} />
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/tickets" element={<Ticket />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/test-api" element={<TestApi />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
