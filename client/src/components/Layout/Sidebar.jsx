import {
  LuLayoutDashboard,
  LuFileText,
  LuCreditCard,
  LuUser,
  LuRepeat,
  LuPlug,
} from "react-icons/lu";
import { FaFileContract } from "react-icons/fa";
import { TbGraph } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const menuItems = [
  { label: "Dashboard", icon: LuLayoutDashboard },
  { label: "Applications", icon: LuFileText },
  { label: "Payment", icon: LuCreditCard },
  { label: "Contracts", icon: FaFileContract },
  { label: "User", icon: LuUser },
  { label: "Subscription", icon: LuRepeat },
  { label: "Reports", icon: TbGraph },
  { label: "Integrations", icon: LuPlug },
  { label: "Support", icon: BiSupport },
];

const Sidebar = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 bg-white z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-68 bg-sidebar
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={onClose}>
            <IoClose size={22} />
          </button>
        </div>

        <div className="p-4">
          <ul className="space-y-1 text-[14px] font-poppins">
            {menuItems.map(({ label, icon: Icon }) => {
              const active = label === "Payment";

              return (
                <li
                  key={label}
                  className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer
                  ${
                    active
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-semibold">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;