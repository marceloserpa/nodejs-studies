# C++ Integration

This project is sample of create addon using C++.

To run this project you need install node-gyp.

You can install with `npm`:

``` bash
> npm install -g node-gyp
```

## Building native code

Enter inside cpp folder and build the native module using node-gyp:

``` bash
> node-gyp configure build
```

## Run javascript application

Go to the main folder and run the calculator.js file.

``` bash
> node calculator.js 
```

## Final considerations

This is a simple project to illustrate how to create a node lib using native code.


I hope you like it ;)

