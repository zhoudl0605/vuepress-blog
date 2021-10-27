---
title: OWASP Top Ten - Sensitive Data Exposure
date: 2020-12-15
tags:
  - OWASP
categories:
  - Article
  - OWASP
---

Many web applications and APIs do not properly protect sensitive data, such as financial, healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra protection, such as encryption at rest or in transit, and requires special precautions when exchanged with the browser.

## Vulnerability impact

Errors in this area frequently affect data that should have been encrypted. Under normal circumstances, these data usually include personal sensitive information (PII), such as medical records, authentication credentials, personal privacy, credit card information, etc. This information is protected by relevant laws and regulations, such as the EU’s General Data Protection Regulation (GDPR) and local privacy protection laws.

## Detection scenario

User Info:

- such as user account, name, ID, phone number, bank account, driver's license number, social security card number, passport number, etc.

Web server information:

- OS type, version information; database type, version information; web configuration information (phpinfo)

## Prevention ideas

1. Categorize the data processed, stored, or transmitted by the system, and perform access control according to the categories.

2. Encrypt the transmission and storage of sensitive user information (TLS, SHA).

3. Customize the unified error page to prevent sensitive information such as the Web middleware's name and version information from being displayed to the Web client.



