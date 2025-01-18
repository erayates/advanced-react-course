State without inital state:

```
const [book, setBook] = useState<Book | undefined>();

useEffect(() => {
  fetchRandomBook().then(setBook);
}, [])

if(!book) return <Loader />
```

Type def. for book state -> Book or undefined -> Book | undefined

Pass functions to props:

```
type BooksProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Books = ({children, onSubmit, onChange}: PropsWithChildren<BooksProps>)
```

Typing useRef:

```
const inputRef = useRef<HTMLInputElement>(null);
const mutableRefValue.current = 20;
```

Typing Returned values of a custom hook:

```
export const useUrl = (defaultUrl: string) => {
  const [url, setUrl] = useState(defaultUrl);
  return [url, setUrl] as const;
}

function App(){
  const [url, setUrl] = useUrl("google.com);

  return <></>;
}
```

Defining Types for Children:

```
type CardProps = {color?: "crimson" | "blue" | "brown"};
const Card = ({children, color = "blue"}: PropsWithChildren<CardProps>) => {
  return (
    <section>
      {children}
    </section>
  )
}
```

Extending Props with Helpers:

```
import { ComponentPropsWithoutRef } from "react";
type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button = ({children, onClick, type}: ButtonProps) => {
  return <button onClick={onClick} type={type}>{children}</button>
}
```

Empty object as type
```
const Component = (props: {data: Record<string, never>}) => {
return <div />;
}
```
