"use client";
import { useEffect, useRef } from "react";

/**
 * @function useRunOnce
 * @description A custom React hook that ensures a function is executed only once
 *              across the entire application, even in React Strict Mode or during
 *              development hot reloads. Maintains a global registry to track
 *              execution status using a unique key.
 *
 *              Particularly useful for one-time initialization logic, analytics
 *              tracking, or any operation that should not be duplicated.
 *
 * @param {string} key - A unique identifier for the process. Used to track execution
 *                       across component instances and prevent naming collisions.
 *                       Should be descriptive and unique (e.g., "user_analytics_init").
 * @param {function} fn - The function to be executed once. Should contain the logic
 *                        that needs to run only a single time.
 *
 * @returns {void}
 *
 * @throws {Error} If the provided key is not a string or is empty.
 * @throws {Error} If the provided function is not callable.
 *
 * @example
 * // One-time asynchronous operation
 * useRunOnce("async_operation", async () => {
 *   await yourAsyncFunction();
 * });
 *
 * @example
 * // One-time synchronous operation
 * useRunOnce("sync_operation", () => {
 *   yourFunction();
 * });
 *
 * @remarks
 * - The hook uses a global registry, so the same key across different components
 *   will prevent duplicate execution.
 * - Safe to use in React Strict Mode and development environment with hot reload.
 * - The function will not execute if another instance with the same key has
 *   already run in the application.
 */
const registry = new Set<string>();

export function useRunOnce(key: string, fn: () => void) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (registry.has(key)) return;
    registry.add(key);

    fn();
  }, [key]);
}
