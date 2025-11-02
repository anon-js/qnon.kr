export interface ExpandingViewProps {
  isExpandingView: ExpandingViewEnum;
  toggleExpand: (view: ExpandingViewEnum) => void;
}

export enum ExpandingViewEnum {
  Default = 'default',
  Project = 'project',
  Experience = 'experience',
  Education = 'education',
}
