const SocialButtons = () => {
  const handleGoogleClick = () => alert("Sign in with Google clicked!");
  const handleFacebookClick = () => alert("Sign in with Facebook clicked!");

  /* ─── SVG Icons ─── */
  const GoogleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.61z" fill="#4285F4"/>
      <path d="M9 18a8.59 8.59 0 0 0 5.96-2.18l-2.92-2.26a5.43 5.43 0 0 1-8.05-2.85H.96v2.33A9 9 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.99 10.71a5.36 5.36 0 0 1 0-3.42V4.96H.96a9.01 9.01 0 0 0 0 8.08l3.03-2.33z" fill="#FBBC05"/>
      <path d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58A8.58 8.58 0 0 0 9 0 9 9 0 0 0 .96 4.96l3.03 2.33A5.36 5.36 0 0 1 9 3.58z" fill="#EA4335"/>
    </svg>
  );

  const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M18 9.05C18 4.05 13.95 0 9 0S0 4.05 0 9.05C0 13.55 3.28 17.3 7.59 18v-6.2H5.31V9.05h2.28V7.06c0-2.25 1.34-3.5 3.4-3.5.98 0 2.01.18 2.01.18v2.21h-1.13c-1.12 0-1.47.69-1.47 1.4v1.7h2.5l-.4 2.75h-2.1V18C14.72 17.3 18 13.55 18 9.05z" fill="#1877F2"/>
    </svg>
  );

  const buttons = [
    {
      provider: "Google",
      fullText: "Sign in with Google",
      Icon: GoogleIcon,
      onClick: handleGoogleClick,
    },
    {
      provider: "Facebook",
      fullText: "Sign in with Facebook",
      Icon: FacebookIcon,
      onClick: handleFacebookClick,
    },
  ];

  return (
    <div className="space-y-3 w-full">
      {buttons.map(({ provider, fullText, Icon, onClick }) => (
        <button
          key={provider}
          type="button"
          onClick={onClick}
          className="flex items-center justify-center gap-3 w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 
                     text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 
                     transition-all active:scale-[0.985]"
          aria-label={fullText}
        >
          <Icon />
          <span className="hidden lg:inline">{fullText}</span>
          <span className="lg:hidden font-medium">{provider}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialButtons;