interface ItodoItemContent {
  contents: string;
}
interface ITodoItem extends ItodoItemContent {
  id: string;
  completed: boolean;
  editing: boolean;
}
