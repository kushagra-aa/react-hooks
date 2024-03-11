import { renderHook } from "@testing-library/react";
import useDebounce from "../useDebounce"; // Your custom hook

describe("useDebounce hook", () => {
  jest.useFakeTimers();

  it("should call the callback immediately if no timeoutDuration is provided", () => {
    const mockCallback = jest.fn(() => {});
    renderHook(() =>
      useDebounce({
        callback: mockCallback,
        dependencies: [],
        shouldCallOnInitialRender: true,
      })
    );

    expect(mockCallback).toHaveBeenCalledTimes(1); // Called immediately
  });

  it("should call the callback after the specified timeoutDuration", () => {
    const mockCallback = jest.fn(() => {});
    const timeoutDuration = 1000; // 1 second
    renderHook(() =>
      useDebounce({
        callback: mockCallback,
        dependencies: [],
        timeoutDuration,
        shouldCallOnInitialRender: true,
      })
    );

    expect(mockCallback).not.toHaveBeenCalledTimes(1); // Not called immediately

    // Use Jest's timers to advance time by the timeoutDuration
    jest.advanceTimersByTime(timeoutDuration);

    expect(mockCallback).toHaveBeenCalledTimes(1); // Called after timeoutDuration
  });

  it("should not call callback if a rerender is triggered", () => {
    const mockCallback = jest.fn(() => {});
    const timeoutDuration = 500;

    const { rerender } = renderHook(() =>
      useDebounce({
        callback: mockCallback,
        dependencies: [],
        timeoutDuration,
        shouldCallOnInitialRender: true,
      })
    );
    rerender(() =>
      useDebounce({
        callback: mockCallback,
        dependencies: [],
        timeoutDuration,
        shouldCallOnInitialRender: true,
      })
    ); // Update timeoutDuration

    jest.advanceTimersByTime(timeoutDuration);

    expect(mockCallback).toHaveBeenCalledTimes(1); // Existing timeoutDuration cleared
  });

  it("should not call the callback after unmount if not called yet", () => {
    const mockCallback = jest.fn(() => {});
    const timeoutDuration = 1000;

    const { unmount } = renderHook(() =>
      useDebounce({
        callback: mockCallback,
        dependencies: [],
        timeoutDuration,
        shouldCallOnInitialRender: true,
      })
    );

    unmount(); // Cleanup

    jest.advanceTimersByTime(timeoutDuration);

    expect(mockCallback).not.toHaveBeenCalled(); // Not called after unmount
  });
});
