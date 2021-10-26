---
title: OWASP Top Ten - Insecure Deserialization
date: 2020-12-15
tags:

 - OWASP
 - Insecure Deserialization
   categories:
 - Article
 - OWASP
todo:
	

---

Serialization is "the process of converting the state information of an object into a form that can be stored or transmitted". During the serialization period, the current state of the object is written to a temporary or permanent storage area. Later, you can recreate the object by reading or restoring (deserializing) the state of the object from the storage area.

## Impact

These flaws can lead to remote code execution attacks, which is one of the most serious attacks possible. The business affects the protection requirements of the final application and data.



## Prevent

The only safe architectural pattern is not to accept serialized objects from unrestricted trusted sources, or to use serialized media that only allows primitive data types. If this is not possible, please consider one or more of the following measures:

- Implement best checks, such as digitally signing any serialized objects to prevent malicious creation of objects or tampering with data.

* Before creating objects, strict type constraints are enforced during deserialization, because they usually use a set of definable classes. It has been proven that this technique can be bypassed, so it is recommended not to rely on it alone.
* Isolate and run code that may be deserialized in a low-privilege environment.

* Record deserialization exceptions and failures, for example, the type is not the expected type, or deserialization caused an exception.
* Restrict or monitor the initialization and outgoing network connection of the deserialization container or server.
* Monitor deserialization and warn the user whether it is continuously deserializing.