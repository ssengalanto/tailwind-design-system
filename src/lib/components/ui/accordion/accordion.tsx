import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ChevronDown, ChevronRight } from 'lib/components/icons';

const styles = {
  container: 'my-1 prose-sm prose',
  title:
    'flex items-center justify-start w-full px-5 py-2 font-medium border-black rounded-none text-primary-500 dark:text-white bg-primary-100 dark:bg-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 ring-primary-100',
  content: 'p-5 prose-sm prose dark:bg-primary-100 dark:text-primary-500',
};

export interface AccordionComponentProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Defines the id or the index of the accordion
   */
  i: number;
  /**
   * Defines the title of the accordion
   */
  header?: string;
  /**
   * Defines current expanded accordion
   */
  expanded: number | boolean;
  /**
   * A function to expand the selected element
   */
  onExpand: (payload: number | boolean) => void;
}

export const AccordionComponent = React.forwardRef<HTMLButtonElement, AccordionComponentProps>(
  function Accordion({ i, expanded, header, onExpand, children, ...props }, ref) {
    const isOpen = i === expanded;

    return (
      <div className={styles.container}>
        <motion.div initial={false}>
          <button
            type="button"
            aria-controls={`accordion-content-${i}`}
            id={`accordion-title-${i}`}
            aria-expanded={isOpen}
            tabIndex={0}
            className={styles.title}
            onClick={() => onExpand(isOpen ? false : i)}
            ref={ref}
            {...props}
          >
            <div className="pr-1">
              {isOpen ? <ChevronDown variant="primary" /> : <ChevronRight variant="primary" />}
            </div>
            {header}
          </button>
        </motion.div>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div
                className={styles.content}
                id={`accordion-content-${i}`}
                aria-hidden={!isOpen}
                aria-labelledby={`accordion-title-${i}`}
                role="region"
              >
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

export interface AccordionProps {
  /**
   * Defines the data to be displayed
   */
  data: {
    id: number;
    title: string;
    content: React.ReactNode;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [current, setCurrent] = useState<number | boolean>(false);

  return (
    <div role="presentation">
      {data.map(({ id, title, content }) => (
        <AccordionComponent i={id} expanded={current} header={title} onExpand={setCurrent}>
          {content}
        </AccordionComponent>
      ))}
    </div>
  );
};

export default React.memo(Accordion);
