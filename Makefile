.PHONY: dev prod start-dev start-prod

dev:
	npx zarbis development

prod:
	npx zarbis production

start-dev: dist/development/server
	node dist/development/server

start-prod: dist/production/server
	node dist/production/server