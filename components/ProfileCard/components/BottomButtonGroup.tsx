'use client';
import { Button } from '@/components/ui/button';
import { ExpandingViewEnum, ExpandingViewProps } from '@/types/expandingView';
import { ArrowUpRightIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const buttonVariants = {
  hidden: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.5 } },
};

type ButtonListType = {
  label: string;
  view: ExpandingViewEnum;
};

const ButtonList: ButtonListType[] = [
  {
    label: '프로젝트',
    view: ExpandingViewEnum.Project,
  },
  {
    label: '학력',
    view: ExpandingViewEnum.Education,
  },
  {
    label: '경력',
    view: ExpandingViewEnum.Career,
  },
];

export function BottomButtonGroup({ isExpandingView, toggleExpand }: ExpandingViewProps) {
  return (
    <AnimatePresence>
      {isExpandingView === ExpandingViewEnum.Default && (
        <motion.div
          key="menu"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="mt-8 p-4 h-16 flex items-center space-x-2 bg-white rounded-lg border shadow-sm z-20"
        >
          {ButtonList.map((button) => (
            <Button key={button.label} variant="ghost" onClick={() => toggleExpand(button.view)}>
              {button.label} <ArrowUpRightIcon className="size-4 ml-1" />
            </Button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
