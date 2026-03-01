export function formatMoney(amount: number): string {
  return `Rs ${amount.toLocaleString("en-PK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
}

export function todayISODate(): string {
  return new Date().toISOString().slice(0, 10);
}
