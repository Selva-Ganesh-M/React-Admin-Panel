import "./user.scss";
import { PermIdentity, Publish } from "@material-ui/icons";
import { CalendarToday } from "@material-ui/icons";
import { PhoneAndroid } from "@material-ui/icons";
import { MailOutline } from "@material-ui/icons";
import { LocationSearching } from "@material-ui/icons";

const User = () => {
  return (
    <div className="user">
      <div className="header">
        <h1 className="header-title">Edit User</h1>
        <button className="header-btn">Create</button>
      </div>
      <div className="body">
        <div className="body-info">
          <div className="info-title">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="img"
            />
            <div className="flex-box">
              <span className="name">Jon Snow</span>
              <span className="job">full stack developer</span>
            </div>
          </div>
          <div className="account-info">
            <div className="title">Account Details</div>
            <div className="item">
              <PermIdentity className="icon" />
              <span>Jon Snow</span>
            </div>
            <div className="item">
              <CalendarToday className="icon" />
              <span>30.11.2022</span>
            </div>
          </div>
          <div className="contact-info">
            <div className="title">Contact Details</div>
            <div className="item">
              <PhoneAndroid className="icon" />
              <span>+91 704 30 21</span>
            </div>
            <div className="item">
              <MailOutline className="icon" />
              <span>jonsnow@gmail.com</span>
            </div>
            <div className="item">
              <LocationSearching className="icon" />
              <span>Tuty | INDIA</span>
            </div>
          </div>
          <div className="contact-info"></div>
        </div>
        <div className="body-edit">
          <h1 className="edit-title">Edit</h1>
          <div className="edit-main">
            <div className="edit-fields">
              <div className="edit-item">
                <label className="label">Username</label>
                <input type="text" className="input" placeholder="jon snow" />
              </div>
              <div className="edit-item">
                <label className="label">Full Name</label>
                <input type="text" className="input" placeholder="jon snow" />
              </div>
              <div className="edit-item">
                <label className="label">Email</label>
                <input
                  type="text"
                  className="input"
                  placeholder="jonsnow@gmail.com"
                />
              </div>
              <div className="edit-item">
                <label className="label">Phone</label>
                <input
                  type="text"
                  className="input"
                  placeholder="+91 704 30 21"
                />
              </div>
              <div className="edit-item">
                <label className="label">Adress</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Tuty | INDIA"
                />
              </div>
            </div>
            <div className="edit-image">
              <div className="image-upload">
                <div className="img-div">
                  <img
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                </div>
                <label htmlFor="upload">
                  <Publish className="icon" />
                </label>
                <input style={{ display: "none" }} type="file" id="upload" />
              </div>
              <button className="btn">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
