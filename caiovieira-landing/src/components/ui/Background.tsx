export function Background() {
  {
    /* Animated Background */
  }
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-pink-600 bg-size[400%_400%] animate-gradient opacity-20" />
      <div className="absolute inset-0 bg-slate-950" />
    </div>
  );
}
