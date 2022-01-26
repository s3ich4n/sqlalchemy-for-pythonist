(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{408:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"core-방식으로-행-삽입하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#core-방식으로-행-삽입하기"}},[t._v("#")]),t._v(" Core 방식으로 행 삽입하기")]),t._v(" "),a("p",[t._v("이번 챕터에서는 SQLAlchemy Core 방식으로 데이터를 INSERT 하는 방법을 배웁니다.")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"insert-를-통한-sql-표현식-구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-를-통한-sql-표현식-구성"}},[t._v("#")]),t._v(" "),a("code",[t._v("insert()")]),t._v(" 를 통한 SQL 표현식 구성")]),t._v(" "),a("p",[t._v("먼저 다음처럼 INSERT 구문을 만들 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" insert\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  stmt는 Insert 객체 인스턴스입니다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spongebob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fullname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Spongebob Squarepants"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'INSERT INTO user_account (name, fullname) VALUES (:name, :fullname)'")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("여기서 "),a("code",[t._v("user_table")]),t._v("은 우리가 이전 챕터에서 만든 "),a("code",[t._v("Table")]),t._v(" 객체입니다. 우리는 아래처럼 만들었었습니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MetaData\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String\n\nmetadata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MetaData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuser_table "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user_account'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" primary_key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    Column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fullname'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("p",[a("code",[t._v("stmt")]),t._v(" 를 보면 아직 매개변수가 매핑되지는 않았습니다."),a("br"),t._v("\n이는 다음처럼 "),a("code",[t._v("complie()")]),t._v(" 한 후에 확인할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" compiled "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spongebob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fullname'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Spongebob Squarepants'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"명령문-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#명령문-실행"}},[t._v("#")]),t._v(" 명령문 실행")]),t._v(" "),a("p",[t._v("이제 위에서 만든 INSERT 구문을 Core 방식으로 실행해봅시다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 위 코드는  결과적으로 아래 쿼리를 실행합니다.")]),t._v("\nBEGIN "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("implicit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nINSERT INTO user_account "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fullname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" VALUES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spongebob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Spongebob Squarepants'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCOMMIT\n")])])]),a("p",[a("code",[t._v("conn.execute(stmt)")]),t._v(" 의 반환 값을 받은 "),a("code",[t._v("result")]),t._v(" 에는 어떤 정보가 있을까요?"),a("br"),t._v(" "),a("code",[t._v("result")]),t._v(" 는 "),a("a",{attrs:{href:"https://docs.sqlalchemy.org/en/14/core/connections.html#sqlalchemy.engine.CursorResult",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("CursorResult")]),a("OutboundLink")],1),t._v(" 객체입니다."),a("br"),t._v("\n여기에는 실행 결과물에 대한 여러 정보를 담고있는데, 특히 데이터 행을 담고있는 "),a("a",{attrs:{href:"https://docs.sqlalchemy.org/en/14/core/connections.html#sqlalchemy.engine.Row",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Row")]),a("OutboundLink")],1),t._v(" 객체를 들고있습니다.")]),t._v(" "),a("p",[t._v("우리는 방금 데이터를 삽입했고, 이에 대한 결과물로 다음처럼 삽입된 데이터의 기본 키 값을 확인할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inserted_primary_key  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 이 역시 Row 객체입니다.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 기본 키가 여러 열로 구성될 수 있으므로 튜플로 표현됩니다.")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"connection-execute-에-insert-매개변수-전달하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connection-execute-에-insert-매개변수-전달하기"}},[t._v("#")]),t._v(" "),a("code",[t._v("Connection.execute()")]),t._v(" 에 INSERT 매개변수 전달하기")]),t._v(" "),a("p",[t._v("위에서는 다음처럼 "),a("code",[t._v("insert")]),t._v(" 에 "),a("code",[t._v("values")]),t._v(" 까지 함께 포함하여 구문울 만들었습니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'spongebob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fullname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Spongebob Squarepants"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("하지만 이 방법 외에도 다음처럼 "),a("code",[t._v("Connection.execute()")]),t._v(" 메서드에 매개변수를 전달하여 INSERT 구문을 실행할 수 있습니다."),a("br"),t._v("\n공식문서에는 이게 좀 더 일반적인 방법이라고 말합니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("         insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sandy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fullname"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sandy Cheeks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"patrick"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fullname"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Patrick Star"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("공식문서에는 하위 쿼리까지 포함하여 실행시키는 법을 별도의 블락에서 설명하고 있는데, 튜토리얼 내용으로는 다소 적합하지 않다고 판단하여 이 글에는 포함하지 않았습니다.\n이 내용이 궁금하신 분들은 "),a("a",{attrs:{href:"https://docs.sqlalchemy.org/en/14/tutorial/data_insert.html#insert-usually-generates-the-values-clause-automatically",target:"_blank",rel:"noopener noreferrer"}},[t._v("원문 링크"),a("OutboundLink")],1),t._v("를 참고하세요.")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"insert-from-select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-from-select"}},[t._v("#")]),t._v(" "),a("code",[t._v("Insert.from_select()")])]),t._v(" "),a("p",[t._v("다음처럼 SELECT 하여 받은 행들을 INSERT 하기 위한 쿼리가 필요한 경우가 있습니다.")]),t._v(" "),a("p",[t._v("이런 사례는 예를 들면 다음 코드처럼 작성할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" select_stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" user_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@aol.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" insert_stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email_address"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" select_stmt\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("insert_stmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nINSERT INTO address (user_id, email_address)\nSELECT user_account.id, user_account.name || :name_1 AS anon_1\nFROM user_account\n"""')]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"insert-returning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-returning"}},[t._v("#")]),t._v(" "),a("code",[t._v("Insert.returning()")])]),t._v(" "),a("p",[t._v("데이터베이스에서 쿼리 처리 후에 처리된 행의 값을 반환받아야 하는 경우가 있습니다. 이를 "),a("code",[t._v("RETURNING")]),t._v(" 문법이라 합니다."),a("br"),t._v("\n이에 대한 소개 글은 "),a("a",{attrs:{href:"https://blog.gaerae.com/2015/10/postgresql-insert-update-returning.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 블로그 글"),a("OutboundLink")],1),t._v("을 읽어보시면 좋을거 같습니다.")]),t._v(" "),a("p",[t._v("SQLAlchemy Core에서는 이런 "),a("code",[t._v("RETURNING")]),t._v(" 문법을 다음처럼 작성할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" insert_stmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("address_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address_table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("insert_stmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nINSERT INTO address (id, user_id, email_address)\nVALUES (:id, :user_id, :email_address)\nRETURNING address.id, address.email_address\n"""')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);