# useDebounce

[useDebounce] lets you apply debounce to your searches.
It is a [ReactJS] Hook that helps you with the tedious task of debouncing in [ReactJS]. It works seamlessly with TypeScript out of the box, requiring no extra steps for configuration.

> types are not needed for this package because it is made with typescript.

## Quick start

To use useDebounce in your project, follow these simple steps:

1. Install the package using npm or yarn:

   ```bash
   npm install @kushagra-aa/hooks-usedebounce
   ```

   or

   ```bash
   yarn add @kushagra-aa/hooks-usedebounce
   ```

2. Import useDebounce in your component:

    ```js
    import useDebounce from '@kushagra-aa/hooks-usedebounce';
    ```

3. Use the hook in your component:

    ```js
    useDebounce({
    callback: () => {
      // Callback Function
      // Logic for the callback function
    },
    dependencies: [count],
    timeout: 1000,
    });
    ```

_[Read more on how to use and install useDebounce.](#usage)_

## How does it work?

[useDebounce] delays the execution of a function until a certain amount of time has passed since the last time it was called. This is useful for tasks such as auto-suggest search boxes, where you want to wait until the user has finished typing before making a request to the server.

## Usage

To use useDebounce, simply import the hook into your component and use it as shown in the Quick Start section.

Install the package using npm or yarn:

   ```bash
   npm install @kushagra-aa/hooks-usedebounce
   ```

   or

   ```bash
   yarn add @kushagra-aa/hooks-usedebounce
   ```

Use [useDebounce] as a [ReactJS] hook:

> The syntax is similar to useEffect hook.

```js
useDebounce({
    callback: () => {
      // Callback Function
      // Logic for the callback function
    },
    dependencies: [count],
    timeout: 1000,
    shouldCallImmediately: true,
    });
```

## Options

### callback

- Description: The callback function that will be called after the timeout duration has elapsed (if the dependencies are not changed).

- Usage Example:

    ```js
    callback: () => {
    // Logic for the callback function
    }
    ```

- Default Value: None

### dependencies

- Description:  An array containing the variables that will reset the timeout if the dependencies are changed.

- Usage Example:

    ```js
    dependencies: [count]
    ```

- Default Value: An empty array (`[]`)

### timeoutDuration

- Description: The duration of the timeout in milliseconds.

- Usage Example:

    ```js
    timeoutDuration: 1000
    ```

- Default Value: None

### shouldCallOnInitialRender

- Description: A flag that indicates whether the callback should be called during the initial render.

- Usage Example:

    ```js
    shouldCallOnInitialRender: true
    ```

- Default Value: `false`

## Contributing

Please create an issue on GitHub if you experience a bug.
I also welcome pull requests.

Read [Contribution Guide](../contribution.md)

## Repository & Feedback

Please report issues related to this extension on the repository page.

[GitHub Repository](https://github.com/kushagra-aa/react-hooks/)

## Developer Information

Kushagra Agnihotri

Please Visit [Here](https://kushagra-aa.vercel.app/) for additional information

[useDebounce]: https://github.com/kushagra-aa/react-hooks/tree/master/useDebounce
[ReactJS]: https://react.dev/
