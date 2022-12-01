import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../data/chartDummyData";
import { useState } from "react";
import { useEffect } from "react";

const UserList = () => {
  const [rows, setRows] = useState(userRows);
  useEffect(() => {
    console.log("changed");
    console.log(rows);
  }, [rows]);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userCell">
            <div className="user-img">
              <img src={params.row.avatar} alt="" />
            </div>
            <div className="user-name">{params.row.username}</div>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "status", headerName: "Status", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="action-div">
              <button className="edit-btn">Edit</button>
              <DeleteOutline
                onClick={() => {
                  setRows((prev) => {
                    console.log("prev: ", prev);
                    console.log(params.row.id, prev.id);
                    return prev.filter((row) => params.row.id !== row.id);
                  });
                }}
                className="deleteIcon"
              />
            </div>
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <div style={{ height: "90vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default UserList;
