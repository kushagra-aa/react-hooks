import { useEffect, useState } from "react";

/**
 * A React hook that implements debouncing for function calls.
 *
 * Debouncing helps prevent excessive function calls by ensuring a function
 * is executed only after a specified delay from the last time it was called.
 * This is useful for optimizing performance in scenarios like handling
 * user input events (e.g., typing in a search bar) or window resizes.
 *
 * @param {object} options - Configuration options for the debounce hook.
 * @param {function} options.callback - The function to debounce.
 * @param {Array<unknown>} [options.dependencies=[]] - An array of dependencies
 *   that will trigger a re-run of the debounced callback when they change.
 * @param {number} [options.timeoutDuration=0] - The delay in milliseconds
 *   before the debounced callback is executed. Defaults to 0 (immediate execution).
 * @param {boolean} [options.shouldCallOnInitialRender=false] - Whether to
 *   call the debounced callback immediately on the first render of the component.
 *
 * @returns {void} - Does not return a value.
 *
 * @example
 * ```jsx
 * import useDebounce from './useDebounce';
 *
 * function MyComponent() {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearchTerm = useDebounce(
 *     () => console.log('Search term:', searchTerm),
 *     [searchTerm], // Debounce based on searchTerm changes
 *     500 // Delay execution by 500ms
 *   );
 *
 *   const handleSearchChange = (event) => {
 *     setSearchTerm(event.target.value);
 *   };
 *
 *   return (
 *     <div>
 *       <input type="text" value={searchTerm} onChange={handleSearchChange} />
 *     </div>
 *   );
 * }
 * ```
 *
 * This example debounces the logic for logging the search term by 500ms.
 * The debounced function will only be called after the user stops typing
 * for 500 milliseconds.
 */
function useDebounce({
  callback,
  dependencies,
  timeoutDuration,
  shouldCallOnInitialRender = false,
}: {
  callback: () => void;
  dependencies: unknown[];
  timeoutDuration?: number;
  shouldCallOnInitialRender?: boolean;
}) {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [debounceTimeout, setDebounceTimeout] = useState<
    string | number | NodeJS.Timeout | null
  >(null);
  useEffect(() => {
    let localDebounceTimeout = debounceTimeout;
    if (!isInitialRender || shouldCallOnInitialRender) {
      if (!timeoutDuration) {
        callback(); // Call immediately if no timeout
      } else {
        if (debounceTimeout) clearTimeout(debounceTimeout); // Clear any existing timeout

        localDebounceTimeout = setTimeout(callback, timeoutDuration); // Set new timeout
        setDebounceTimeout(localDebounceTimeout);
      }
    }

    setIsInitialRender(false); // Mark as not initial Render

    // Cleanup the timeout when the component unmounts
    return () => {
      if (localDebounceTimeout) {
        clearTimeout(localDebounceTimeout);
      } // Cleanup localDebounce on unmount
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      } // Cleanup debounce on unmount
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies, timeoutDuration]);
}

export default useDebounce;
