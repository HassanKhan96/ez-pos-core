import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import { CalendarOutlined } from "@ant-design/icons";
import { DatePicker, Space, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ScreenPanel } from "@/components/ui/ScreenPanel";
import { formatMoney, todayISODate } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";

export function OrderHistoryScreen() {
  const orders = usePosStore((state) => state.orders);
  const loadOrdersForDate = usePosStore((state) => state.loadOrdersForDate);

  const [fromDate, setFromDate] = useState(todayISODate());
  const [toDate, setToDate] = useState(todayISODate());

  useEffect(() => {
    const fromISO = `${fromDate}T00:00:00.000Z`;
    const toISO = `${toDate}T23:59:59.999Z`;
    void loadOrdersForDate(fromISO, toISO);
  }, [fromDate, loadOrdersForDate, toDate]);

  const columns = useMemo<ColumnsType<(typeof orders)[number]>>(
    () => [
      {
        title: "Order",
        dataIndex: "orderNumber",
        render: (value: number) => <Tag color="geekblue">#{value}</Tag>,
        width: 110
      },
      {
        title: "Created",
        dataIndex: "createdAt",
        render: (value: string) => dayjs(value).format("DD MMM YYYY, HH:mm")
      },
      {
        title: "Subtotal",
        dataIndex: "subtotal",
        align: "right",
        render: (value: number) => formatMoney(value)
      },
      {
        title: "Discount",
        dataIndex: "discount",
        align: "right",
        render: (value: number) => <Typography.Text type="danger">- {formatMoney(value)}</Typography.Text>
      },
      {
        title: "Total",
        dataIndex: "total",
        align: "right",
        render: (value: number) => <Typography.Text strong>{formatMoney(value)}</Typography.Text>
      }
    ],
    [orders]
  );

  return (
    <ScreenPanel
      title="Order History"
      subtitle="Track transactions by date range"
      className="screen-panel"
      extra={
        <Space size={8}>
          <Space size={6}>
            <CalendarOutlined />
            <DatePicker value={dayjs(fromDate)} onChange={(date) => setFromDate(date?.format("YYYY-MM-DD") ?? todayISODate())} />
          </Space>
          <DatePicker value={dayjs(toDate)} onChange={(date) => setToDate(date?.format("YYYY-MM-DD") ?? todayISODate())} />
        </Space>
      }
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={orders}
        size="middle"
        pagination={{ pageSize: 10, showSizeChanger: false }}
      />
    </ScreenPanel>
  );
}
