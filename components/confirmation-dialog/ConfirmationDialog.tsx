"use client";

import { useConfirmationDialogStore } from "./confirmation-dialog.store";

export default function ConfirmationDialog() {
    const { isOpen, title, closeDialog } = useConfirmationDialogStore();

    if (!isOpen) return null;

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-black/50 fixed top-0 right-0">
            <div className="flex flex-col justify-start items-stretch bg-card p-4 rounded-md gap-4">
                <p className="text-lg font-bold">{ title }</p>
                <div className="flex gap-4 mt-4">
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex-1 cursor-pointer" onClick={() => closeDialog(true)}>
                        Yes
                    </button>
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors flex-1 cursor-pointer" onClick={() => closeDialog(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}