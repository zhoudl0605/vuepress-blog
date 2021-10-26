(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{496:function(e,t,a){"use strict";a.r(t);var s=a(4),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#injection"}},[e._v("#")]),e._v(" Injection")]),e._v(" "),a("p",[e._v("Injection flaws, such as "),a("code",[e._v("SQL")]),e._v(", "),a("code",[e._v("NoSQL")]),e._v(", "),a("code",[e._v("OS")]),e._v(" and "),a("code",[e._v("LDAP")]),e._v(" injection, occur when not trusted data is send to an interpreter as part of a command or query. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.")]),e._v(" "),a("h2",{attrs:{id:"sql-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-injection"}},[e._v("#")]),e._v(" SQL injection")]),e._v(" "),a("h3",{attrs:{id:"web-application-3-tier-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-application-3-tier-architecture"}},[e._v("#")]),e._v(" Web application 3-tier architecture")]),e._v(" "),a("p",[e._v("In general 3-tire architecture separated the application into:")]),e._v(" "),a("ul",[a("li",[e._v("User interface layer (Presentation Layer)")]),e._v(" "),a("li",[e._v("Business logic layer (Application Layer)")]),e._v(" "),a("li",[e._v("Data access layer")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.jinfonet.com/wp-content/uploads/2018/08/3-tier_architecture-460x275.png",alt:"3-tire architecture"}})]),e._v(" "),a("p",[e._v("Like the above diagram, here is an example:")]),e._v(" "),a("ul",[a("li",[e._v("enter the domain in the web browser "),a("code",[e._v("www.example.com")]),e._v(" access the web-server")]),e._v(" "),a("li",[e._v("the web server in the application layer load the script "),a("code",[e._v("index.php")]),e._v(" from local and execute it")]),e._v(" "),a("li",[e._v("the script access the DBMS"),a("code",[e._v("in the data layer and execute the")]),e._v("SQL` query")]),e._v(" "),a("li",[e._v("the data layer send back the result of the "),a("code",[e._v("SQL")]),e._v(" query to the application layer")]),e._v(" "),a("li",[e._v("the application layer pack the web page into "),a("code",[e._v("HTML")]),e._v(" format and send back the presentation layer(web browser)")]),e._v(" "),a("li",[e._v("the web browser resolves the "),a("code",[e._v("HTML")]),e._v(" and display the content to the user")])]),e._v(" "),a("h3",{attrs:{id:"sql-injection-attack-principle-and-thread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-injection-attack-principle-and-thread"}},[e._v("#")]),e._v(" "),a("code",[e._v("SQL")]),e._v(" injection attack principle and thread")]),e._v(" "),a("p",[e._v("As described in the 3-tire architecture, then we access the dynamic website. The web server will send the "),a("code",[e._v("SQL")]),e._v(" quest to the application layer. If passed the authorization verification, the data layer will execute the "),a("code",[e._v("SQL")]),e._v(" quest. In general, this kind of internal "),a("code",[e._v("SQL")]),e._v(" quest has no risk, but if combined with the content entered by the user, it might bring unknown danger.")]),e._v(" "),a("p",[e._v("The main threads from SQL injection as following:")]),e._v(" "),a("ul",[a("li",[e._v("guess the database, get the critical data from the database")]),e._v(" "),a("li",[e._v("bypass the verification, such as bypass the login process")]),e._v(" "),a("li",[e._v("use the stored procedure of the database to perform operations such as privilege escalation")])]),e._v(" "),a("blockquote",[a("p",[e._v("while I am writing this article I found this application "),a("a",{attrs:{href:"http://www.dvwa.co.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Damn Vulnerable Web App (DVWA)"),a("OutboundLink")],1),e._v(" which can help you to understand the concept of injection attack, click "),a("a",{attrs:{href:"https://github.com/ethicalhack3r/DVWA/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" to download")])]),e._v(" "),a("h3",{attrs:{id:"attack-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attack-scenarios"}},[e._v("#")]),e._v(" Attack Scenarios")]),e._v(" "),a("h4",{attrs:{id:"_1-guess-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-guess-database"}},[e._v("#")]),e._v(" 1. Guess database")]),e._v(" "),a("p",[e._v("if the "),a("code",[e._v("url")]),e._v(" looks like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("www.example.com/?id=1&Submit=Submit#\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("which means this "),a("code",[e._v("PHP")]),e._v(" page is using "),a("code",[e._v("get")]),e._v(" method to pass parameters")]),e._v(" "),a("p",[e._v("if the"),a("code",[e._v("SQL")]),e._v(" query code is:")]),e._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$query")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v("\"SELECT first_name, last_name FROM users WHERE user_id='"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$id")])]),e._v("';\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("according to this "),a("code",[e._v("PHP")]),e._v(" code we can get the "),a("code",[e._v("SQL")]),e._v(" query")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT first_name, last_name FROM users WHERE user_id = '1'; # suppose the id in php code is 1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("we can control the value of "),a("code",[e._v("id")]),e._v(" to return the value, at this point if we enter "),a("code",[e._v("1' order by 1#")]),e._v(", the "),a("code",[e._v("SQL")]),e._v(" query becomes:")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT first_name, last_name FROM users WHERE user_id = '1' order by 1;#`;\n# (according to Mysql reference，# will comment out everything after it，use this method to avoid single quote, prevent syntax error)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("if entered "),a("code",[e._v("1' order by 1#")]),e._v(" and "),a("code",[e._v("1' order by 2#")]),e._v(" with normal return, and get error with "),a("code",[e._v("1' order by 3#")]),e._v(", which means this "),a("code",[e._v("users")]),e._v(" table only has two columns.")]),e._v(" "),a("p",[e._v("if we enter the "),a("code",[e._v("1' union select database(),user()#")]),e._v(" then we can get the name of the database and the user name the application layer using for query.")]),e._v(" "),a("h4",{attrs:{id:"_2-bypass-verification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-bypass-verification"}},[e._v("#")]),e._v(" 2. Bypass verification")]),e._v(" "),a("p",[e._v("Suppose we want to login a website, and "),a("code",[e._v("PHP")]),e._v(" code as following:")]),e._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$sql")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v("\"SELECT * from users where username='"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$username")])]),e._v("' and password='"),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$pwd")])]),e._v("'\"")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("then if we enter the username "),a("code",[e._v("123")]),e._v(" and the password "),a("code",[e._v("abc")]),e._v(", then we can get the following "),a("code",[e._v("SQL")]),e._v(" query")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * from users where username='123' and password='abc'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("if the "),a("code",[e._v("username")]),e._v(" and "),a("code",[e._v("password")]),e._v(" match we can login or fail.")]),e._v(" "),a("p",[e._v("But if we enter "),a("code",[e._v("123' or 1=1 #")]),e._v(" in the "),a("code",[e._v("username")]),e._v(" then we can get the following "),a("code",[e._v("SQL")]),e._v(" query:")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * from users where username='123' or 1=1 # and password='abc'\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("which the same as the following query:")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SELECT * from users where username='123' or 1=1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("because "),a("code",[e._v("1 = 1")]),e._v(" is true, then we always can get return value and bypass the login")]),e._v(" "),a("h3",{attrs:{id:"avoid-attack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avoid-attack"}},[e._v("#")]),e._v(" Avoid Attack")]),e._v(" "),a("h4",{attrs:{id:"_1-check-data-type-and-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-check-data-type-and-format"}},[e._v("#")]),e._v(" 1. Check data type and format")]),e._v(" "),a("p",[e._v("If your "),a("code",[e._v("SQL")]),e._v(" statement is in a form similar to "),a("code",[e._v("where id=$id")]),e._v(", and all "),a("code",[e._v("id")]),e._v(" in the database are numbers, then you should check to make sure that the variable "),a("code",[e._v("id")]),e._v(" is of type int before the "),a("code",[e._v("SQL")]),e._v(" is executed; if it is an acceptance email, then You should check and strictly ensure that the variable must be in the format of the email. Other types such as "),a("code",[e._v("date")]),e._v(" and "),a("code",[e._v("time")]),e._v(" are also the same. To sum up: As long as there is a fixed format variable before the SQL statement is executed, it should be checked strictly according to the fixed format to ensure that the variable is in the format we expected, which can largely avoid SQL injection attacks.")]),e._v(" "),a("h4",{attrs:{id:"_2-filter-special-characters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-filter-special-characters"}},[e._v("#")]),e._v(" 2. Filter special characters")]),e._v(" "),a("p",[e._v("For variables whose format cannot be determined, special symbol filtering or escaping must be performed. In "),a("code",[e._v("PHP")]),e._v(" method "),a("code",[e._v("addslashes()")]),e._v(" is handy. It will add a backslash escape before the specified predefined characters. These predefined characters are: "),a("code",[e._v("'")]),e._v(", "),a("code",[e._v('"')]),e._v(", "),a("code",[e._v("\\")]),e._v(" and "),a("code",[e._v("NULL")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"_3-bind-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-bind-variables"}},[e._v("#")]),e._v(" 3. Bind variables")]),e._v(" "),a("p",[a("code",[e._v("mysqli")]),e._v(" is the driver of "),a("code",[e._v("MySQL")]),e._v(" in "),a("code",[e._v("PHP")]),e._v(" which support bind variables, such as:")]),e._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$username")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$userinfo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//use mysqli connect database")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$mysqli")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("mysqli")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//use ? replace variable, reference: https://www.php.net/manual/en/mysqli-stmt.bind-param.php")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$sql")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"SELECT uid,username FROM user WHERE username=?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stmt")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$mysqli")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("prepare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//bind variable")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stmt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bind_param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stmt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stmt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bind_result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("while")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stmt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$row")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'uid'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$userinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("h2",{attrs:{id:"os-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#os-injection"}},[e._v("#")]),e._v(" OS injection")]),e._v(" "),a("p",[e._v("OS command execution is a technology for executing OS commands on a web server through a network interface. If the application uses input strings or externally-influenced strings externally to assemble commands without proper filtering, it may cause OS command injection attacks.")]),e._v(" "),a("p",[a("code",[e._v("PHP")]),e._v(" provides 3 commands that user can execute external commands:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("system()")])]),e._v(" "),a("li",[a("code",[e._v("esec()")])]),e._v(" "),a("li",[a("code",[e._v("passthru()")])])]),e._v(" "),a("p",[a("code",[e._v("PHP")]),e._v(" also provides "),a("code",[e._v("popen()")]),e._v(" to execute a given command by opening a process pipeline, but you must have permission.")]),e._v(" "),a("p",[e._v("suppose the "),a("code",[e._v("PHP")]),e._v(" code as following:")]),e._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$username")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$_POST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$command")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'ls -l /home/'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("if we enter "),a("code",[e._v("; rm -rf /")]),e._v(" to "),a("code",[e._v("username")]),e._v(" then we get the following "),a("code",[e._v("bash")]),e._v(" script")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l /home/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("then the bash will execute serially:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ls -l /home/")])]),e._v(" "),a("li",[a("code",[e._v("rm -rf /")]),e._v(" (remove everything from root directory)")])]),e._v(" "),a("h3",{attrs:{id:"avoid-attack-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avoid-attack-2"}},[e._v("#")]),e._v(" Avoid attack")]),e._v(" "),a("p",[e._v("So far, the most effective way to prevent OS command injection vulnerabilities is never to call OS commands from application layer code. There are alternative ways to use more secure platform "),a("code",[e._v("API")]),e._v(" to achieve the desired functionality in almost every case.")])])}),[],!1,null,null,null);t.default=n.exports}}]);