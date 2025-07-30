const ConfirmDeleteCard = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-gray-900 rounded-2xl shadow-xl w-[90%] max-w-sm p-6 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">Are you sure?</h2>
        <p className="text-white mb-6">Do you really want to delete this blog?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteCard;
