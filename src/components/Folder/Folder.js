import { useState } from "react";

const getStyle = (level) => ({
  paddingLeft: `${level * 10}px`,
});

const Folder = ({ folder: { name, children }, level = 1 }) => {
  const [open, setOpen] = useState(false);

  const onClick = (e) => {
    e.stopPropagation();
    setOpen((prevState) => !prevState);
  };

  return (
    <div key={name} onClick={onClick} style={{ cursor: "pointer" }}>
      {children?.length ? (open ? "- " : "+ ") : ""}
      {name}

      {open && (
        <div style={getStyle(level)}>
          {children?.map((folder, index) => (
            <Folder folder={folder} level={level + 1} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
