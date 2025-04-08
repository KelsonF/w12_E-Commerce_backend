function FlexContainer({ children }: { children: React.ReactNode }) {
    return (
       <div className="flex flex-col items-center justify-center p-4">
        {children}
      </div>
    );
  }
  export { FlexContainer };
  