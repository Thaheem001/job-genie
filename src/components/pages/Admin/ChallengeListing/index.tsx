import React, { useEffect } from "react";
import AdminLayout from "../../../layout/AdminLayout";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import {
  TextField,
  Box,
  Modal,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import toast from "react-hot-toast";
import Select, { GroupBase } from "react-select";
import { changeHeading } from "../../../../features/HeaderHeading/HeaderHeadingSlice";
import PrimaryButton from "../../../shared/PrimaryButton";

interface Option {
  value: string;
  label: string;
}

const levelOptions: Option[] = [
  { value: "hard", label: "Hard" },
  { value: "medium", label: "Medium" },
  { value: "easy", label: "Easy" },
];

const typeOptions = [
  { value: "cash", label: "Cash" },
  { value: "practice", label: "Practice" },
];

// level, price, title, type

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Column {
  id: "title" | "type" | "price" | "level" | "desc";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "title", label: "Title", minWidth: 100 },
  { id: "type", label: "Difficulty", minWidth: 50 },

  {
    id: "price",
    label: "Price",
    minWidth: 50,
  },
  { id: "desc", label: "Description", minWidth: 70 },

  {
    id: "level",
    label: "Type",
    minWidth: 50,
  },
];

interface Data {
  _id?: string;
  title: string;
  type: string;
  price: number;
  level: string;
  desc: string;
}

function createData(
  _id: string,
  title: string,
  type: string,
  price: number,
  level: string,
  desc: string
): Data {
  return {
    _id,
    title,
    type,
    price,
    level,
    desc,
  };
}

type Props = {};

