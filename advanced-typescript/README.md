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

