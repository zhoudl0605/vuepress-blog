---
title: OWASP Top Ten - Cross-Site Scripting XSS
date: 2020-12-15
tags:
  - OWASP
categories:
  - Article
  - OWASP
---

Cross-site scripting is a security vulnerability that often occurs in web applications. It allows malicious web users to implant code into pages provided to other users. These codes include HTML code and client-side scripts. The common knowledge of the hacker community is that xss is a new type of "buffer overflow attack"

## Impact

The attacker executes scripts in the victim’s browser to hijack the user’s session, insert malicious content, redirect the user, use malware to hijack the user’s browser, etc.
species:
Storage type, reflective type, DOM type

## Prevent

1. Verify input
2. Encoding output (used to ensure that the input characters are treated as data, not as html being parsed by the browser)
