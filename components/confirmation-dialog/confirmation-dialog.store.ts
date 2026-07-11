import { create } from 'zustand';

interface ConfirmationDialogState {
    isOpen: boolean;
    title: string;
    resolve: ((value: boolean) => void) | null;

    openDialog: (title: string, resolve: (value: boolean) => void) => void;
    closeDialog: (confirm: boolean) => void;
}

export const useConfirmationDialogStore = create<ConfirmationDialogState>((set) => ({
    isOpen: false,
    title: '',
    resolve: null,

    openDialog: (title, resolve) =>
        set({
            isOpen: true,
            title,
            resolve,
        }),

    closeDialog: (confirm: boolean) => {
        const { resolve } = useConfirmationDialogStore.getState();
        
        if (resolve) {
            resolve(confirm);
        }
        
        set({
            isOpen: false,
            title: '',
            resolve: null,
        })
    }
}));

export function getConfirmation(title: string = "Are you sure?"): Promise<boolean> {
    const { openDialog } = useConfirmationDialogStore.getState();

    return new Promise((resolve) => {
        openDialog(title, resolve);
    });
}