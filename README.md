# Solaware 

## Introduction
Solaware is a personalized UV monitoring platform which boasts a wearable UV sensor and companion application developed by a team of undergraduate students from Columbia University. The device and app companion aim to assist individuals by providing real-time UV tracking and personalized insights regarding their UV exposure levels. We especially aim to help photosensitive populations.

## Solaware Mobile Application
This is a development repository for the `Solaware Companion App` which provides a user interface for our wearable UV sensor.

The current stable release is in the `main` branch.

### Setting up Development Environment
Clone the repository onto a directory and cd into it.
```Bash
git clone https://github.com/Solaware/solaware-companion-app.git
cd solaware-companion-app
```

Install `node`. You can run this again to make sure `node` is installed.
```Bash
# Install node using brew
brew install node
```

Ensure that XCode is installed and that the license agreement has been signed. 
> XCode can be installed from the App Store on MacOS.

Install project dependencies using `npm`. These are all the modules required for the app to run, including `expo` and the `expo-dev-client`.
```Bash
# Install project dependencies
npm install
```

Build project and start a development server.
```Bash
# Build expo project
npx expo start
```

> To view the app on your phone, follow the prompts to switch to `Expo Go` (press `s`). Make sure the app is downloaded on your phone and scan the QR code. Press the `Open Expo Go` option in the QR code link to open the `Expo Go` app on your phone. You can follow the prompts to open an XCode simulator on your Mac. Note that this requires the XCode simulator to be open.


### Adding New Features
To develop a new feature for the `Solaware Companion App` please create a new branch that has split from the `dev` branch. Once your changes are complete, submit a `pull request` by pushing to a new feature branch in the remote repository. You can create a `pull request` by following the prompts. Once your changes have been reviewed we can merge to `dev`.

To create a new branch from the `dev` branch, first make sure your current branch is `dev`:

```Bash
# Ensure your current branch is dev
git checkout dev
git branch
# output: * dev
```

Then, create a new branch from `dev`:

```Bash
# Create new branch
git checkout -b dev/<new-feature>
```

Once you have completed your changes in this branch, submit a `pull request` by pushing to a remote repo for this specific branch:

```Bash
# Push to new branch in remote
git push -u origin dev/<new-feature
```

Once your changes have been reviewed we can merge to `dev` on GitHub web.


