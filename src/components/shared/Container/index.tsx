function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      {children}
    </div>
  );
}
export { Container };
