---
title: OWASP Top Ten - Broken Authentication
date: 2020-12-15
tags:
  - OWASP
categories:
  - Article
  - OWASP
---

Broken authentication is a general term for multiple vulnerabilities used by attackers to impersonate legitimate users online. Broadly speaking, broken authentication refers to two weaknesses: session management and credential management.

1. Insecure password storage (including plaintext, reversibly encrypted passwords and weakly hashed passwords, such as using MD5/SHA1 or not adding salt) may lead to leakage.

2. The application session timeout setting is incorrect. The user uses a public computer to access the application. The user simply closes the browser tab and leaves instead of choosing "Logout". The attacker used the same browser to browse the web an hour later, and the current user status was still authenticated.

### Defence method:

1. Use multi-factor authentication to prevent automatic, credential filling, brute force cracking, and stolen credential reuse attacks.

2. Do not use the default password during deployment, especially the administrator user.

3. Perform weak password checks, such as testing new accounts or changed passwords, and exclude the use of passwords in the "Top 10,000 Weak Passwords" list.

4. Ensure the length and complexity of the password, and use PBKDF2, bcrypt, scrypt and other algorithms to encrypt the password to increase the difficulty of cracking.

5. Limit the number of failed logins. Record all failure information and alert the administrator when credential filling, brute force cracking or other attacks are detected.

6. Use the server-side secure built-in session manager to generate a highly complex random session ID after logging in. The session ID cannot be in the URL, it can be safely stored and invalidated after logout, idle, or absolute timeout.