const ChallengeListing = (props: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [addModalOpen, setAddModalOpen] = React.useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = React.useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState<boolean>(false);

  const [focusedChallenge, setFocusedChallenge] = React.useState<Data | null>(
    null
  );

  const [rowState, setRowState] = React.useState<Data[]>([]);
  const dispatch = useDispatch();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const APIURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : process.env.REACT_APP_API_URL;

  useEffect(() => {
    dispatch(changeHeading(`Challenge Listing`));
    fetch(`${APIURL}/api/challenges`)
      .then((snap) => snap.json())
      .then((res) => {
        res.data.map((item: Data) =>
          setRowState((prev) => [
            ...prev,
            createData(
              item?._id || "",
              item?.title || "N/A",
              item?.level || "N/A",
              item?.price || 0,
              item?.type || "N/A",
              item?.desc || "no description"
            ),
          ])
        );
      })
      .catch(() => toast.error("Something went wrong"));

    return () => {
      setRowState([]);
    };
  }, []);

  const handleAddChallenge = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const challengeToAdd: any = JSON.parse(
      JSON.stringify({
        title: data?.get("title") || undefined,
        price: data?.get("price") || undefined,
        desc: data?.get("desc") || undefined,
        type: data?.get("type") || undefined,
        level: data?.get("level") || undefined,
      })
    );

    // return console.log(challengeToAdd);

    fetch(`${APIURL}/api/addChallenge`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ challenge: challengeToAdd }),
    })
      .then((dt) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log("failed to add", e.message);
        toast.error("Failed To Add");
      })
      .finally(() => {
        setAddModalOpen(false);
      });
  };

  const handleEditChallenge = (e: any) => {
    e.preventDefault();
    if (focusedChallenge && focusedChallenge?._id) {
      // console.log("focused item is --->", focusedChallenge);

      const data = new FormData(e.currentTarget);

      const challengeToEdit: any = JSON.parse(
        JSON.stringify({
          title: data?.get("title") || undefined,
          price: data?.get("price") || undefined,
          desc: data?.get("desc") || undefined,
          type: data?.get("type") || undefined,
          level: data?.get("level") || undefined,
        })
      );

      fetch(`${APIURL}/api/challenge/${focusedChallenge?._id}`, {
        method: "Put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...challengeToEdit }),
      })
        .then((dt) => {
          window.location.reload();
        })
        .catch((e) => {
          console.log("failed to Edit", e.message);
          toast.error("Failed To Edit");
        })
        .finally(() => {
          setEditModalOpen(false);
        });
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleDeleteChallenge = (e: any) => {
    if (focusedChallenge && focusedChallenge?._id) {
      fetch(`${APIURL}/api/challenge/${focusedChallenge?._id}`, {
        method: "Delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((dt) => {
          window.location.reload();
        })
        .catch((e) => {
          console.log("failed to Delete", e.message);
          toast.error("Failed To Delete");
        })
        .finally(() => {
          setDeleteModalOpen(false);
        });
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <AdminLayout>
      <>
        <div className="createNewAction">
          <PrimaryButton
            value="Create"
            onClick={() => {
              setAddModalOpen(true);
            }}
          />
        </div>

        <div className="userListing">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                    <TableCell key={"controls"}>Controls</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowState
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.title}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}

                          <TableCell key={"controls"}>
                            <div style={{ display: "flex" }}>
                              <button
                                onClick={() => {
                                  setFocusedChallenge(
                                    rowState.filter(
                                      (item) => item._id === row?._id
                                    )[0]
                                  );
                                  setEditModalOpen(true);
                                }}
                                className="form__control__btn"
                              >
                                Edit
                              </button>
                              <button
                                className="form__control__btn"
                                onClick={() => {
                                  setFocusedChallenge(
                                    rowState.filter(
                                      (item) => item._id === row?._id
                                    )[0]
                                  );
                                  setDeleteModalOpen(true);
                                }}
                              >
                                delete
                              </button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rowState.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>

        <div className="challengeListing">
          <Modal
            open={addModalOpen}
            onClose={() => {
              setAddModalOpen(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={handleAddChallenge}>
              <h3 className="text-dark text-center">Add Challenge</h3>

              <TextField
                label="Challenge Title"
                placeholder="Fix UI bug for home"
                size="small"
                className="my-2 w-100"
                name="title"
              />
              <TextField
                label="Price"
                placeholder="10"
                size="small"
                className="my-2 w-100"
                name="price"
                type="number"
              />

              <TextField
                label="Description"
                placeholder="10"
                size="small"
                className="my-2 w-100"
                name="desc"
                type="text"
                rows={4}
                multiline
              />

              <FormControl style={{ width: "100%", marginBottom: "10px" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Difficulty
                </p>
                <div>
                  <Select<Option>
                    name="level"
                    placeholder="Select Difficulty"
                    options={levelOptions}
                  />
                </div>
              </FormControl>

              <FormControl style={{ width: "100%", marginBottom: "10px" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Challenge Type
                </p>
                <div>
                  <Select<Option>
                    name="type"
                    placeholder="Select Challenge Type"
                    options={typeOptions}
                  />
                </div>
              </FormControl>

              <button type="submit" className="btn-own w-100">
                Add Challenge
              </button>
            </Box>
          </Modal>

          <Modal
            open={editModalOpen}
            onClose={() => {
              setFocusedChallenge(null);
              setEditModalOpen(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={handleEditChallenge}>
              <h3 className="text-dark text-center">Add Challenge</h3>

              <TextField
                label="Challenge Title"
                placeholder="Fix UI bug for home"
                size="small"
                className="my-2 w-100"
                name="title"
                defaultValue={focusedChallenge?.title}
              />
              <TextField
                label="Price"
                placeholder="10"
                size="small"
                className="my-2 w-100"
                name="price"
                type="number"
                defaultValue={focusedChallenge?.price}
              />

              <TextField
                label="Description"
                placeholder="10"
                size="small"
                className="my-2 w-100"
                name="desc"
                type="text"
                rows={4}
                multiline
                defaultValue={focusedChallenge?.desc || ""}
              />

              <FormControl style={{ width: "100%", marginBottom: "10px" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Difficulty
                </p>
                <div>
                  <Select<Option>
                    name="level"
                    placeholder="Select Difficulty"
                    options={levelOptions}
                    defaultValue={levelOptions.find(
                      (item) => item.value === focusedChallenge?.type
                    )}
                  />
                </div>
              </FormControl>

              <FormControl style={{ width: "100%", marginBottom: "10px" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Challenge Type
                </p>
                <div>
                  <Select<Option>
                    name="type"
                    placeholder="Select Challenge Type"
                    options={typeOptions}
                    defaultValue={typeOptions.find(
                      (item) => item.value === focusedChallenge?.level
                    )}
                  />
                </div>
              </FormControl>

              <button type="submit" className="btn-own w-100">
                Edit Challenge
              </button>
            </Box>
          </Modal>

          <Modal
            open={deleteModalOpen}
            onClose={() => {
              setFocusedChallenge(null);
              setDeleteModalOpen(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} component="form" onSubmit={handleEditChallenge}>
              <h6 className="text-dark text-center">
                Really want to delete Challenge
              </h6>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <PrimaryButton
                  className="modal_btn"
                  value="Yes"
                  onClick={handleDeleteChallenge}
                />

                <PrimaryButton
                  value="No"
                  className="modal_btn"
                  onClick={() => {
                    setDeleteModalOpen(false);
                    setFocusedChallenge(null);
                  }}
                />
              </div>
            </Box>
          </Modal>
        </div>
      </>
    </AdminLayout>
  );
};

export default ChallengeListing;
