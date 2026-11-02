import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { RotateCw } from "lucide-react";

type Props = {
  icon: LucideIcon;
  category: string;
  items: string[];
};

/*
 * Front: icon, category and item count. Back: the full equipment list.
 * Flips on hover (mouse) and on tap/click or Enter/Space (touch, keyboard).
 */
export const EquipmentFlipCard = ({ icon: Icon, category, items }: Props) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      className="equipment-flip"
      data-flipped={flipped}
      aria-pressed={flipped}
      aria-label={`${category}: ${flipped ? "hide" : "show"} equipment list`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div className="equipment-flip__inner">
        {/* Front */}
        <div className="equipment-flip__face equipment-flip__front" aria-hidden={flipped}>
          <span className="equipment-flip__icon">
            <Icon className="h-8 w-8" />
          </span>
          <span className="equipment-category-title equipment-flip__title">{category}</span>
          <span className="equipment-flip__count">
            {items.length} equipment {items.length === 1 ? "type" : "types"}
          </span>
          <span className="equipment-flip__hint">
            <RotateCw className="h-4 w-4" />
            Hover or tap to view
          </span>
        </div>

        {/* Back */}
        <div className="equipment-flip__face equipment-flip__back" aria-hidden={!flipped}>
          <span className="equipment-category-title equipment-flip__back-title">{category}</span>
          <ul className="equipment-flip__list">
            {items.map((item) => (
              <li key={item}>
                <span className="equipment-flip__dot" />
                <span className="equipment-list">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
