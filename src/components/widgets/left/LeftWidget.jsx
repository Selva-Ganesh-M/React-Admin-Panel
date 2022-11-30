import { Visibility } from "@material-ui/icons";
import "./leftWidget.scss";

const LeftWidget = () => {
  const NewUser = ({ name, job, image }) => {
    return (
      <>
        <div className="new-user">
          <img src={image} alt="user-img" className="img" />
          <div className="desc">
            <div className="name">{name}</div>
            <div className="job">{job}</div>
          </div>
          <button className="btn">
            <Visibility className="icon" />
            <span>Display</span>
          </button>
        </div>
      </>
    );
  };
  return (
    <div className="left-widget">
      <span className="title">New Join Members</span>
      <NewUser
        name={"Sophie Langdon"}
        job={"Full stack developer"}
        image={
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
      />
      <NewUser
        name={"Sophie Langdon"}
        job={"Full stack developer"}
        image={
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
      />
      <NewUser
        name={"Sophie Langdon"}
        job={"Full stack developer"}
        image={
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
      />
      <NewUser
        name={"Sophie Langdon"}
        job={"Full stack developer"}
        image={
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
      />
      <NewUser
        name={"Sophie Langdon"}
        job={"Full stack developer"}
        image={
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
      />
      <NewUser
        name={"Sophie Langdon"}
        job={"Full stack developer"}
        image={
          "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
      />
    </div>
  );
};

export default LeftWidget;
