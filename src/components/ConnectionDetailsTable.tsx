import React, { useState } from "react";
import { FaSortUp, FaSortDown, FaTrash, FaSort } from "react-icons/fa";

interface ConnectionData {
  id: string;
  explanation: string;
  firstName: string;
  lastName: string;
  macAddress: string;
  connectionType: string;
  device: string;
  limit: string;
  download: string;
  upload: string;
  sessionDuration: string;
}

const ConnectionDetailsTable: React.FC = () => {
  const initialData: ConnectionData[] = [
    {
      id: "25676",
      explanation: "43474598048",
      firstName: "EFE",
      lastName: "BAĞCI",
      macAddress: "74:6B:AB:7D:70:97",
      connectionType: "TC",
      device: "Android",
      limit: "5M/5M",
      download: "1.1 GB",
      upload: "42.2 MB",
      sessionDuration: "4 Saat 39 dk",
    },
    {
      id: "239802",
      explanation: "10268874916",
      firstName: "MIKAIL",
      lastName: "KAYA",
      macAddress: "1A:EA:54:CF:44:21",
      connectionType: "TC",
      device: "Android",
      limit: "5M/5M",
      download: "2.4 MB",
      upload: "319.9 KB",
      sessionDuration: "8 Saat 14 dk",
    },
    {
      id: "120398",
      explanation: "50182304921",
      firstName: "AYŞE",
      lastName: "YILMAZ",
      macAddress: "45:B2:C3:11:D4:E5",
      connectionType: "WIFI",
      device: "iPhone",
      limit: "10M/10M",
      download: "500 MB",
      upload: "20 MB",
      sessionDuration: "1 Saat 15 dk",
    },
    {
      id: "784512",
      explanation: "78945234112",
      firstName: "MEHMET",
      lastName: "DEMİR",
      macAddress: "98:7A:4B:2C:1D:0E",
      connectionType: "LAN",
      device: "Laptop",
      limit: "50M/50M",
      download: "5 GB",
      upload: "200 MB",
      sessionDuration: "6 Saat 30 dk",
    },
    {
      id: "321980",
      explanation: "63258741259",
      firstName: "FATMA",
      lastName: "ÇELİK",
      macAddress: "12:34:56:78:9A:BC",
      connectionType: "TC",
      device: "iPad",
      limit: "20M/20M",
      download: "800 MB",
      upload: "50 MB",
      sessionDuration: "3 Saat 5 dk",
    },
    {
      id: "562914",
      explanation: "65781234912",
      firstName: "AHMET",
      lastName: "KOÇ",
      macAddress: "DE:AD:BE:EF:12:34",
      connectionType: "WIFI",
      device: "Windows",
      limit: "15M/15M",
      download: "3.5 GB",
      upload: "500 MB",
      sessionDuration: "5 Saat 20 dk",
    },
    {
      id: "294385",
      explanation: "49381234598",
      firstName: "ZEYNEP",
      lastName: "KARACA",
      macAddress: "AB:CD:EF:12:34:56",
      connectionType: "LAN",
      device: "MacBook",
      limit: "100M/100M",
      download: "7.1 GB",
      upload: "800 MB",
      sessionDuration: "7 Saat 50 dk",
    },
    {
      id: "875230",
      explanation: "90345127812",
      firstName: "MURAT",
      lastName: "ŞAHİN",
      macAddress: "A1:B2:C3:D4:E5:F6",
      connectionType: "WIFI",
      device: "Android",
      limit: "30M/30M",
      download: "2.3 GB",
      upload: "300 MB",
      sessionDuration: "4 Saat 10 dk",
    },
    {
      id: "503812",
      explanation: "74830123489",
      firstName: "SELİN",
      lastName: "YILDIRIM",
      macAddress: "AB:CD:34:56:78:90",
      connectionType: "TC",
      device: "Tablet",
      limit: "10M/10M",
      download: "1.4 GB",
      upload: "100 MB",
      sessionDuration: "2 Saat 45 dk",
    },
    {
      id: "698012",
      explanation: "12340987123",
      firstName: "KEREM",
      lastName: "AKSOY",
      macAddress: "BC:DE:F1:23:45:67",
      connectionType: "WIFI",
      device: "Linux",
      limit: "50M/50M",
      download: "6.8 GB",
      upload: "750 MB",
      sessionDuration: "6 Saat 25 dk",
    },
    {
      id: "481209",
      explanation: "67238940123",
      firstName: "ELİF",
      lastName: "AKIN",
      macAddress: "C1:D2:E3:F4:G5:H6",
      connectionType: "LAN",
      device: "MacBook",
      limit: "25M/25M",
      download: "4.2 GB",
      upload: "320 MB",
      sessionDuration: "5 Saat 55 dk",
    },
    // Other example data...
  ];

  const [data, setData] = useState<ConnectionData[]>(initialData);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Sort the data
  const handleSort = (field: keyof ConnectionData) => {
    let direction: "asc" | "desc" | null = null;
    if (sortField === field) {
      // Toggle between asc, desc, and null (unsorted)
      direction =
        sortDirection === "asc"
          ? "desc"
          : sortDirection === "desc"
          ? null
          : "asc";
    } else {
      direction = "asc"; // Default to ascending if sorting a new field
    }

    if (!direction) {
      // Reset to the original unsorted state
      setData(initialData);
    } else {
      const sortedData = [...data];
      sortedData.sort((a, b) => {
        if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
        if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
        return 0;
      });
      setData(sortedData);
    }

    setSortField(field);
    setSortDirection(direction);
  };

  // Pagination logic
  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-left text-sm leading-normal">
              {[
                { label: "ID", field: "id" },
                { label: "Açıklama", field: "explanation" },
                { label: "Ad", field: "firstName" },
                { label: "Soyad", field: "lastName" },
                { label: "Mac Address", field: "macAddress" },
                { label: "Bağlantı Türü", field: "connectionType" },
                { label: "Cihaz", field: "device" },
                { label: "Limit", field: "limit" },
                { label: "İndirme", field: "download" },
                { label: "Yükleme", field: "upload" },
                { label: "Çalışma Süresi", field: "sessionDuration" },
              ].map(({ label, field }) => (
                <th
                  key={field}
                  className="py-3 px-6 cursor-pointer"
                  onClick={() => handleSort(field as keyof ConnectionData)}
                >
                  <div className="flex items-center justify-between">
                    {label}
                    {sortField === field ? (
                      sortDirection === "asc" ? (
                        <FaSortUp className="ml-2" />
                      ) : sortDirection === "desc" ? (
                        <FaSortDown className="ml-2" />
                      ) : (
                        <FaSort className="ml-2" />
                      )
                    ) : (
                      <FaSort className="ml-2" />
                    )}
                  </div>
                </th>
              ))}
              <th className="py-3 px-6">İşlemler</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{item.id}</td>
                <td className="py-3 px-6">{item.explanation}</td>
                <td className="py-3 px-6">{item.firstName}</td>
                <td className="py-3 px-6">{item.lastName}</td>
                <td className="py-3 px-6">{item.macAddress}</td>
                <td className="py-3 px-6">{item.connectionType}</td>
                <td className="py-3 px-6">{item.device}</td>
                <td className="py-3 px-6">{item.limit}</td>
                <td className="py-3 px-6">{item.download}</td>
                <td className="py-3 px-6">{item.upload}</td>
                <td className="py-3 px-6">{item.sessionDuration}</td>
                <td className="py-3 px-6">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Records Per Page */}
      <div className="flex flex-col sm:flex-row justify-between w-full mt-4">
        <div className="flex items-center">
          <select
            className="border border-gray-300 rounded-md p-2 mr-4"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <span className="text-gray-600">Toplam Kayıt: {data.length}</span>
        </div>

        {/* Page navigation buttons */}
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <button
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-200"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            ←
          </button>
          <span className="p-2">
            {currentPage}/{totalPages}
          </span>
          <button
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-200"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionDetailsTable;
