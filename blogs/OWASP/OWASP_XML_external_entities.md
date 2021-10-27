---
title: OWASP Top Ten - XML External Entities
date: 2020-12-15
tags:
  - OWASP
categories:
  - Article
  - OWASP
---

## Description

If an attacker can upload an XML document or add malicious content to the XML document, through vulnerable code, dependencies, or integration, they can attack the flawed XML processor.



## Impact

Attackers can use XML external entities to steal internal files and shared files using URI file processors, monitor internal scanning ports, execute remote codes, and implement denial of service attacks.



## Prevent

1. Filter the XML data submitted by users

2. Use the method to disable external entities provided by the development language