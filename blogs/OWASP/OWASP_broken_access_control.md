---
title: OWASP Top Ten - Broken Access Control
date: 2020-12-15
tags:
  - OWASP
categories:
  - Article
  - OWASP
---

## Description

If proper access control is not implemented on authenticated users, attackers can use these flaws to access functions or initialized data.

## Impact

The technical impact is that an attacker can impersonate a user, an administrator, or a privileged user, or create, access, update, or delete any record. The business affects the protection needs of applications and data.

## Scenario

Ultra vires:

Horizontal ultra vires, preliminary ultra vires

File operations:

File upload, file inclusion, arbitrary file download, arbitrary file deletion

## Prevention

1. Strengthen the encapsulation and encryption of reference parameters

2. Use security labels and adopt a strong access control model (MAC)
