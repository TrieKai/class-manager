import { FC } from "react";
import { TabContainer, Tab, TabsHeader } from "./styles";
import { MoreButton } from "../MoreButton/MoreButton";

export interface TabItem {
  key: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  menuItems?: { label: string; onClick: () => void }[];
}

export const Tabs: FC<TabsProps> = ({
  items,
  activeKey,
  onChange,
  menuItems,
}) => {
  return (
    <TabsHeader>
      <TabContainer>
        {items.map((item) => (
          <Tab
            key={item.key}
            active={activeKey === item.key}
            onClick={() => onChange(item.key)}
          >
            {item.label}
          </Tab>
        ))}
      </TabContainer>
      {menuItems && <MoreButton items={menuItems} />}
    </TabsHeader>
  );
};
