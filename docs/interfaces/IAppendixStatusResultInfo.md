[Documentation](../README.md) / [Exports](../modules.md) / IAppendixStatusResultInfo

# Interface: IAppendixStatusResultInfo

## Implemented by

- [`AppendixStatusResultInfo`](../classes/AppendixStatusResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [api](IAppendixStatusResultInfo.md#api)
- [endpoints](IAppendixStatusResultInfo.md#endpoints)
- [status](IAppendixStatusResultInfo.md#status)

## Properties

### api

• `Optional` **api**: `string`

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

#### Defined in

main.ts:218506

___

### endpoints

• `Optional` **endpoints**: [`AppendixStatusEndpointsInfo`](../classes/AppendixStatusEndpointsInfo.md)[]

array of objects that contain status information for API endpoints

#### Defined in

main.ts:218518

___

### status

• `Optional` **status**: `string`

current status
you can find all information about your API statuses for the last 60 days here
the list of possible current statuses:
major_outage
partial_outage
long_response_time
long_execution_time
webhook_delay
send_delay

#### Defined in

main.ts:218516
