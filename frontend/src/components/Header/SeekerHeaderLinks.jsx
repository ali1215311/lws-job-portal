const SeekerHeaderLinks = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--color-secondary))]">
          <i
            data-lucide="user"
            className="h-4 w-4 text-[hsl(var(--color-primary))]"
          ></i>
        </div>
        <span className="hidden text-sm font-medium md:inline">John Doe</span>
      </div>
    </>
  );
};
export default SeekerHeaderLinks;
