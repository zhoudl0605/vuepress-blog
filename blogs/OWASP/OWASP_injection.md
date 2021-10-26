---
title: OWASP Top Ten - Injection
date: 2020-12-15
tags:
  - OWASP
  - Injection
categories:
  - Article
  - OWASP
---

## Injection

Injection flaws, such as `SQL`, `NoSQL`, `OS` and `LDAP` injection, occur when not trusted data is send to an interpreter as part of a command or query. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

## SQL injection

### Web application 3-tier architecture

In general 3-tire architecture separated the application into:

- User interface layer (Presentation Layer)
- Business logic layer (Application Layer)
- Data access layer

![3-tire architecture](https://www.jinfonet.com/wp-content/uploads/2018/08/3-tier_architecture-460x275.png)

Like the above diagram, here is an example:

- enter the domain in the web browser `www.example.com` access the web-server
- the web server in the application layer load the script `index.php` from local and execute it
- the script access the DBMS`in the data layer and execute the`SQL` query
- the data layer send back the result of the `SQL` query to the application layer
- the application layer pack the web page into `HTML` format and send back the presentation layer(web browser)
- the web browser resolves the `HTML` and display the content to the user

### `SQL` injection attack principle and thread

As described in the 3-tire architecture, then we access the dynamic website. The web server will send the `SQL` quest to the application layer. If passed the authorization verification, the data layer will execute the `SQL` quest. In general, this kind of internal `SQL` quest has no risk, but if combined with the content entered by the user, it might bring unknown danger.

The main threads from SQL injection as following:

- guess the database, get the critical data from the database
- bypass the verification, such as bypass the login process
- use the stored procedure of the database to perform operations such as privilege escalation

> while I am writing this article I found this application [Damn Vulnerable Web App (DVWA)](http://www.dvwa.co.uk/) which can help you to understand the concept of injection attack, click [here](https://github.com/ethicalhack3r/DVWA/archive/master.zip) to download

### Attack Scenarios

#### 1. Guess database

if the `url` looks like this:

```
www.example.com/?id=1&Submit=Submit#
```

which means this `PHP` page is using `get` method to pass parameters

if the`SQL` query code is:

```php
$query = "SELECT first_name, last_name FROM users WHERE user_id='$id';";
```

according to this `PHP` code we can get the `SQL` query

```mysql
SELECT first_name, last_name FROM users WHERE user_id = '1'; # suppose the id in php code is 1
```

we can control the value of `id` to return the value, at this point if we enter `1' order by 1#`, the `SQL` query becomes:

```mysql
SELECT first_name, last_name FROM users WHERE user_id = '1' order by 1;#`;
# (according to Mysql reference，# will comment out everything after it，use this method to avoid single quote, prevent syntax error)
```

if entered `1' order by 1#` and `1' order by 2#` with normal return, and get error with `1' order by 3#`, which means this `users` table only has two columns.

if we enter the `1' union select database(),user()#` then we can get the name of the database and the user name the application layer using for query.

#### 2. Bypass verification

Suppose we want to login a website, and `PHP` code as following:

```php
$sql = "SELECT * from users where username='$username' and password='$pwd'"
```

then if we enter the username `123` and the password `abc`, then we can get the following `SQL` query

```mysql
SELECT * from users where username='123' and password='abc'
```

if the `username` and `password` match we can login or fail.

But if we enter `123' or 1=1 #` in the `username` then we can get the following `SQL` query:

```mysql
SELECT * from users where username='123' or 1=1 # and password='abc'
```

which the same as the following query:

```mysql
SELECT * from users where username='123' or 1=1
```

because `1 = 1` is true, then we always can get return value and bypass the login

### Avoid Attack

#### 1. Check data type and format

If your `SQL` statement is in a form similar to `where id=$id`, and all `id` in the database are numbers, then you should check to make sure that the variable `id` is of type int before the `SQL` is executed; if it is an acceptance email, then You should check and strictly ensure that the variable must be in the format of the email. Other types such as `date` and `time` are also the same. To sum up: As long as there is a fixed format variable before the SQL statement is executed, it should be checked strictly according to the fixed format to ensure that the variable is in the format we expected, which can largely avoid SQL injection attacks.

#### 2. Filter special characters

For variables whose format cannot be determined, special symbol filtering or escaping must be performed. In `PHP` method `addslashes()` is handy. It will add a backslash escape before the specified predefined characters. These predefined characters are: `'`, `"`, `\` and `NULL`.

#### 3. Bind variables

`mysqli` is the driver of `MySQL` in `PHP` which support bind variables, such as:

```php
$username = isset($_GET['username']) ? $_GET['username'] : '';
$userinfo = array();
if($username){
	//use mysqli connect database
	$mysqli = new mysqli("localhost", "root", "root", 'test');
	//use ? replace variable, reference: https://www.php.net/manual/en/mysqli-stmt.bind-param.php
	$sql = "SELECT uid,username FROM user WHERE username=?";
	$stmt = $mysqli->prepare($sql);
	//bind variable
	$stmt->bind_param("s", $username);
	$stmt->execute();
	$stmt->bind_result($uid, $username);
	while ($stmt->fetch()) {
	    $row = array();
	    $row['uid'] = $uid;
	    $row['username'] = $username;
	    $userinfo[] = $row;
	}
}
```

## OS injection

OS command execution is a technology for executing OS commands on a web server through a network interface. If the application uses input strings or externally-influenced strings externally to assemble commands without proper filtering, it may cause OS command injection attacks.

`PHP` provides 3 commands that user can execute external commands:

- `system()`
- `esec()`
- `passthru()`

`PHP` also provides `popen()` to execute a given command by opening a process pipeline, but you must have permission.

suppose the `PHP` code as following:

```php
$username = $_POST["user"];
$command = 'ls -l /home/' . $username;
system($command);
```

if we enter `; rm -rf /` to `username` then we get the following `bash` script

```bash
ls -l /home/; rm -rf /
```

then the bash will execute serially:

- `ls -l /home/`
- `rm -rf /` (remove everything from root directory)

### Avoid attack

So far, the most effective way to prevent OS command injection vulnerabilities is never to call OS commands from application layer code. There are alternative ways to use more secure platform `API` to achieve the desired functionality in almost every case.
