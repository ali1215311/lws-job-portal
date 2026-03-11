const RecruiterNav = () => {
  return (
    <>
      <nav className="hidden items-center gap-6 md:flex">
        <a
          href="company-dashboard.html"
          className="text-sm font-medium text-[hsl(var(--color-primary))]"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]"
        >
          Manage Jobs
        </a>
        <a
          href="#"
          className="text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]"
        >
          Applicants
        </a>
      </nav>
    </>
  );
};

export default RecruiterNav;
