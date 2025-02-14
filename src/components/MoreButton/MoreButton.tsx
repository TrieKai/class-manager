import { FC, useEffect, useRef, useState } from "react";
import { MoreVertical } from "lucide-react";
import { Button, Menu, MenuItem } from "./styles";

interface MoreButtonProps {
  items: {
    label: string;
    onClick: () => void;
  }[];
}

export const MoreButton: FC<MoreButtonProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (onClick: () => void) => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        <MoreVertical size={16} />
      </Button>
      {isOpen && (
        <Menu ref={menuRef}>
          {items.map((item, index) => (
            <MenuItem key={index} onClick={() => handleItemClick(item.onClick)}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
};
