import React from "react";

export default function Reports() {
  const downloadReport = () => {
    const csv = "Name,Email\nAlice,alice@mail.com\nBob,bob@mail.com";
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "report.csv";
    link.click();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={downloadReport}
      >
        Download CSV Report
      </button>
    </div>
  );
}
