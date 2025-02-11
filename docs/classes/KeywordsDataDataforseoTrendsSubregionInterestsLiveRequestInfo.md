[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo

# Class: KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo

Defined in: main.ts:136398

## Implements

- [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo()

> **new KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo**(`data`?): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

Defined in: main.ts:136457

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:136434

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:136441

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#date_to)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:136405

keywords
required field
the maximum number of keywords you can specify: 5
avoid symbols and special characters (e.g., UTF symbols, emojis);
specifying non-Latin characters, you’ll get data for the countries where they are used
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#keywords)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:136423

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_code belongs to;
example:
2840

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:136414

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_name belongs to;
example:
United Kingdom

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:136453

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#tag)

***

### time\_range?

> `optional` **time\_range**: `string`

Defined in: main.ts:136447

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`time_range`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#time_range)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:136425

type of element

#### Implementation of

[`IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md).[`type`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:136466

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:136494

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)

Defined in: main.ts:136487

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo.md)
