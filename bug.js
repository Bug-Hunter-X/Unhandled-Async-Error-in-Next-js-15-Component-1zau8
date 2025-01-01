```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      {/* This component will cause the error if not properly handled */}
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  // Simulate an error that happens asynchronously
  // This could be a fetch call, a database query, or any other async operation
  setTimeout(() => {
    throw new Error('Something went wrong!');
  }, 1000);

  return (
    <div>My Component</div>
  );
}
```