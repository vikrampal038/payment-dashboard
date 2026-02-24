import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Payment from "./Pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/payment" />} />

        {/* Payment Page */}
        <Route path="/payment" element={<Payment />} />

        {/* 404 fallback (optional but professional) */}
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center text-gray-500">
              Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


