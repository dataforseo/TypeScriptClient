**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppendixStatusResultInfo

# Interface: IAppendixStatusResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### api?

> **`optional`** **api**: `string`

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

#### Source

main.ts:221822

***

### endpoints?

> **`optional`** **endpoints**: [`AppendixStatusEndpointsInfo`](../classes/AppendixStatusEndpointsInfo.md)[]

array of objects that contain status information for API endpoints

#### Source

main.ts:221834

***

### status?

> **`optional`** **status**: `string`

current status
you can find all information about your API statuses for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Source

main.ts:221832
