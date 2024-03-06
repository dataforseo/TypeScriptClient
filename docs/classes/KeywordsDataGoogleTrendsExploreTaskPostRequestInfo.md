[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreTaskPostRequestInfo

# Class: KeywordsDataGoogleTrendsExploreTaskPostRequestInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#constructor)

### Properties

- [category\_code](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#category_code)
- [date\_from](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#date_from)
- [date\_to](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#date_to)
- [item\_types](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#item_types)
- [keywords](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#keywords)
- [language\_code](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#language_code)
- [language\_name](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#language_name)
- [location\_code](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#location_code)
- [location\_name](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#location_name)
- [pingback\_url](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#pingback_url)
- [postback\_url](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#postback_url)
- [tag](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#tag)
- [time\_range](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#time_range)
- [type](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#type)

### Methods

- [init](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreTaskPostRequestInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Defined in

[main.ts:119897](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119897)

## Properties

### category\_code

• `Optional` **category\_code**: `number`

google trends search category
optional field
if you don’t specify this field, the 0 value will be applied by default and the search will be carried out across all available categories
you can receive the list of available categories with their category_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/google_trends/categories

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[category_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#category_code)

#### Defined in

[main.ts:119829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119829)

___


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

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[date_from](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#date_from)

#### Defined in

[main.ts:119838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119838)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[date_to](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#date_to)

#### Defined in

[main.ts:119845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119845)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of items returned
optional field
if you don’t specify this field, all items will be presented in the response;
you can set only one item to speed up the execution of the request
possible values:
"item_types": [
"google_trends_graph",
"google_trends_map",
"google_trends_topics_list",
"google_trends_queries_list"
]

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[item_types](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#item_types)

#### Defined in

[main.ts:119867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119867)

___


### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 5
Note: comma symbols (,) in the specified keywords will be unset and ignored

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[keywords](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#keywords)

#### Defined in

[main.ts:119790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119790)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
default value: en
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
en

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[language_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#language_code)

#### Defined in

[main.ts:119822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119822)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
default value: English
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
English

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[language_name](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#language_name)

#### Defined in

[main.ts:119814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119814)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
2840

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[location_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#location_code)

#### Defined in

[main.ts:119806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119806)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
United Kingdom

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[location_name](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#location_name)

#### Defined in

[main.ts:119798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119798)

___


### pingback\_url

• `Optional` **pingback\_url**: `string`

notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special symbols in pingback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[pingback_url](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#pingback_url)

#### Defined in

[main.ts:119887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119887)

___


### postback\_url

• `Optional` **postback\_url**: `string`

return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special symbols in postback_url will be urlencoded;
i.a., the # symbol will be encoded into %23

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[postback_url](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#postback_url)

#### Defined in

[main.ts:119877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119877)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[tag](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#tag)

#### Defined in

[main.ts:119893](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119893)

___


### time\_range

• `Optional` **time\_range**: `string`

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

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[time_range](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#time_range)

#### Defined in

[main.ts:119855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119855)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md).[type](../interfaces/IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md#type)

#### Defined in

[main.ts:119824](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119824)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:119906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119906)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:119944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119944)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)

#### Defined in

[main.ts:119937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119937)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")