type Props = {
  message: string;
  onClose: () => void;
};

export function SuccessModal({ message, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-panel">
        <p className="text-sm font-semibold text-slate-700">Notice</p>
        <p className="mt-2 text-base text-slate-800">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white"
        >
          OK
        </button>
      </div>
    </div>
  );
}
