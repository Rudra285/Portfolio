import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const EXIT_DURATION_MS = 220;

export default function DetailDialog({
  title,
  onClose,
  children,
  className = "",
  headerLogo,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  headerLogo?: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeTimer = useRef<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const requestClose = useCallback(() => {
    if (isClosing) return;

    setIsClosing(true);
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : EXIT_DURATION_MS;
    closeTimer.current = window.setTimeout(onClose, delay);
  }, [isClosing, onClose]);

  useEffect(() => {
    const dialog = ref.current!;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
      dialog.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  return (
    <dialog
      ref={ref}
      className={`detail-dialog${className ? ` ${className}` : ""}${isClosing ? " detail-dialog--closing" : ""}`}
      aria-labelledby="detail-title"
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div className="dialog-shell">
        <header className="dialog-header">
          <div className="dialog-title-group">
            {headerLogo}
            <h2 id="detail-title">{title}</h2>
          </div>
          <button
            autoFocus
            className="dialog-close"
            aria-label="Close details"
            onClick={requestClose}
          >
            ×
          </button>
        </header>
        <div className="dialog-content">{children}</div>
      </div>
    </dialog>
  );
}
