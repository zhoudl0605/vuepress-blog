---
title: OWASP Top Ten - Insufficient Logging & Monitoring
date: 2020-12-15
tags:
 - OWASP
 - Insufficient Logging & Monitoring
categories:
 - Article
 - OWASP
---



The lack of logging and monitoring, coupled with the lack of incident response or ineffective integration, allows attackers to further attack the system, maintain persistence, turn to more systems, and incorrectly rewrite, extract or destroy data.



## Impact

Allowing this detection to proceed can increase the probability of successful exploitation to nearly 100%.



## Prevent

* Ensure that sufficient users can be used to record all logins, access control failures and server-side input verification failures to identify suspicious or malicious accounts, and sufficient time is reserved to allow delayed forensic analysis.
* Ensure that logs are generated in a format that can be easily used by a centralized log management solution.
* Ensure that high-value transactions have a pre-controlled audit trail to prevent corrections or deletions, such as only appending database tables or the like.

* Establish effective monitoring and alarms, brake to detect and respond to suspicious activities in time.
* Establish or adopt an incident response and recovery plan