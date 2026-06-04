import type { TimelineItem } from "@/data/content";

type TimelineBlockProps = {
  items: TimelineItem[];
  ariaLabel: string;
};

export default function TimelineBlock({ items, ariaLabel }: TimelineBlockProps) {
  return (
    <ol className="timeline" aria-label={ariaLabel}>
      {items.map((item, index) => (
        <li key={item.id} className="timeline__item">
          <article className="timeline__card">
            <span className="timeline__dot" aria-hidden="true" />
            <div className="timeline__content">
              <time className="timeline__period">{item.period}</time>
              <h4 className="timeline__title">{item.title}</h4>
              {item.subtitle && (
                <p className="timeline__subtitle">{item.subtitle}</p>
              )}
              {item.bullets.length > 0 && (
                <ul className="timeline__bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
          {index < items.length - 1 && (
            <span className="timeline__line" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}
