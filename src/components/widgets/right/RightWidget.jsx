import "./rightWidget.scss";

const RightWidget = () => {
  const TableRow = ({ image, name, status, date, amount }) => {
    return (
      <tr className="tb-tr">
        <td className="img-div">
          <img src={image} className="img" alt="" />
        </td>
        <td className="name">{name}</td>
        <td className="date">{date}</td>
        <td className="amount">$ {amount}</td>
        <td className="status">
          <button className={`btn ${status}`}>{status}</button>
        </td>
      </tr>
    );
  };
  return (
    <div className="right-widget">
      <div className="title">Latest Transactions</div>
      <div className="table">
        <table>
          <thead>
            <tr className="th-tr">
              <td>Customer</td>
              <td>Name</td>
              <td>Date</td>
              <td>Amount</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <TableRow
              image={
                "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              name={"Eren Yeager"}
              status={"Approved"}
              date={"10.11.2022"}
              amount={1200}
            />
            <TableRow
              image={
                "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              name={"Eren Yeager"}
              status={"Pending"}
              date={"10.11.2022"}
              amount={100}
            />
            <TableRow
              image={
                "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              name={"Eren Yeager"}
              status={"Pending"}
              date={"10.11.2022"}
              amount={1200}
            />
            <TableRow
              image={
                "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              name={"Eren Yeager"}
              status={"Approved"}
              date={"10.11.2022"}
              amount={7800}
            />
            <TableRow
              image={
                "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              name={"Eren Yeager"}
              status={"Rejected"}
              date={"10.11.2022"}
              amount={1200}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RightWidget;
