import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopbar from '../components/admin/AdminTopbar';

const Admin = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-grow ml-64 flex flex-col">
        <AdminTopbar title="Management Portal" />
        <main className="flex-grow bg-neutral-soft/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin;
