declare global {
  interface Window {
    om48459_42601?: {
      reset?: () => void;
    };
  }
}

/**
 * Removes the popup and then, if the display rules are satisfied, shows it again
 *
 * Sometimes causes an error to be thrown when hitting the back button, but the error
 * doesn't interfere with the rest of the website.
 *
 * https://optinmonster.com/docs/using-the-optinmonster-api-with-single-page-applications/
*/
export const resetOptInMonster = (): void => {
  window.om48459_42601?.reset?.();
};
