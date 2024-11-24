const isObject = (data) => typeof data === "object" && data !== null;

export const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          <strong>{key}: </strong>
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};
