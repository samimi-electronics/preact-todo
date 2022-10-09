import { TodoStatus } from '../enums';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: TodoStatus;
  created_at: string;
  updated_at: string;
}