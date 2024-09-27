"use client";
import React, { useState, useEffect } from "react";
import CircleProgress from "../components/CircleProgress";
import ConnectionTable from "@/components/ConnectionTable";
import ConnectionDetailsTable from "@/components/ConnectionDetailsTable";

const HomePage = () => {
  const [memoryUsage, setMemoryUsage] = useState(65); // Rastgele veri (örneğin %65)
  const [diskUsage, setDiskUsage] = useState(75); // Rastgele veri (örneğin %75)

  useEffect(() => {
    // Burada bir backend ya da database API'sinden veri çekebilirsin.
    // setMemoryUsage ile dinamik veri güncellemesi yapılabilir.
  }, []);

  return (
    <div
      style={{
        justifyContent: "space-around",
        marginTop: "50px",
      }}
    >
      {/* <CircleProgress percentage={memoryUsage} label="Memory Usage" />
      <CircleProgress percentage={diskUsage} label="Disk Usage" />
      <div>
        <ConnectionTable />
      </div> */}
      <div>
        <h1 className="text-2xl font-bold text-center mt-8">
          Bağlantı Detayları
        </h1>
        <ConnectionDetailsTable />
      </div>
    </div>
  );
};

export default HomePage;
