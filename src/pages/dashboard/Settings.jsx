import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4000/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      setUser(data.data || data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:4000/api/user/profile", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        }),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile");
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    }

    setSaving(true);

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:4000/api/user/change-password",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentPassword: passwordData.currentPassword,
            newPassword: passwordData.newPassword,
          }),
        }
      );

      if (response.ok) {
        alert("Password changed successfully!");
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        const data = await response.json();
        alert(data.message || "Error changing password");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Error changing password");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone!"
      )
    ) {
      return;
    }

    if (
      !window.confirm(
        "This will permanently delete all your profiles and data. Are you absolutely sure?"
      )
    ) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await fetch("http://localhost:4000/api/user/delete", {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("Error deleting account");
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
      <div>
        <h1 className="text-3xl font-bold text-brand-dark">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account settings</p>
      </div>

      <form onSubmit={handleUpdateProfile} className="card-glass p-6 space-y-6">
        <h2 className="text-xl font-bold text-brand-dark">
          Account Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={user?.firstName || ""}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              value={user?.lastName || ""}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={user?.phoneNumber || ""}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="btn-primary-clean px-6 py-3 disabled:opacity-50"
        >
          {saving ? "Saving..." : "💾 Save Changes"}
        </button>
      </form>

      <form
        onSubmit={handleChangePassword}
        className="card-glass p-6 space-y-6"
      >
        <h2 className="text-xl font-bold text-brand-dark">Change Password</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            value={passwordData.currentPassword}
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                currentPassword: e.target.value,
              })
            }
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            value={passwordData.newPassword}
            onChange={(e) =>
              setPasswordData({ ...passwordData, newPassword: e.target.value })
            }
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            value={passwordData.confirmPassword}
            onChange={(e) =>
              setPasswordData({
                ...passwordData,
                confirmPassword: e.target.value,
              })
            }
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/40"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="btn-primary-clean px-6 py-3 disabled:opacity-50"
        >
          {saving ? "Changing..." : "🔒 Change Password"}
        </button>
      </form>

      <div className="card-glass p-6 space-y-4 border-2 border-red-200">
        <h2 className="text-xl font-bold text-red-600">Danger Zone</h2>
        <p className="text-gray-600">
          Once you delete your account, there is no going back. All your
          profiles and data will be permanently deleted.
        </p>
        <button
          onClick={handleDeleteAccount}
          className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
        >
          🗑️ Delete Account
        </button>
      </div>
    </div>
  );
}
