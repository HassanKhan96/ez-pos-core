import type { ReactNode } from "react";
import { Card, Space, Typography } from "antd";

type Props = {
  title: string;
  subtitle?: string;
  extra?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function ScreenPanel({ title, subtitle, extra, children, className }: Props) {
  return (
    <Card
      className={className}
      title={
        <Space direction="vertical" size={1} className="screen-panel-title">
          <Typography.Title level={4} style={{ margin: 0 }}>
            {title}
          </Typography.Title>
          {subtitle && (
            <Typography.Text type="secondary" style={{ fontSize: 13 }}>
              {subtitle}
            </Typography.Text>
          )}
        </Space>
      }
      extra={extra}
    >
      {children}
    </Card>
  );
}
