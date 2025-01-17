[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppendixStatusResultInfo

# Interface: IAppendixStatusResultInfo

Defined in: main.ts:239586

## Indexable

\[`key`: `string`\]: `any`

## Properties

### api?

> `optional` **api**: `string`

Defined in: main.ts:239601

name of the API
the list of APIs:
serp
keywords_data
appendix
dataforseo_labs
domain_analytics
merchant
on_page
business_data
backlinks
app_data
content_analysis
content_generation

***

### endpoints?

> `optional` **endpoints**: [`AppendixStatusEndpointsInfo`](../classes/AppendixStatusEndpointsInfo.md)[]

Defined in: main.ts:239613

array of objects that contain status information for API endpoints

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:239611

current status
you can find all information about your API statuses for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay
