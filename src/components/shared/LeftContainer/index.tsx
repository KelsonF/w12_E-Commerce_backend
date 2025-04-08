function LeftContainer({ children }: { children: React.ReactNode }) {
    return (
       <div className="flex flex-col items-left justify-start gap-4 p-4">
        {children}
      </div>
    );
  }
  export { LeftContainer };
  