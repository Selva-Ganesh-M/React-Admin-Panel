import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import "./sidebar.scss";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar-section">
        <h3 className="sidebar-title">Dashboard</h3>
        <ul className="sidebar-list">
          <li className="sidebar-li">
            <LineStyle />
            <span>Home</span>
          </li>
          <li className="sidebar-li">
            <Timeline />
            <span>Analytics</span>
          </li>
          <li className="sidebar-li">
            <TrendingUp />
            <span>Sales</span>
          </li>
        </ul>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-title">Quick Menu</h3>
        <ul className="sidebar-list">
          <li className="sidebar-li">
            <PermIdentity />
            <span>User</span>
          </li>
          <li className="sidebar-li">
            <Storefront />
            <span>Products</span>
          </li>
          <li className="sidebar-li">
            <AttachMoney />
            <span>Transanctions</span>
          </li>
          <li className="sidebar-li">
            <BarChart />
            <span>Reports</span>
          </li>
        </ul>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-title">Notifications</h3>
        <ul className="sidebar-list">
          <li className="sidebar-li">
            <MailOutline />
            <span>Mail</span>
          </li>
          <li className="sidebar-li">
            <DynamicFeed />
            <span>Feedback</span>
          </li>
          <li className="sidebar-li">
            <ChatBubbleOutline />
            <span>Messages</span>
          </li>
        </ul>
      </section>
      <section className="sidebar-section">
        <h3 className="sidebar-title">Staff</h3>
        <ul className="sidebar-list">
          <li className="sidebar-li">
            <WorkOutline />
            <span>Manage</span>
          </li>
          <li className="sidebar-li">
            <Timeline />
            <span>Analytics</span>
          </li>
          <li className="sidebar-li">
            <Report />
            <span>Reports</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
