---
title: OWASP Top Ten - Using Components with Known Vulnerabilities
date: 2020-12-15
tags:
  - OWASP
categories:
  - Article
  - OWASP
---

Components such as libraries, frameworks, and other software modules run with the same privileges as applications. If vulnerable components are utilized, such attacks may result in severe data loss or server takeover. Applications and APIs that use known vulnerabilities may undermine application defences and cause various attacks and impacts.



## Impact

the impact of this vulnerability depends on the vulnerability  of the components



## Prevent

* Remove unused dependencies, expected features, components, files and documentation.
* Using a certain version, the tool continuously counts the versions of client and server components (for example, frameworks, libraries) and their dependencies. Continuously monitor the size of components in sources (such as CVE and NVD). process. Subscribe to email alerts for security vulnerabilities related to the components you use.
* Only obtain components from official sources via secure links. The signed copy is preferred to reduce the chance of including malicious components that have been modified.
* Monitor unmaintained libraries and components or components that have not created security patches for older versions. If it cannot be fixed, consider deploying a virtual patch to monitor, detect or prevent the discovered problem.