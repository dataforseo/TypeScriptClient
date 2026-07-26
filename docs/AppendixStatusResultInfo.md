# AppendixStatusResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**api** | **string** | name of the API. the list of APIs:. serp. keywords_data. appendix. dataforseo_labs. domain_analytics. merchant. on_page. business_data. backlinks. app_data. content_analysis. content_generation |[optional]|
**status** | **string** | current status. you can find all information about the statuses of our endpoints for the last 60 days here. the list of possible current statuses:. major_outage. partial_outage. long_response_time. long_execution_time. webhook_delay. send_delay |[optional]|
**endpoints** | **AppendixStatusEndpointsInfo[]** | array of objects that contain status information for API endpoints |[optional]|