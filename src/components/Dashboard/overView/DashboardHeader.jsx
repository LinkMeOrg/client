import React from "react";
import { Hand } from "lucide-react";

export default function DashboardHeader({ userName }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-blue-600 bg-clip-text text-transparent flex items-center gap-2">
          Welcome back,
          <span className="text-brand-accent">{userName}!</span>
          <Hand className="w-8 h-8 text-brand-primary" />
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Here's what's happening with your profiles today
        </p>
      </div>
    </div>
  );
}
