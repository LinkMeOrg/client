import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

export default function PublicProfile() {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, [slug]);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/profiles/public/${slug}`
      );

      if (!response.ok) {
        throw new Error("Profile not found");
      }

      const data = await response.json();
      setProfile(data.data);
      await trackView();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const trackView = async () => {
    try {
      await fetch(`http://localhost:4000/api/analytics/track-view/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "link" }),
      });
    } catch (err) {
      console.error("Error tracking view:", err);
    }
  };

  const handleSocialClick = async (linkId, url) => {
    try {
      await fetch(`http://localhost:4000/api/social-links/${linkId}/click`, {
        method: "POST",
      });
    } catch (err) {
      console.error("Error tracking click:", err);
    }
    window.open(url, "_blank");
  };

  const handleShare = async (method) => {
    const shareUrl = window.location.href;
    const shareText = `Check out ${profile.name}'s profile on LinkMe`;

    if (method === "native" && navigator.share) {
      try {
        await navigator.share({
          title: profile.name,
          text: shareText,
          url: shareUrl,
        });
      } catch (error) {
        console.log("Share cancelled");
      }
    } else if (method === "copy") {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    } else if (method === "whatsapp") {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`
      );
    } else if (method === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(shareUrl)}`
      );
    } else if (method === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`
      );
    } else if (method === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`
      );
    }

    setShowShareModal(false);
  };

  const handleDownloadQR = () => {
    const canvas = document.getElementById("profile-qr");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `${profile.slug}-qr-code.png`;
    link.href = url;
    link.click();
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsApp = (number) => {
    const cleanNumber = number.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanNumber}`);
  };

  const getPlatformIcon = (platform) => {
    const icons = {
      website: "🌐",
      linkedin: "💼",
      instagram: "📸",
      twitter: "🐦",
      github: "💻",
      whatsapp: "💬",
      email: "📧",
      phone: "📱",
    };
    return icons[platform] || "🔗";
  };

  const getTemplateClass = () => {
    if (profile.aiBackground) {
      return "";
    }

    const templates = {
      gradient:
        "bg-gradient-to-br from-brand-primary/90 via-[#0B0F19] to-[#16203A]",
      glass: "bg-white/80 backdrop-blur-lg",
      dark: "bg-brand-dark",
      modern: "bg-brand-primary",
    };
    return templates[profile.template] || templates.modern;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl mb-4">😕</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Profile Not Found
          </h2>
          <p className="text-gray-600">
            This profile doesn't exist or has been deactivated
          </p>
        </div>
      </div>
    );
  }

  const phoneLink = profile.socialLinks?.find((l) => l.platform === "phone");
  const emailLink = profile.socialLinks?.find((l) => l.platform === "email");
  const whatsappLink = profile.socialLinks?.find(
    (l) => l.platform === "whatsapp"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className={`relative  h-48 md:h-64 ${getTemplateClass()}`}
        style={
          profile.aiBackground
            ? {
                backgroundImage: `url(${profile.aiBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <button
          onClick={() => setShowShareModal(true)}
          className="absolute top-4 right-4 bg-white text-brand-dark px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 z-10"
        >
          <span>📤</span>
          <span className="font-medium">Share</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-16 md:-mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {profile.avatarUrl ? (
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className={`w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-white shadow-lg -mt-16 md:-mt-20 lg:mt-1 ${
                    profile.profileType === "personal"
                      ? "rounded-full"
                      : "rounded-2xl"
                  }`}
                />
              ) : (
                <div
                  className={`w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-5xl bg-gray-100 border-4 border-white shadow-lg -mt-16 md:-mt-20 ${
                    profile.profileType === "personal"
                      ? "rounded-full"
                      : "rounded-2xl"
                  }`}
                >
                  {profile.profileType === "personal" ? "👤" : "🏢"}
                </div>
              )}

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
                  {profile.name}
                </h1>
                {profile.title && (
                  <p className="text-lg md:text-xl text-gray-600 mb-3">
                    {profile.title}
                  </p>
                )}
                <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium">
                    {profile.profileType === "personal"
                      ? "Personal"
                      : "Business"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                    {profile.viewCount || 0} views
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="bg-white p-4 rounded-xl shadow-lg border-2 border-gray-100">
                  <QRCodeCanvas
                    id="profile-qr"
                    value={profile.profileUrl}
                    size={100}
                  />
                  <button
                    onClick={handleDownloadQR}
                    className="mt-2 text-xs text-brand-primary hover:underline w-full text-center"
                  >
                    Download QR
                  </button>
                </div>
              </div>
            </div>
          </div>

          {profile.bio && (
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-brand-dark mb-3">
                  About
                </h2>
                <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              </div>
            </div>
          )}

          {(phoneLink || emailLink || whatsappLink) && (
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-brand-dark mb-4">
                  Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {phoneLink && (
                    <button
                      onClick={() => handleCall(phoneLink.url)}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-brand-primary hover:bg-brand-primary/5 transition-all"
                    >
                      <span className="text-2xl">📞</span>
                      <span className="font-medium">Call</span>
                    </button>
                  )}
                  {whatsappLink && (
                    <button
                      onClick={() => handleWhatsApp(whatsappLink.url)}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all"
                    >
                      <span className="text-2xl">💬</span>
                      <span className="font-medium">WhatsApp</span>
                    </button>
                  )}
                  {emailLink && (
                    <button
                      onClick={() => handleEmail(emailLink.url)}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
                    >
                      <span className="text-2xl">📧</span>
                      <span className="font-medium">Email</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {profile.socialLinks && profile.socialLinks.length > 0 && (
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-brand-dark mb-4">
                  Connect
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {profile.socialLinks
                    .filter(
                      (link) =>
                        link.platform !== "phone" &&
                        link.platform !== "email" &&
                        link.platform !== "whatsapp"
                    )
                    .map((link) => (
                      <button
                        key={link.id}
                        onClick={() => handleSocialClick(link.id, link.url)}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-brand-primary hover:shadow-md transition-all group"
                      >
                        <div className="text-3xl">
                          {getPlatformIcon(link.platform)}
                        </div>
                        <div className="flex-1 text-left">
                          <p className="font-medium text-brand-dark capitalize group-hover:text-brand-primary transition-colors">
                            {link.label ||
                              link.platform.charAt(0).toUpperCase() +
                                link.platform.slice(1)}
                          </p>
                          {/* <p className="text-xs text-gray-500 truncate">
                            {link.url}
                          </p> */}
                        </div>
                        <span className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 mb-8">
          <p className="text-gray-600 text-sm">
            Powered by{" "}
            <a
              href="/"
              className="text-brand-primary font-semibold hover:underline"
            >
              Dot LinkMe
            </a>
          </p>
        </div>
      </div>

      {showShareModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Share Profile
            </h3>
            <div className="space-y-3">
              {navigator.share && (
                <button
                  onClick={() => handleShare("native")}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                >
                  <span className="text-2xl">📤</span>
                  <span className="font-medium">Share via...</span>
                </button>
              )}
              <button
                onClick={() => handleShare("copy")}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
              >
                <span className="text-2xl">📋</span>
                <span className="font-medium">Copy Link</span>
              </button>
              <button
                onClick={() => handleShare("whatsapp")}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
              >
                <span className="text-2xl">💬</span>
                <span className="font-medium">WhatsApp</span>
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
              >
                <span className="text-2xl">📘</span>
                <span className="font-medium">Facebook</span>
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
              >
                <span className="text-2xl">🐦</span>
                <span className="font-medium">Twitter</span>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
              >
                <span className="text-2xl">💼</span>
                <span className="font-medium">LinkedIn</span>
              </button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full mt-4 px-4 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition-all font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
