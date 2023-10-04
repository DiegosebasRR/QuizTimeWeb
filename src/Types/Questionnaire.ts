export interface QuestionnaireType {
  _id: string;
  titles: string;
  description: string;
  duration: number;
  user: string; // Cambiar a string para representar Types.ObjectId
  question: string[]; // Cambiar a string[] para representar Types.ObjectId[]
  participant: string[]; // Cambiar a string[] para representar Types.ObjectId[]
  createdAt: Date;
}
