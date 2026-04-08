import { useEffect, useState } from "react";
import API from "../services/api";

function Fees() {

  const [data, setData] = useState([]);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    API.get("/fees").then(res => setData(res.data));
  };

  const add = () => {

  if (!amount) {
    alert("Enter amount");
    return;
  }

  API.post("/fees", {
    amount: parseFloat(amount) // 🔥 IMPORTANT FIX
  })
    .then(() => {
      alert("Payment successful 💰");
      setAmount("");
      load();
    })
    .catch((err) => {
      console.log("PAYMENT ERROR:", err.response?.data); // 🔥 DEBUG
      alert(err.response?.data || "Payment failed");
    });
};

  return (
    <div className="container mt-4">
      <h2>Payment History</h2>

      <input className="form-control mb-2"
        placeholder="Total Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button className="btn btn-success mb-3" onClick={add}>
  Pay Fees 💰
</button>

      {data.map(f => (
        <div key={f.id} className="card p-2 mb-2">

          Total: ₹ {f.totalAmount} <br />
          Paid: ₹ {f.paidAmount} <br />
          Remaining: ₹ {f.totalAmount - f.paidAmount}

        </div>
      ))}
    </div>
  );
}

export default Fees;