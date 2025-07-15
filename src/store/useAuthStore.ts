import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AuthState = {
  user: any;
  RemoveUser: () => void;
  setUser: (user: any) => void;
};

const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      user: {},
      RemoveUser: () => set(() => ({ user: {} })),
      setUser: (user) =>
        set(() => ({
          user: user,
        })),
    }),
    { name: "AuthStore", storage: sessionStorage }
  )
);

export default useAuthStore;
