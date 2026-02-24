import { useState } from "react";
import Layout from "../components/Layout/Layout";
import PaymentTable from "../components/Payment/PaymentTable";
import AddPaymentModal from "../components/Payment/AddPaymentModal";
import EditPaymentModal from "../components/Payment/EditPaymentModal";
import { initialPayments } from "../Data/dummyData";
import { exportCSV } from "../utils/exportCSV";

import { AiOutlineCloudUpload, AiOutlineSearch } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { FiFilter, FiEdit2 } from "react-icons/fi";

const Payment = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // search
  const filteredPayments = payments.filter(
    (item) =>
      item.app.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase())
  );

  // update after edit
  const handleUpdate = (updatedItem) => {
    setPayments((prev) =>
      prev.map((item, i) => (i === editIndex ? updatedItem : item))
    );
    setEditIndex(null);
  };

  return (
    <Layout>
      <main className="flex flex-col gap-6 font-poppins">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <h2 className="text-[24px] font-semibold">Payment</h2>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => exportCSV(payments)}
              className="border px-4 py-2 rounded text-[14px] font-semibold flex items-center gap-2"
            >
              <AiOutlineCloudUpload className="text-[20px]" />
              Export CSV
            </button>

            <button
              onClick={() => setOpen(true)}
              className="bg-[#00B386] text-white px-4 py-2 rounded text-[14px] font-semibold flex items-center gap-2"
            >
              <FaPlus />
              Add Payment
            </button>
          </div>
        </div>

        {/* Search / Filter */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <div className="relative w-full md:w-65">
            <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 border rounded text-[14px]"
            />
          </div>

          <button className="border px-4 py-2 rounded text-[14px] font-medium flex items-center gap-2">
            <FiFilter />
            Filter By
          </button>

          <button className="border px-4 py-2 rounded text-[14px] font-medium flex items-center gap-2">
            <FiEdit2 />
            Edit Columns
          </button>
        </div>

        {/* Transaction tab */}
        <div className="border-b">
          <span className="text-[#00B386] text-[14px] font-semibold border-b-2 border-[#00B386] pb-2 inline-block">
            Transaction {filteredPayments.length}
          </span>
        </div>

        {/* Table */}
        <PaymentTable
          data={filteredPayments}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
          onEdit={setEditIndex}   // 🔥 important
        />

        {open && (
          <AddPaymentModal
            onClose={() => setOpen(false)}
            onAdd={(item) => setPayments([...payments, item])}
          />
        )}

        {editIndex !== null && (
          <EditPaymentModal
            initialData={payments[editIndex]}
            onClose={() => setEditIndex(null)}
            onUpdate={handleUpdate}
          />
        )}
      </main>
    </Layout>
  );
};

export default Payment;