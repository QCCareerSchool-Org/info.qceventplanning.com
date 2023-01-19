declare global {
  interface Window {
    LC_API?: {
      // eslint-disable-next-line camelcase
      open_chat_window?: () => void;
    };
  }
}

export const openLiveChat = (): void => {
  window.LC_API?.open_chat_window?.();
};
