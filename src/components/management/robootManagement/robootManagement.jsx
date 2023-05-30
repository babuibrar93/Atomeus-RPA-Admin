import React, { useState } from "react";
import { TableWrapper } from "../style";
import { robootData } from "..";
import MoreVertModal from "../../modal/more-vert-modal";

import RobootModal from "../../modal//robootModal/robootModal";
import { MoreVert } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Menu } from "@material-ui/core";

const RobootManagement = () => {
  const [open, setOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const MyOptions = [
    { icon: "assets/images/table/tick.svg", action: "Assign" },
    { icon: "assets/images/auth/eye.svg", action: "View" },
    { icon: "assets/images/table/delete.svg", action: "Delete" },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openEL = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModal = (arg) => {
    setOpen(arg);
  };

  const handleMoreVertModal = (previous) => {
    setOpenMore(!previous);
  };

  return (
    <>
      <div className="main">
        <div
          className="moreVert"
          style={{
            position: "absolute",
            right: "30px",
            top: "20.6rem",
            zIndex: 5,
          }}
        >
          {openMore && <MoreVertModal action={handleMoreVertModal} />}
        </div>
        {open && <RobootModal show={true} action={handleModal} />}
      </div>

      <TableWrapper>
        <div className="containerDiv">
          <div className="row mt-5">
            <div className="mainDiv col-md-12">
              <div className="topDiv">
                <div className="rightPart">
                  <span>Robot Management</span>
                </div>
                <div className="rightPart">
                  <form className="input-group w-auto my-auto d-none d-sm-flex search">
                    <div className="searchIcon">
                      <img src="/assets/images/sidebar/search.svg" />
                    </div>
                    <input
                      autoComplete="off"
                      type="search"
                      className="form-control rounded searchField"
                      placeholder="Search"
                      style={{ minWidth: "344px" }}
                    />
                  </form>
                  <button className="add-btn" onClick={() => handleModal(true)}>
                    <img src="/assets/images/table/plusIcon.svg" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
              <table id="example" className="table bottomDiv table-striped">
                <thead>
                  <tr>
                    <th className="checkbox-wrapper">
                      <input id="test" type="checkbox" className="checkthis" />
                      <label htmlFor="test"></label>
                    </th>

                    <th>Name</th>
                    <th>Version</th>
                    <th>Usage Month</th>
                    <th>Assigned to</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {robootData?.map((data, index) => {
                    return (
                      <tr className="tableRows" key={index}>
                        <th className="checkbox-wrapper">
                          <input
                            id={index}
                            type="checkbox"
                            className="checkthis"
                          />
                          <label htmlFor={index}></label>
                        </th>
                        <td>{data.name}</td>
                        <td>{data.version}</td>
                        <td>{data.userMonth}</td>
                        <td>{data.assignTo}</td>
                        <td>
                          <div className="status">
                            {data.status === "Active" ? (
                              <img
                                src="/assets/images/table/active.svg"
                                style={{ width: 16.59, height: 16.67 }}
                              />
                            ) : (
                              <img
                                src="/assets/images/table/inactive.svg"
                                style={{ width: 14.19, height: 14.19 }}
                              />
                            )}

                            <span>{data.status}</span>
                          </div>
                        </td>

                        <td>
                          <div className="actions">
                            <img src="/assets/images/table/editIcon.svg" />
                            <div>
                              <img
                                src="/assets/images/table/moreVert.svg"
                                // onClick={handleClick}
                                onClick={() => handleMoreVertModal(openMore)}
                                className="moreIcon"
                              />
                              {/* <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                onClose={handleClose}
                                open={openEL}
                                className="more"
                              >
                               <MoreVertModal action={handleMoreVertModal} />
                              </Menu> */}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="pagination">
                <button className="previousNext">
                  <img src="assets/images/table/previous.svg" />
                  <span>Previous</span>
                </button>
                <div className="numbering">
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>...</button>
                  <button>8</button>
                  <button>9</button>
                  <button>10</button>
                </div>
                <button className="previousNext">
                  <span>Next</span>
                  <img src="assets/images/table/next.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </TableWrapper>
    </>
  );
};

export default RobootManagement;
