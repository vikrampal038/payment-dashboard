import { useState } from "react";

const EditPaymentModal = ({ onClose, onUpdate, initialData }) => {
  const [form, setForm] = useState(initialData);

  const submit = () => {
    onUpdate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-3">
      <div className="bg-white w-full max-w-md rounded-lg p-6 font-poppins">
        <h3 className="text-[18px] font-semibold mb-5">Edit Payment</h3>

        <div className="flex flex-col gap-4">
          {/* Application */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-gray-600">
              Application
            </label>
            <input
              value={form.app}
              onChange={(e) =>
                setForm({ ...form, app: e.target.value })
              }
              className="border rounded px-3 py-2 text-[14px]"
            />
          </div>

          {/* Transaction ID */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-gray-600">
              Transaction ID
            </label>
            <input
              value={form.id}
              onChange={(e) =>
                setForm({ ...form, id: e.target.value })
              }
              className="border rounded px-3 py-2 text-[14px]"
            />
          </div>

          {/* Owner */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-gray-600">
              Owner
            </label>
            <input
              value={form.owner}
              onChange={(e) =>
                setForm({ ...form, owner: e.target.value })
              }
              className="border rounded px-3 py-2 text-[14px]"
            />
          </div>

          {/* Document */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-gray-600">
              Document
            </label>
            <input
              type="file"
              className="border rounded px-3 py-2 text-[14px]"
              onChange={(e) =>
                setForm({
                  ...form,
                  document: e.target.files[0]?.name || form.document,
                })
              }
            />
          </div>

          {/* Type */}
          <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-gray-600">
              Payment Type
            </label>
            <input
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
              className="border rounded px-3 py-2 text-[14px]"
            />
          </div>
        </div>

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
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPaymentModal;