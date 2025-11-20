import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function MyProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4000/api/profiles", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      setProfiles(data.data || []);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (profileId, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(
        `http://localhost:4000/api/profiles/${profileId}/toggle-status`,
        {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setProfiles(
        profiles.map((p) =>
          p.id === profileId ? { ...p, isActive: !currentStatus } : p
        )
      );
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  };

  const handleDeleteProfile = async (profileId) => {
    if (!window.confirm("Are you sure you want to delete this profile?")) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:4000/api/profiles/${profileId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      setProfiles(profiles.filter((p) => p.id !== profileId));
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  const handleShare = async (profile) => {
    const shareUrl = `${window.location.origin}/u/${profile.slug}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: profile.name,
          text: profile.bio,
          url: shareUrl,
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  };

  const filteredProfiles = profiles.filter((profile) => {
    if (filter === "all") return true;
    if (filter === "personal") return profile.profileType === "personal";
    if (filter === "business") return profile.profileType === "business";
    if (filter === "active") return profile.isActive;
    if (filter === "inactive") return !profile.isActive;
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">My Profiles</h1>
          <p className="text-gray-600 mt-1">
            Manage all your smart card profiles
          </p>
        </div>
        <Link to="/create-card" className="btn-primary-clean px-6 py-3">
          ➕ Create New Profile
        </Link>
      </div>

      <div className="card-glass p-4">
        <div className="flex flex-wrap gap-2">
          {[
            { value: "all", label: "All" },
            { value: "personal", label: "Personal" },
            { value: "business", label: "Business" },
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === item.value
                  ? "bg-brand-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {filteredProfiles.length === 0 ? (
        <div className="card-glass p-12 text-center">
          <div className="text-6xl mb-4">🎴</div>
          <h3 className="text-xl font-semibold text-brand-dark mb-2">
            No profiles found
          </h3>
          <p className="text-gray-600 mb-6">
            {filter === "all"
              ? "Create your first smart card to get started"
              : `No ${filter} profiles found`}
          </p>
          <Link to="/create-card" className="btn-primary-clean px-6 py-3">
            Create Profile
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <div key={profile.id} className="card-glass p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
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
                  <div>
                    <h3 className="font-semibold text-brand-dark">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-gray-600">{profile.title}</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    profile.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {profile.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">
                {profile.bio}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span>👁️</span>
                  <span>{profile.viewCount} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🔗</span>
                  <span>{profile.socialLinks?.length || 0} links</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to={`/dashboard/profiles/${profile.id}`}
                  className="flex-1 btn-ghost-clean py-2 text-sm"
                >
                  ✏️ Edit
                </Link>
                <Link
                  to={`/u/${profile.slug}`}
                  target="_blank"
                  className="flex-1 btn-primary-clean py-2 text-sm"
                >
                  👁️ View
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(profile)}
                  className="flex-1 btn-ghost-clean py-2 text-sm"
                >
                  📤 Share
                </button>
                <button
                  onClick={() =>
                    handleToggleStatus(profile.id, profile.isActive)
                  }
                  className="flex-1 btn-ghost-clean py-2 text-sm"
                >
                  {profile.isActive ? "🚫 Deactivate" : "✅ Activate"}
                </button>
              </div>

              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="w-full btn-ghost-clean py-2 text-sm text-red-600 hover:bg-red-50"
              >
                🗑️ Delete Profile
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
