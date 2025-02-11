[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreLiveRequestInfo

# Class: KeywordsDataGoogleTrendsExploreLiveRequestInfo

Defined in: main.ts:134794

## Implements

- [`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreLiveRequestInfo()

> **new KeywordsDataGoogleTrendsExploreLiveRequestInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

Defined in: main.ts:134888

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:134843

google trends search category
optional field
if you don’t specify this field, the 0 value will be applied by default and the search will be carried out across all available categories
you can receive the list of available categories with their category_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/google_trends/categories

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`category_code`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#category_code)

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:134852

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:134859

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#date_to)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:134878

types of items returned
optional field
to speed up the execution of the request, specify one item at a time;
possible values:
"google_trends_graph", "google_trends_map", "google_trends_topics_list","google_trends_queries_list"
default value:
"google_trends_graph"
Note: to obtain google_trends_topics_list and google_trends_queries_list items, specify no more than 1 keyword in the keywords field

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`item_types`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#item_types)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:134802

keywords
required field
if keywords are not specified, the results will not contain keyword-related data;
The maximum number of keywords you can specify: 5
comma characters (,) in the specified keywords will be unset and ignored;
Note: to obtain google_trends_topics_list and google_trends_queries_list items, specify no more than 1 keyword;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:134836

search engine language code
optional field
default value: en
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
en

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:134828

full name of search engine language
optional field
default value: English
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
English

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`[]

Defined in: main.ts:134820

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can use this field as an array to set several locations, each corresponding to a specific keyword – learn more;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
2840

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`[]

Defined in: main.ts:134811

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can use this field as an array to set several locations, each corresponding to a specific keyword – learn more;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
United Kingdom

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:134884

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#tag)

***

### time\_range?

> `optional` **time\_range**: `string`

Defined in: main.ts:134869

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_hour, past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years
possible values for web only:
2004_present
possible values for news, youtube, images, froogle:
2008_present

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`time_range`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#time_range)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:134838

type of element

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[`type`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:134897

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:134941

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

Defined in: main.ts:134934

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)
