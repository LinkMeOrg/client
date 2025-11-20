import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DashboardOverview() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");

      const [summaryRes, profilesRes] = await Promise.all([
        fetch("http://localhost:4000/api/dashboard/summary", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("http://localhost:4000/api/profiles", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const summaryData = await summaryRes.json();
      const profilesData = await profilesRes.json();

      setStats(summaryData.data);
      setProfiles(profilesData.data || []);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's your overview
          </p>
        </div>
        <Link
          to="/create-card"
          className="btn-primary-clean px-6 py-3 flex items-center gap-2"
        >
          <span>➕</span>
          <span>Create Profile</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card-glass p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-2xl">
              👤
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Profiles</p>
              <p className="text-2xl font-bold text-brand-dark">
                {stats?.totalProfiles || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="card-glass p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
              👁️
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-2xl font-bold text-brand-dark">
                {stats?.totalViews || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="card-glass p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
              👆
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Clicks</p>
              <p className="text-2xl font-bold text-brand-dark">
                {stats?.totalClicks || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="card-glass p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
              ✅
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Profiles</p>
              <p className="text-2xl font-bold text-brand-dark">
                {stats?.activeProfiles || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-glass p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-brand-dark">Your Profiles</h2>
          <Link
            to="/dashboard/profiles"
            className="text-sm text-brand-primary hover:underline"
          >
            View all →
          </Link>
        </div>

        {profiles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎴</div>
            <h3 className="text-xl font-semibold text-brand-dark mb-2">
              No profiles yet
            </h3>
            <p className="text-gray-600 mb-6">
              Create your first smart card to get started
            </p>
            <Link to="/create-card" className="btn-primary-clean px-6 py-3">
              Create Profile
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profiles.slice(0, 4).map((profile) => (
              <Link
                key={profile.id}
                to={`/dashboard/profiles/${profile.id}`}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className={`w-16 h-16 object-cover ${
                        profile.profileType === "personal"
                          ? "rounded-full"
                          : "rounded-lg"
                      }`}
                    />
                  ) : (
                    <div
                      className={`w-16 h-16 bg-gray-200 flex items-center justify-center text-2xl ${
                        profile.profileType === "personal"
                          ? "rounded-full"
                          : "rounded-lg"
                      }`}
                    >
                      {profile.profileType === "personal" ? "👤" : "🏢"}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-brand-dark">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-gray-600">{profile.title}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                        {profile.profileType}
                      </span>
                      <span className="text-xs text-gray-500">
                        {profile.viewCount} views
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {stats?.profiles && stats.profiles.length > 0 && (
        <div className="card-glass p-6">
          <h2 className="text-xl font-bold text-brand-dark mb-6">
            Profile Performance
          </h2>
          <div className="space-y-4">
            {stats.profiles.map((profile) => (
              <div
                key={profile.id}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    {profile.type === "personal" ? "👤" : "🏢"}
                  </div>
                  <div>
                    <p className="font-medium text-brand-dark">
                      {profile.name}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {profile.type}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-brand-dark">
                    {profile.views}
                  </p>
                  <p className="text-xs text-gray-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
