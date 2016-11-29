current_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

all: test

install:
	@npm i

test: server test-server
	@${npm_bin}/macaca doctor
	@${npm_bin}/macaca run --verbose -d ./test

test-server:
	@node ./server.js --port 6789 &

server: install
	@${npm_bin}/startserver -s -p 4567 &

.PHONY: test
