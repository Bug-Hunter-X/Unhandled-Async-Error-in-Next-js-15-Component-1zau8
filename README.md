# Unhandled Async Error in Next.js 15 Component

This repository demonstrates a common issue in Next.js 15 applications: unhandled errors thrown within asynchronously loaded components.  The error occurs because an error is thrown in a component after it is rendered, which Next.js does not handle gracefully by default.

## Problem

A component, `MyComponent`, throws an error asynchronously after mounting. This causes the application to crash without a user-friendly error message.

## Solution

The solution involves using error boundaries to catch and handle these errors gracefully, preventing the application from crashing. This provides a better user experience and facilitates debugging.

## How to reproduce

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Observe the error after a short delay.