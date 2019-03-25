data_services_up:
	docker-compose -f docker-compose.data-only.yml up -d

data_services_down:
	docker-compose -f docker-compose.data-only.yml down