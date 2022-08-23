import React, { useEffect } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import { TextField, Box, Modal, Button } from "@mui/material";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { changeHeading } from "../../../../features/HeaderHeading/HeaderHeadingSlice";
import PrimaryButton from "../../../shared/PrimaryButton";
import toast from "react-hot-toast";

interface Column {
  id:
    | "promoCode"
    | "email"
    | "discount"
    | "tototalSignedUpUsers"
    | "totalAmount"
    | "totalPaidAmount"
    | "totalAmountRemaining"
    | "enabled";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "promoCode", label: "PromoCode", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },

  {
    id: "discount",
    label: "Discount",
    minWidth: 170,
  },

  {
    id: "tototalSignedUpUsers",
    label: "TotalUsers",
    minWidth: 170,
  },
  {
    id: "totalAmount",
    label: "Total Amount",
    minWidth: 170,
  },
  {
    id: "totalPaidAmount",
    label: "Total Amount Paid",
    minWidth: 170,
  },
  {
    id: "totalAmountRemaining",
    label: "Total Amount Remaining",
    minWidth: 170,
  },

  {
    id: "enabled",
    label: "IsActive",
    minWidth: 170,
  },
];

interface PromoCodeInterface {
  promoCode: string;
  email: string;
  discount: number;
  tototalSignedUpUsers: number;
  totalPaidAmount: number;
  enabled: string;
  totalAmount?: number;
  totalAmountRemaining?: number;
}

const createPromoCode = (
  promoCode: string,
  email: string,
  discount: number,
  tototalSignedUpUsers: number,
  totalPaidAmount: number,
  enabled: string
) => {
  return {
    promoCode,
    email,
    discount,
    tototalSignedUpUsers,
    enabled,
    totalAmount: discount * tototalSignedUpUsers,
    totalPaidAmount,
    totalAmountRemaining: discount * tototalSignedUpUsers - totalPaidAmount,
  };
};

type Props = {};

const PromoCodes = (props: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowState, setRowState] = React.useState<PromoCodeInterface[]>([]);
  const [addModalOpen, setAddModalOpen] = React.useState<boolean>(false);

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

  const handleAddPromo = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const promoCodeToAdd = {
      promoCode: data.get("promoCode"),
      email: data.get("email"),
      discount: data.get("discount"),
    };
    fetch(`${APIURL}/api/promoCode`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(promoCodeToAdd),
    })
      .then(() => window.location.reload())
      .catch(() => {
        toast.error("Failed To Add");
      })
      .finally(() => {
        setAddModalOpen(false);
      });
  };

  useEffect(() => {
    dispatch(changeHeading(`Promocode Listings`));
    fetch(`${APIURL}/api/allPromocodes`)
      .then((snap) => snap.json())
      .then((res) => {
        res.data.map((item: PromoCodeInterface) =>
          setRowState((prev) => [
            ...prev,
            createPromoCode(
              item.promoCode,
              item.email,
              item.discount,
              item?.tototalSignedUpUsers || 0,
              item.totalPaidAmount || 0,
              item?.enabled ? "Yes" : "No"
            ),
          ])
        );
      })
      .catch(() => alert("something went wrong"));

    return () => {
      setRowState([]);
    };
  }, []);

  return (
    <AdminLayout>
      <div className="promoCodeSection">
        <div className="createNewAction">
          <PrimaryButton
            value="Create"
            onClick={() => {
              setAddModalOpen(true);
            }}
          />
        </div>
        <div className="promocodeListing primaryTable">
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
                          key={row.email}
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

          <div className="promocodeModal__container">
            <Modal
              open={addModalOpen}
              onClose={() => {
                setAddModalOpen(false);
              }}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} component="form" onSubmit={handleAddPromo}>
                <h3 className="text-dark text-center">Add Promocode</h3>

                <TextField
                  label="Promo Code"
                  placeholder="SUPER_MAX_DJ"
                  size="small"
                  className="my-2 w-100"
                  name="promoCode"
                />
                <TextField
                  label="Email"
                  placeholder="john@email.com"
                  size="small"
                  className="my-2 w-100"
                  name="email"
                  type="email"
                />

                <TextField
                  label="Discount "
                  placeholder="5"
                  size="small"
                  className="my-2 w-100"
                  name="discount"
                  type="number"
                  inputProps={{
                    step: "0.01",
                  }}
                />

                <button type="submit" className="btn-own w-100">
                  Add Promocode
                </button>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PromoCodes;
