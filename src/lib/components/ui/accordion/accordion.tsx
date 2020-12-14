import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ChevronDown, ChevronRight } from 'lib/components/icons';

const styles = {
  container: 'my-1 prose-sm prose',
  header:
    'flex items-center justify-start px-5 py-2 font-medium border-black rounded-none text-primary-500 dark:text-white bg-primary-100 dark:bg-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 ring-primary-100',
  section: 'p-5 prose-sm prose dark:bg-primary-100 dark:text-primary-500',
};

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
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

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  { i, expanded, header, onExpand, children, ...props },
  ref,
) {
  const isOpen = i === expanded;

  const handleEnter: React.KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        onExpand(isOpen ? false : i);
      }
    },
    [i, isOpen, onExpand],
  );

  return (
    <div className={styles.container}>
      <motion.div initial={false}>
        <header
          role="button"
          tabIndex={0}
          className={styles.header}
          onClick={() => onExpand(isOpen ? false : i)}
          onKeyDown={handleEnter}
          ref={ref}
          {...props}
        >
          <div className="pr-1">
            {isOpen ? <ChevronDown variant="primary" /> : <ChevronRight variant="primary" />}
          </div>
          {header}
        </header>
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
            <section className={styles.section}>{children}</section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default React.memo(Accordion);
