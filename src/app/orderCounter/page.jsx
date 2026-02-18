"use client";
import { useEffect, useState } from "react";
import CreateOrder from "../components/CreateOrder";
export default function LiveOrderCounter() {
  const [totalOrders, setTotalOrders] = useState(0);
  const [status, setStatus] = useState("Disconnected");

  useEffect(() => {
    const eventSource = new EventSource(
      "http://localhost:8080/operi/live-order-stream",
    );

    eventSource.onopen = () => {
      console.log("SSE Connected");
      setStatus("Connected");
    };

    eventSource.onmessage = (event) => {
      console.log("Message received:", event.data);
      const data = JSON.parse(event.data);
      setTotalOrders(data.totalOrders);
    };

    eventSource.onerror = (error) => {
      console.log("SSE Error:", error);
      setStatus("Disconnected");
    };

    return () => {
      eventSource.close();
      setStatus("Closed");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Total Orders: {totalOrders}</h2>
      <p>Status: {status}</p>
      <CreateOrder />
    </div>
  );
}
