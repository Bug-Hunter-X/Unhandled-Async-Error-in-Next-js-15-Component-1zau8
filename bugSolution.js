```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

function MyComponent() {
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError(new Error('Something went wrong!'));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>My Component</div>
  );
}
```