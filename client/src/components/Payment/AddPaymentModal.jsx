import { useState } from "react";

const AddPaymentModal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    app: "",
    id: "",
    owner: "",
    document: "",
    type: "",
  });

  const submit = () => {
    onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-3 border">
      <div className="bg-white w-full max-w-md rounded-lg p-6 font-poppins border">
        {/* Header */}
        <h3 className="text-[18px] font-bold tracking-wider mb-5">Add Payment</h3>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Application */}
          <div className="flex flex-col gap-1">
            <label className="text-[16px] font-semibold tracking-wider text-gray-600">
              Application
            </label>
            <input
              type="text"
              placeholder="Enter application name"
              className="border rounded px-3 py-2 text-[14px]"
              onChange={(e) =>
                setForm({ ...form, app: e.target.value })
              }
            />
          </div>

          {/* Transaction ID */}
          <div className="flex flex-col gap-1">
            <label className="text-[16px] font-semibold tracking-wider text-gray-600">
              Transaction ID
            </label>
            <input
              type="text"
              placeholder="Enter transaction ID"
              className="border rounded px-3 py-2 text-[14px]"
              onChange={(e) =>
                setForm({ ...form, id: e.target.value })
              }
            />
          </div>

          {/* Owner */}
          <div className="flex flex-col gap-1">
            <label className="text-[16px] font-semibold tracking-wider text-gray-600">
              Owner
            </label>
            <input
              type="text"
              placeholder="Enter owner name"
              className="border rounded px-3 py-2 text-[14px]"
              onChange={(e) =>
                setForm({ ...form, owner: e.target.value })
              }
            />
          </div>

          {/* Document Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-[16px] font-semibold tracking-wider text-gray-600">
              Document
            </label>
            <input
              type="file"
              className="border rounded px-3 py-2 text-[14px]"
              onChange={(e) =>
                setForm({
                  ...form,
                  document: e.target.files[0]?.name || "",
                })
              }
            />
          </div>

          {/* Payment Type */}
          <div className="flex flex-col gap-1">
            <label className="text-[16px] font-semibold tracking-wider text-gray-600">
              Payment Type
            </label>
            <input
              type="text"
              placeholder="AWS payment"
              className="border rounded px-3 py-2 text-[14px]"
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="text-[14px] font-semibold text-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="bg-[#00B386] text-white px-5 py-2 rounded text-[14px] font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentModal;