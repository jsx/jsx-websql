
all:

build:
	mkdir -p lib/js
	cp src/websql-head.jsx lib/js/websql.jsx
	../JSX/idl2jsx/idl2jsx.pl http://www.w3.org/TR/webdatabase/ >> lib/js/websql.jsx

test:
	prove
