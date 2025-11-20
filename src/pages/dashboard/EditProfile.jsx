import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function EditProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState(null);
  const [socialLinks, setSocialLinks] = useState([]);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    fetchProfile();
    fetchSocialLinks();
  }, [id]);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:4000/api/profiles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      setProfile(data.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSocialLinks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:4000/api/social-links/profile/${id}?includeHidden=true`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();
      setSocialLinks(data.data || []);
    } catch (error) {
      console.error("Error fetching social links:", error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      formData.append("name", profile.name);
      formData.append("title", profile.title || "");
      formData.append("bio", profile.bio || "");
      formData.append("color", profile.color);
      formData.append("template", profile.template);

      if (profile.avatarFile) {
        formData.append("avatar", profile.avatarFile);
      }

      const response = await fetch(`http://localhost:4000/api/profiles/${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Profile updated successfully!");
        fetchProfile();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    } finally {
      setSaving(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setProfile({ ...profile, avatarUrl: url, avatarFile: file });
  };

  const handleAddSocialLink = async (platform, url) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4000/api/social-links", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profileId: id,
          platform,
          url,
        }),
      });

      if (response.ok) {
        fetchSocialLinks();
      }
    } catch (error) {
      console.error("Error adding social link:", error);
    }
  };

  const handleDeleteSocialLink = async (linkId) => {
    if (!window.confirm("Delete this social link?")) return;

    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:4000/api/social-links/${linkId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      setSocialLinks(socialLinks.filter((link) => link.id !== linkId));
    } catch (error) {
      console.error("Error deleting social link:", error);
    }
  };

  const handleToggleLinkVisibility = async (linkId) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(
        `http://localhost:4000/api/social-links/${linkId}/toggle-visibility`,
        {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSocialLinks(
        socialLinks.map((link) =>
          link.id === linkId ? { ...link, isVisible: !link.isVisible } : link
        )
      );
    } catch (error) {
      console.error("Error toggling visibility:", error);
    }
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qr-code");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `${profile.slug}-qr-code.png`;
    link.href = url;
    link.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Profile not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/dashboard/profiles")}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          ← Back
        </button>
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Edit Profile</h1>
          <p className="text-gray-600 mt-1">{profile.name}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <form
            onSubmit={handleUpdateProfile}
            className="card-glass p-6 space-y-6"
          >
            <h2 className="text-xl font-bold text-brand-dark">
              Basic Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image
                </label>
                <div className="flex items-center gap-4">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className={`w-20 h-20 object-cover ${
                        profile.profileType === "personal"
                          ? "rounded-full"
                          : "rounded-lg"
                      }`}
                    />
                  ) : (
                    <div
                      className={`w-20 h-20 bg-gray-200 flex items-center justify-center text-3xl ${
                        profile.profileType === "personal"
                          ? "rounded-full"
                          : "rounded-lg"
                      }`}
                    >
                      {profile.profileType === "personal" ? "👤" : "🏢"}
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title / Role
                </label>
                <input
                  type="text"
                  value={profile.title || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, title: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  rows={4}
                  value={profile.bio || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color
                </label>
                <input
                  type="color"
                  value={profile.color}
                  onChange={(e) =>
                    setProfile({ ...profile, color: e.target.value })
                  }
                  className="h-12 w-24 rounded-lg border border-gray-300 cursor-pointer"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="btn-primary-clean w-full py-3 disabled:opacity-50"
            >
              {saving ? "Saving..." : "💾 Save Changes"}
            </button>
          </form>

          <div className="card-glass p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-brand-dark">
                Social Links
              </h2>
              <button
                onClick={() => {
                  const platform = prompt("Platform (e.g., linkedin, github):");
                  const url = prompt("URL:");
                  if (platform && url) {
                    handleAddSocialLink(platform, url);
                  }
                }}
                className="btn-ghost-clean px-4 py-2 text-sm"
              >
                ➕ Add Link
              </button>
            </div>

            {socialLinks.length === 0 ? (
              <p className="text-gray-600 text-center py-4">
                No social links added yet
              </p>
            ) : (
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <div
                    key={link.id}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-brand-dark capitalize">
                        {link.platform}
                      </p>
                      <p className="text-sm text-gray-600 truncate">
                        {link.url}
                      </p>
                    </div>
                    <button
                      onClick={() => handleToggleLinkVisibility(link.id)}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        link.isVisible
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {link.isVisible ? "👁️" : "🚫"}
                    </button>
                    <button
                      onClick={() => handleDeleteSocialLink(link.id)}
                      className="px-3 py-1 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100"
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-glass p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">
              Profile Preview
            </h2>
            <div className="text-center">
              <QRCodeCanvas
                id="qr-code"
                value={profile.profileUrl}
                size={200}
              />
              <button
                onClick={downloadQR}
                className="mt-4 btn-ghost-clean w-full py-2 text-sm"
              >
                📥 Download QR
              </button>
            </div>
            <div className="space-y-2">
              <a
                href={`/u/${profile.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-primary-clean w-full py-2 text-sm text-center"
              >
                👁️ View Public Profile
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(profile.profileUrl);
                  alert("Link copied!");
                }}
                className="w-full btn-ghost-clean py-2 text-sm"
              >
                📋 Copy Link
              </button>
            </div>
          </div>

          <div className="card-glass p-6 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark">Stats</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Views</span>
                <span className="font-bold text-brand-dark">
                  {profile.viewCount || 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Social Links</span>
                <span className="font-bold text-brand-dark">
                  {socialLinks.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Status</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
