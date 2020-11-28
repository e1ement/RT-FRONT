export enum LevelsEnum {
  'Beginner',
  'Elementary',
  'Intermediate',
  'Upper-Intermediate',
  'Advanced',
  'Proficiency',
}

export enum ColorsEnum {
  '#ff9f05',
  '#ffbe43',
  '#0495ee',
  '#0273cc',
  '#8fcf50',
  '#60af20',
}

export enum NotificationsEnum {
  null,
  'warning',
  'danger',
  'info',
}

export enum PaymentLevelEnum {
  null,
  'dollar-sign',
  'crown',
}

export interface Category {
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  id: number;
}

export interface Task {
  taskId: number;
  category: Category;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  text: string;
  dialog: any[];
  fileName?: any;
  rating: number;
  aiRecommendation?: any;
  tutorRecommendation?: any;
  isCompleted: boolean;
}

export interface User {
  name: string;
  picture: string;
  progress: number;
  level: number;
  lastActivityTime: Date;
  notification: number;
  paymentLevel: number;
  tasks: Task[];
  id: number;
}
