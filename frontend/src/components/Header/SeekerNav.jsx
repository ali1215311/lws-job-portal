const SeekerNav = () => {
  return (
    <>
      <nav className="hidden items-center gap-6 md:flex">
        <a
          href="../index.html"
          className="text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]"
        >
          Jobs
        </a>
        <a
          href="user-dashboard.html"
          className="text-sm font-medium text-[hsl(var(--color-primary))] transition-colors"
        >
          Dashboard
        </a>
        <a
          href="applied-jobs.html"
          className="text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]"
        >
          My Applications
        </a>
      </nav>
    </>
  );
};

export default SeekerNav;
