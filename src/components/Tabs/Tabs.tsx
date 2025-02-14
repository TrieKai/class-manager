import { FC } from "react";
import { TabContainer, Tab } from "./styles";

export interface TabItem {
  key: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
}

export const Tabs: FC<TabsProps> = ({ items, activeKey, onChange }) => {
  return (
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
  );
};
