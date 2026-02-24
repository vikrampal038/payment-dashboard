import { FiEdit, FiTrash2 } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const PaymentTable = ({ data, selectedRows, setSelectedRows }) => {
  const allSelected = data.length && selectedRows.length === data.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((_, i) => i));
    }
  };

  const toggleRow = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Bulk Action Bar */}
      {selectedRows.length > 0 && (
        <div className="flex items-center gap-4 px-4 py-2 bg-[#F3FFFB] border-b text-[14px]">
          <input type="checkbox" checked={allSelected} onChange={toggleAll} />
          <span className="text-[#00B386] font-semibold text-[16px]">
            {selectedRows.length} Selected
          </span>

          <button
            onClick={() => setEditIndex(selectedRows[0])}
            className="flex items-center gap-1 text-gray-600"
          >
            <FiEdit className="text-[18px]" />
          </button>

          <button className="flex items-center gap-1 text-red-500">
            <FiTrash2 className="text-[18px]" />
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-225 w-full text-[14px]">
          {/* <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3 text-center">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                />
              </th>
              <th className="p-3">Application</th>
              <th className="p-3">Transaction</th>
              <th className="p-3">Owner</th>
              <th className="p-3">Document</th>
              <th className="p-3">Type</th>
            </tr>
          </thead> */}

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b border-[#d8d8d8] bg-[#f1f1f1]">
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(i)}
                    onChange={() => toggleRow(i)}
                  />
                </td>
                <td className=" text-center text-[16px] font-medium font-poppins">
                  <span className="flex  justify-start py-1 items-center gap-4 rounded-md">
                    <img
                      alt="data icon"
                      src="/assets/Featured icon.png"
                      className="w-10 h-10"
                    />
                    {item.app}
                  </span>
                </td>
                <td className="py-2 text-center text-[16px] font-medium font-poppins ">
                  {item.id}
                </td>
                <td className="py-2 text-center text-[16px] font-medium font-poppins">
                  {item.owner}
                </td>
                <td className="py-2 text-center text-[16px] font-medium items-center flex justify-center font-poppins ">
                  <span className="border border-[#d8d8d8] w-60 flex  justify-center py-1 bg-white items-center gap-4 rounded-md">
                    <IoDocumentTextOutline className="text-[20px]" />
                    {item.document}
                  </span>
                </td>
                <td className="py-2 text-center text-[16px] font-medium font-poppins">
                  {item.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentTable;
