.PHONY: dev prod start-dev start-prod

node_modules:
	yarn

dev: node_modules
	npx zarbis development

prod: node_modules
	npx zarbis production

start-dev: dist/development/server
	node dist/development/server

start-prod: dist/production/server
	node dist/production/server