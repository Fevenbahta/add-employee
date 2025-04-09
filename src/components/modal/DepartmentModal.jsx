import { CheckCircle } from "lucide-react";

export default function DepartmentModal({ department, onClose }) {
  if (!department) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-[800px] max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-[#1D3752]">
            {department.title} Department
          </h2>
          <div className="flex gap-2">
            <button className="bg-[#1D3752] text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:bg-[#162b43] transition">
              Save Changes
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-400 transition"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          className="px-6 py-6 overflow-y-auto"
          style={{ maxHeight: "calc(90vh - 80px)" }}
        >
          <div className="flex flex-col items-center">
            {/* Lead */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative">
                <img
                  src={department.leadAvatar}
                  className="w-20 h-20 rounded-full border-4 border-white shadow"
                />
                <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-green-500 bg-white rounded-full" />
              </div>
              <p className="font-semibold text-lg mt-2">{department.head}</p>
              <p className="text-sm text-gray-500">{department.role}</p>
            </div>

            {/* Top Connector Line */}
            <div className="relative w-[70%] h-1 bg-[#1D3752] mb-8 rounded">
              {[0, 50, 100].map((pos) => (
                <div
                  key={pos}
                  className="w-3 h-3 bg-[#1D3752] rounded-full absolute -top-1.5"
                  style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
                />
              ))}
            </div>

            {/* Subordinates Row 1 */}
            <div className="flex justify-around w-full mb-10 gap-6">
              {department.members.map((user, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <img
                      src={user.avatar}
                      className="w-14 h-14 rounded-full border-4 border-white shadow"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full text-xs flex items-center justify-center font-bold">
                      ✅
                    </div>
                  </div>
                  <p className="text-sm font-medium mt-1">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.position}</p>
                </div>
              ))}
            </div>

            {/* Bottom Connector Line */}
            <div className="relative w-[70%] h-1 bg-[#1D3752] mb-8 rounded">
              {[0, 50, 100].map((pos) => (
                <div
                  key={`circle2-${pos}`}
                  className="w-3 h-3 bg-[#1D3752] rounded-full absolute -top-1.5"
                  style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
                />
              ))}
            </div>

            {/* Subordinates Row 2 */}
            <div className="flex justify-around w-full gap-6">
              {department.members.map((user, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <img
                      src={user.avatar}
                      className="w-14 h-14 rounded-full border-4 border-white shadow"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full text-xs flex items-center justify-center font-bold">
                      ✅
                    </div>
                  </div>
                  <p className="text-sm font-medium mt-1">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
