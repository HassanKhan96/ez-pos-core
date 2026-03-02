import { useEffect, useMemo } from "react";
import { BarChartOutlined, RiseOutlined } from "@ant-design/icons";
import { Col, Row, Space, Statistic, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ScreenPanel } from "@/components/ui/ScreenPanel";
import { formatMoney } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";

export function SalesReportScreen() {
  const report = usePosStore((state) => state.report);
  const loadReportForDate = usePosStore((state) => state.loadReportForDate);

  useEffect(() => {
    void loadReportForDate(new Date().toISOString());
  }, [loadReportForDate]);

  const columns = useMemo<ColumnsType<{ productName: string; qtySold: number; revenue: number }>>(
    () => [
      {
        title: "Product",
        dataIndex: "productName"
      },
      {
        title: "Qty",
        dataIndex: "qtySold",
        align: "right",
        render: (value: number) => <Tag color="cyan">{value}</Tag>
      },
      {
        title: "Revenue",
        dataIndex: "revenue",
        align: "right",
        render: (value: number) => formatMoney(value)
      }
    ],
    []
  );

  return (
    <ScreenPanel
      title="Sales Analytics"
      subtitle="Daily and monthly trend highlights"
      className="screen-panel"
      extra={
        <Space>
          <Tag icon={<RiseOutlined />} color="green">
            Live snapshot
          </Tag>
        </Space>
      }
    >
      <Row gutter={[12, 12]} style={{ marginBottom: 12 }}>
        <Col xs={24} md={12}>
          <div className="metric-card">
            <Statistic title="Sales Today" value={report?.daySales ?? 0} formatter={(value) => formatMoney(Number(value ?? 0))} prefix={<BarChartOutlined />} />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="metric-card">
            <Statistic title="Sales This Month" value={report?.monthSales ?? 0} formatter={(value) => formatMoney(Number(value ?? 0))} prefix={<RiseOutlined />} />
          </div>
        </Col>
      </Row>

      <Table
        rowKey="productName"
        columns={columns}
        dataSource={report?.topProducts ?? []}
        pagination={false}
      />
    </ScreenPanel>
  );
}
