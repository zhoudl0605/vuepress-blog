---
title: Set up Flutter
date: 2020-09-21
tags:
 - flutter
categories:
 - Study Note
---


## Before install

* go to BIOS check if CPU virtualisation is enabled
  * if not enabled, enable it and restart

> For Linux check the following tools:

**Tools**: Flutter depends on these command-line tools being available in your environment.

* `bash`
* `curl`
* `file`
* `git` 2.x
* `mkdir`
* `rm`
* `unzip`
* `which`
* `xz-utils`
* `zip`

## Install

### Windows

* use `git`

  ```powershell
  C:\src>git clone https://github.com/flutter/flutter.git -b stable
  ```

* From the Start search bar, enter ‘env’ and select **Edit environment variables for your account**.

* Under **User variables** check if there is an entry called

  Path:

  * If the entry exists, append the full path to `flutter\bin` using `;` as a separator from existing values.
  * If the entry doesn’t exist, create a new user variable named `Path` with the full path to `flutter\bin` as its value.

### Linux

* install from `snap`:

  ```bash
  sudo snap install flutter --classic
  ```

* without snap:

  * install from `git`

  ```bash
  cd ~/src
  git clone https://github.com/flutter/flutter.git
  ```
  
  * add the `PATH` to the shell rc such like: `.zshrc`

  ```bash
  export PATH="$PATH:/home/zhoudl0605/src/flutter/bin"
  ```

  * Check is install success
  
  ```bash
  which flutter
  ```

## After install

* install [Android Studio](https://developer.android.com/studio)
* install SDK from Android Studio and create the AVD
* run `flutter doctor`to set up
