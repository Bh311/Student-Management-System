import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Loader } from 'lucide-react';

export default function ReceiptsContent() {
    const [downloading, setDownloading] = useState(null);

    const receipts = [
        { id: 1, title: "Spring 2024 Fees Receipt", link: "/path/to/receipt-spring-2024.pdf" },
        { id: 2, title: "Fall 2023 Fees Receipt", link: "/path/to/receipt-fall-2023.pdf" },
    ];

    const handleDownload = (receiptId) => {
        setDownloading(receiptId);
        // Simulate a delay for the download
        setTimeout(() => {
            console.log(`Downloading receipt with ID: ${receiptId}`);
            setDownloading(null);
        }, 2000);
    };
    
    return (
        <div className="p-6 bg-white rounded-lg shadow mt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Download Receipts</h2>
            <div className="flex flex-col space-y-4">
                {receipts.map((receipt) => (
                    <div
                        key={receipt.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                        <div className="flex items-center space-x-3">
                            <FileText size={20} className="text-gray-500" />
                            <span className="text-gray-800 font-medium">{receipt.title}</span>
                        </div>
                        <button
                            onClick={() => handleDownload(receipt.id)}
                            className="flex items-center space-x-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                            disabled={downloading === receipt.id}
                        >
                            {downloading === receipt.id ? (
                                <>
                                    <Loader size={16} className="animate-spin" />
                                    <span>Downloading...</span>
                                </>
                            ) : (
                                <>
                                    <Download size={16} />
                                    <span>Download</span>
                                </>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}