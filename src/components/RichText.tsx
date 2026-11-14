import { Fragment } from "react";

/**
 * Renders text where segments wrapped in **double asterisks** are bold,
 * matching the bold formatting of the source website document.
 */
export const RichText = ({ text }: { text: string }) => (
  <>
    {text.split("**").map((chunk, i) =>
      i % 2 === 1 ? <strong key={i}>{chunk}</strong> : <Fragment key={i}>{chunk}</Fragment>
    )}
  </>
);
