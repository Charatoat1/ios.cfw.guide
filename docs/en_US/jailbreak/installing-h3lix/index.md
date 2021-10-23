---
lang: en_US
title: Installing h3lix
description: Guide to installing H3lix
permalink: /installing-h3lix
redirect_from:
  - /installing-helix
  - /helix
  - /h3lix
  - /h3
  - /he
---

h3lix is capable of jailbreaking every 32bit iOS device on firmware version 10.0 up to 10.3.3.

Note that the h3lix jailbreak is not “persistent” (meaning it does not remain installed after a reboot). You will need to re-run the exploit after every reboot. You will be instructed on how to do this.

Due to how custom applications are installed to the device, in most cases you will need to reinstall the h3lix jailbreak application to your device every 7 days from your computer.

We will use iOS-App-Signer, Xcode, and a patcher script to install the application to your device.

## Downloads

- The latest version of [h3lix](https://h3lix.tihmstar.net/)
- The latest version of [iOS-App-Signer](https://github.com/DanTheMan827/ios-app-signer/releases)
- Jackajames' [patcher script](https://gist.github.com/jakeajames/b44d8db345769a7149e97f5e155b3d46)
- A Mac with Xcode installed

## Patching the application

1. Open the Terminal application
1. Change directory to the folder where you saved the script and h3lix.ipa files
   - If you saved them to Downloads, this would be `cd ~/Downloads`
1. Type `./patch.sh` in the terminal
1. Drag and drop the h3lix `.ipa` file into the terminal
1. Type "h3lix.ipa"
1. Press Enter

You now have a patched h3lix ipa that you can sign

## Signing the application

1. Open Xcode and create a new application project called Test
1. Click on the top instance of Test in the files sidebar
1. Click on Test under Targets
1. Click on Signing and Capabilities and follow the steps to create a signing certificate and enter your Apple ID when prompted
1. Open iOS-App-Signer
1. Click browse and choose the patched h3lix ipa we made earlier
1. Your Apple ID will be in the Signing Certificate box, but if it isn't, select it from the dropdown list
1. Change the Provisioning Profile option to the provisioning profile corresponding to your Xcode project name (this should be Test)
1. Click start, then save, saying yes to overwriting any other files of the same name

## Sideloading the application

1. Plug your device into your Mac and press trust if it prompts you
2. In Xcode, click on Window in the global menu and select Devices and Simulators
3. Select your device in the window
4. Press the plus button under Installed Applications and select the h3lix ipa we made in the previous section

## Trusting the application

1. Go to `Settings` -> `General` -> `Device Management` -> `<Your Apple ID>`
    - Depending on your usage, `Device Management` may be labeled `Profiles and Device Management`
1. Tap `Trust "<Your Apple ID>"`

The h3lix application can now be opened from home screen.

## Running h3lix

1. Open the h3lix application from your home screen
1. Tap "Jailbreak"

::: tip
If the app displays `Uicache Failed!` this means the signing process was not done properly and you should double check you followed the steps above properly
:::

::: warning
If your device crashes or restarts unexpectedly and the jailbreak isn't installed, simply try running the exploit again until it does work.
:::

You should now be jailbroken with Cydia installed on your home screen. You can use Cydia to install [tweaks](/faq/#what-are-tweaks), themes and more.
