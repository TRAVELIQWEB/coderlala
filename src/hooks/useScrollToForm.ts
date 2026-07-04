// hooks/useScrollToForm.ts
import { useRef, useCallback } from "react";

interface UseScrollToFormOptions {
  delay?: number;
  block?: ScrollIntoViewOptions["block"];
  behavior?: ScrollIntoViewOptions["behavior"];
}

/**
 * Custom hook for scrolling to a form section and focusing the first input
 * 
 * @example
 * const { formRef, inputRef, scrollToForm } = useScrollToForm();
 * 
 * // In your JSX
 * <div ref={formRef}>...</div>
 * <button onClick={scrollToForm}>Scroll to Form</button>
 */
export function useScrollToForm(options: UseScrollToFormOptions = {}) {
  const {
    delay = 650,
    block = "start",
    behavior = "smooth",
  } = options;

  const formRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToForm = useCallback(() => {
    const formElement = formRef.current;
    
    if (!formElement) return;

    // Scroll to form
    formElement.scrollIntoView({ 
      behavior, 
      block 
    });

    // Focus first input after scroll completes
    const timeoutId = window.setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, delay);

    // Cleanup timeout if component unmounts
    return () => window.clearTimeout(timeoutId);
  }, [block, behavior, delay]);

  return { 
    formRef, 
    inputRef, 
    scrollToForm 
  };
}