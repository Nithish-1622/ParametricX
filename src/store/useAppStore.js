import { create } from 'zustand'
import { notificationsSeed } from '../data/mockData'

const getNextTheme = () =>
  document.documentElement.classList.contains('light') ? 'light' : 'dark'

export const useAppStore = create((set, get) => ({
  theme: getNextTheme(),
  notificationsOpen: false,
  notifications: notificationsSeed,
  toasts: [],
  claimQueue: [],

  setInitialClaimQueue: (items) => set({ claimQueue: items }),

  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('light', next === 'light')
    set({ theme: next })
  },

  toggleNotifications: () => set((state) => ({ notificationsOpen: !state.notificationsOpen })),

  pushNotification: (payload) =>
    set((state) => ({
      notifications: [{ id: crypto.randomUUID(), ...payload }, ...state.notifications].slice(0, 8),
    })),

  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { id: crypto.randomUUID(), ...toast }],
    })),

  removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((item) => item.id !== id) })),

  updateClaimStatus: (claimId, status) =>
    set((state) => ({
      claimQueue: state.claimQueue.map((item) =>
        item.id === claimId ? { ...item, status } : item,
      ),
    })),
}))
