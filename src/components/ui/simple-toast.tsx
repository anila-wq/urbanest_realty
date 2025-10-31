import { useState, useEffect } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';

interface Toast {
  id: string;
  type: 'success' | 'error';
  message: string;
}

let toasts: Toast[] = [];
let listeners: Array<(toasts: Toast[]) => void> = [];

export const toast = {
  success: (message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    toasts = [...toasts, { id, type: 'success', message }];
    listeners.forEach(listener => listener(toasts));
    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      listeners.forEach(listener => listener(toasts));
    }, 3000);
  },
  error: (message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    toasts = [...toasts, { id, type: 'error', message }];
    listeners.forEach(listener => listener(toasts));
    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      listeners.forEach(listener => listener(toasts));
    }, 3000);
  },
};

export function Toaster() {
  const [currentToasts, setCurrentToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (newToasts: Toast[]) => {
      setCurrentToasts(newToasts);
    };
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  const removeToast = (id: string) => {
    toasts = toasts.filter(t => t.id !== id);
    listeners.forEach(listener => listener(toasts));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-md">
      {currentToasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 p-4 rounded-lg shadow-lg border ${
            toast.type === 'success'
              ? 'bg-gray-900 border-green-700 text-white'
              : 'bg-gray-900 border-red-700 text-white'
          } animate-in slide-in-from-right`}
        >
          {toast.type === 'success' ? (
            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
          ) : (
            <XCircle className="h-5 w-5 text-red-500 shrink-0" />
          )}
          <p className="flex-1 text-sm">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
