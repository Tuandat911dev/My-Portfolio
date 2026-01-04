interface IProps {
  btnIcons?: React.ReactNode;
  btnText?: string;
  btnStyle?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
}

const ResizeButton = (props: IProps) => {
  const { btnStyle, onClick, children, btnText, btnIcons } = props;

  return (
    <span className="resize-button" style={btnStyle} onClick={onClick}>
      {children === undefined ? (
        <>
          <span style={{ textTransform: "uppercase" }}>{btnText}</span>
          {btnIcons}
        </>
      ) : (
        children
      )}
    </span>
  );
};

export default ResizeButton;
