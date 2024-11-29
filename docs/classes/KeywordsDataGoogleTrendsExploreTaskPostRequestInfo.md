[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsExploreTaskPostRequestInfo

# Class: KeywordsDataGoogleTrendsExploreTaskPostRequestInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTaskPostRequestInfo()

> **new KeywordsDataGoogleTrendsExploreTaskPostRequestInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Defined in

main.ts:133369

## Properties

### category\_code?

> `optional` **category\_code**: `number`

google trends search category
optional field
if you don’t specify this field, the 0 value will be applied by default and the search will be carried out across all available categories
you can receive the list of available categories with their category_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/google_trends/categories

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`category_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#category_code)

#### Defined in

main.ts:133303

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`date_from`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#date_from)

#### Defined in

main.ts:133312

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`date_to`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#date_to)

#### Defined in

main.ts:133319

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of items returned
optional field
to speed up the execution of the request, specify one item at a time;
possible values:
"google_trends_graph", "google_trends_map", "google_trends_topics_list","google_trends_queries_list"
default value:
"google_trends_graph"

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`item_types`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#item_types)

#### Defined in

main.ts:133337

***

### keywords?

> `optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 5
Note: the comma characters (,) in the specified keywords will be unset and ignored
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#keywords)

#### Defined in

main.ts:133264

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
optional field
default value: en
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
en

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:133296

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
optional field
default value: English
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
English

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:133288

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
2840

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:133280

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
United Kingdom

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:133272

***

### pingback\_url?

> `optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:133359

***

### postback\_url?

> `optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:133348

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:133365

***

### time\_range?

> `optional` **time\_range**: `string`

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

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`time_range`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#time_range)

#### Defined in

main.ts:133329

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[`type`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#type)

#### Defined in

main.ts:133298

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:133378

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:133416

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Defined in

main.ts:133409
