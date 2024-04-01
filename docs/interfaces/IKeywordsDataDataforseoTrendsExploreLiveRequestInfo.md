[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataDataforseoTrendsExploreLiveRequestInfo

# Interface: IKeywordsDataDataforseoTrendsExploreLiveRequestInfo

## Implemented by

- [`KeywordsDataDataforseoTrendsExploreLiveRequestInfo`](../classes/KeywordsDataDataforseoTrendsExploreLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#date_from)
- [date\_to](IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#date_to)
- [keywords](IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#keywords)
- [location\_code](IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#location_code)
- [location\_name](IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#location_name)
- [tag](IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#tag)
- [time\_range](IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#time_range)
- [type](IKeywordsDataDataforseoTrendsExploreLiveRequestInfo.md#type)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:124880

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

main.ts:124887

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
the maximum number of keywords you can specify: 5

#### Defined in

main.ts:124851

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_code belongs to;
example:
2840

#### Defined in

main.ts:124869

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_name belongs to;
example:
United Kingdom

#### Defined in

main.ts:124860

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:124899

___

### time\_range

• `Optional` **time\_range**: `string`

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years

#### Defined in

main.ts:124893

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:124871
