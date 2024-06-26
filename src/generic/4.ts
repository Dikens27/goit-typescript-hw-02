/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Something {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Something> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
