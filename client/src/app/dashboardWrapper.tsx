import React from "react";
import NavBar from "@/components/NavBar"

const dashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* sidebar */}
      sidebar
      <main className="flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64">
        {/* navbar */}
        <NavBar />
        {children}
      </main>
    </div>
  );
};

export default dashboardWrapper;
