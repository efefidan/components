import React, { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { FaTrash } from 'react-icons/fa';


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
  const [data, setData] = useState<ConnectionData[]>([
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
    // Daha fazla örnek veri eklenebilir...
  ]);

  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof ConnectionData) => {
    const direction = sortField === field && sortDirection === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortField(field);
    setSortDirection(direction);
    setData(sortedData);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white text-left text-sm leading-normal">
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("id")}>
                ID {sortField === "id" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("explanation")}>
                Açıklama {sortField === "explanation" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("firstName")}>
                Ad {sortField === "firstName" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("lastName")}>
                Soyad {sortField === "lastName" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("macAddress")}>
                Mac Address {sortField === "macAddress" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("connectionType")}>
                Bağlantı Türü {sortField === "connectionType" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("device")}>
                Cihaz {sortField === "device" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("limit")}>
                Limit {sortField === "limit" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("download")}>
                İndirme {sortField === "download" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("upload")}>
                Yükleme {sortField === "upload" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("sessionDuration")}>
                Çalışma Süresi {sortField === "sessionDuration" && (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />)}
              </th>
              <th className="py-3 px-6">İşlemler</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {data.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
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
                  <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sayfa ve Kayıt Seçenekleri */}
      <div className="flex flex-col sm:flex-row justify-between w-full mt-4">
        <div className="flex items-center">
          <select className="border border-gray-300 rounded-md p-2 mr-4">
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="text-gray-600">Toplam Kayıt: {data.length}</span>
        </div>

        {/* Sayfa geçiş butonları */}
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-200">←</button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-200">1</button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-200">→</button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionDetailsTable;
