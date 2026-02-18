"use client";
export default function CreateOrder() {
  const createOrder = async () => {
    await fetch("http://localhost:8080/operi/create-live-order", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "itemName=Rice&quantity=5",
    });
  };

  return (
    <button
      className="bg-amber-500 rounded-2xl px-2 py-1 shadow cursor-pointer hover: shadow-amber-40 "
      onClick={createOrder}
    >
      Create Order
    </button>
  );
}
