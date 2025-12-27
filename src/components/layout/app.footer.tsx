const AppFooter = () => {
  return (
    <footer className="text-center my-3">
      Copyright © {new Date().getFullYear()} Pham Tuan Dat. Made with{" "}
      <span
        style={{
          color: "#e25555",
        }}
      >
        ♥
      </span>{" "}
      in VietNam
    </footer>
  );
};

export default AppFooter;
