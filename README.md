# UniEconomyMobile
Native mobile APP 

### Setting up the project

1 - Install nativescript development environment by following the [NativeScript Installation Guide](http://docs.nativescript.org/angular/start/quick-setup)

2 - Clone the repository
```sh
$ git clone git@github.com:unimicro/UniEconomyMobile.git
``` 

3 - Run the project using following commands

**iOS**
```sh
$ tns run ios --emulator
``` 

**Android**
Startup a emulator on Genymotion. Check if the emulator is available by running,
```sh
$ tns devices
``` 
Run the app using,
```sh
$ tns run android
``` 

&nbsp;
&nbsp;
### Run Tests

Project is configured with Jasmine test setup with karma test runner.

**iOS**
Prepare the emulated app for testing.
```sh
$ tns emulate ios
``` 

On the new terminal execute tests.
```sh
$ tns test ios --emulator
``` 

**Android**
Startup a emulator on Genymotion. Check if the emulator is available by running,
```sh
$ tns devices
``` 
Run tests using,
```sh
$ tns test android
``` 
