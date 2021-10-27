---
title: WSL handbook
date: 2021-10-26
tags:
  - wsl
  - linux
  - windows
  - handbook

categories:
  - WSL
  - Handbook
---

## can not create container

file docker-compose line 14

`./:/srv/DDX/` => `./:/srv/DDX`

## enable xdebug in Vscode

launch.json

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "hostname": "0.0.0.0",
      "name": "Xdebug for Docker",
      "type": "php",
      "request": "launch",
      "port": 9000,
      "pathMappings": {
        "/srv/DDX": "${workspaceFolder}"
      }
    }
  ]
}
```

- use powershell get `wsl_ip` address `wsl hostname -I`

- go to docker file

  - ```dockerfile
    "xdebug.remote_host={{wsl_ip}}"
    ```
