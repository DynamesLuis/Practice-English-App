import toast from "react-hot-toast";

export const notify = {
  created: (entity) =>
    toast.success(`${entity} created successfully`),

  updated: (entity) =>
    toast.success(`${entity} updated successfully`, {
      icon: "✏️",
    }),

  deleted: (entity) =>
    toast.success(`${entity} deleted successfully`, {
      icon: "🗑️",
    }),

  error: (message) =>
    toast.error(message, {
      style: {
        border: "2px solid #ef4444",
      },
    }),
};