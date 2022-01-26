(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{412:function(t,e,s){"use strict";s.r(e);var a=s(56),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"연결-설정하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#연결-설정하기"}},[t._v("#")]),t._v(" 연결 설정하기")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"데이터베이스와-연결하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#데이터베이스와-연결하기"}},[t._v("#")]),t._v(" 데이터베이스와 연결하기")]),t._v(" "),s("p",[t._v("비교적 가벼운 데이터베이스인 SQLite에 연결하는 작업을 해봅시다."),s("br"),t._v("\n다음처럼 해볼 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_engine\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" engine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sqlite+pysqlite:///:memory:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" echo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" future"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("sqlalchemy.create_engine")]),t._v(" 함수를 이용하여 데이터베이스와 연결을 맺는 "),s("strong",[t._v("'엔진'")]),t._v(" 을 만듭니다.")]),t._v(" "),s("li",[t._v("첫 번째 인자로 "),s("strong",[s("code",[t._v("문자열 URL")])]),t._v(" 을 넘깁니다.\n"),s("ul",[s("li",[t._v("일반적으로 "),s("code",[t._v("문자열 URL")]),t._v("  은 "),s("code",[t._v("dialect+driver://username:password@host:port/database")]),t._v(" 의 형태로 구성됩니다.\n"),s("ul",[s("li",[s("code",[t._v("driver")]),t._v(" 값을 주지 않으면 "),s("code",[t._v("sqlalchemy")]),t._v(" 의 기본 설정 값이 들어가게 됩니다.")])])]),t._v(" "),s("li",[t._v("여기서는 "),s("code",[t._v("sqlite+pysqlite:///test.db")]),t._v(" 가 "),s("code",[t._v("문자열 URL")]),t._v(" 입니다.\n"),s("ul",[s("li",[s("code",[t._v("sqlite")]),t._v(" 의 경우 "),s("code",[t._v("sqlite://<nohostname>/<path>")]),t._v(" 의 포맷을 따릅니다.")])])])])]),t._v(" "),s("li",[t._v("문자열 "),s("code",[t._v("URL")]),t._v(" 인 "),s("code",[t._v("sqlite:///test.db")]),t._v(" 에서 다음 정보들을 알 수 있습니다.\n"),s("ul",[s("li",[s("strong",[t._v("어떤 데이터베이스")]),t._v("를 사용할 것인지 ("),s("code",[t._v("dialect")]),t._v(" 라고 하며, 이 경우 "),s("code",[t._v("sqlite")]),t._v(" 입니다)")]),t._v(" "),s("li",[s("strong",[t._v("어떤 데이터베이스 API")]),t._v(" (DB와 상호작용하는 드라이버) 를 사용할 것인지 (이 경우 "),s("code",[t._v("pysqlite")]),t._v(" 입니다)")]),t._v(" "),s("li",[t._v("데이터베이스를 "),s("strong",[t._v("어떻게 찾을지")]),t._v(" (이 경우 "),s("code",[t._v("sqlite")]),t._v(" 에서 제공하는 인메모리를 사용합니다.)")])])]),t._v(" "),s("li",[s("code",[t._v("echo")]),t._v(" 파라미터의 값을 "),s("code",[t._v("True")]),t._v(" 를 주면 실행되는 모든 SQL을  출력해줍니다.")])]),t._v(" "),s("p",[t._v("엔진을 만들었지만, 아직 실제로 연결을 시도한 것은 아닙니다. 실제 연결은 데이터베이스에 대해 작업을 수행하라는 요청을 처음받을 때만 발생합니다.")])])}),[],!1,null,null,null);e.default=r.exports}}]);