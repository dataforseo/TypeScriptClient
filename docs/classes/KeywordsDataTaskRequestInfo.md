[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataTaskRequestInfo

# Class: KeywordsDataTaskRequestInfo

## Hierarchy

- **`KeywordsDataTaskRequestInfo`**
  
  ↳ [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)

## Implements

- [`IKeywordsDataTaskRequestInfo`](../interfaces/IKeywordsDataTaskRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataTaskRequestInfo.md#constructor)

### Properties

- [date\_from](KeywordsDataTaskRequestInfo.md#date_from)
- [date\_to](KeywordsDataTaskRequestInfo.md#date_to)
- [include\_adult\_keywords](KeywordsDataTaskRequestInfo.md#include_adult_keywords)
- [keywords](KeywordsDataTaskRequestInfo.md#keywords)
- [language\_code](KeywordsDataTaskRequestInfo.md#language_code)
- [language\_name](KeywordsDataTaskRequestInfo.md#language_name)
- [location\_code](KeywordsDataTaskRequestInfo.md#location_code)
- [location\_coordinate](KeywordsDataTaskRequestInfo.md#location_coordinate)
- [location\_name](KeywordsDataTaskRequestInfo.md#location_name)
- [pingback\_url](KeywordsDataTaskRequestInfo.md#pingback_url)
- [postback\_url](KeywordsDataTaskRequestInfo.md#postback_url)
- [search\_partners](KeywordsDataTaskRequestInfo.md#search_partners)
- [sort\_by](KeywordsDataTaskRequestInfo.md#sort_by)
- [tag](KeywordsDataTaskRequestInfo.md#tag)

### Methods

- [init](KeywordsDataTaskRequestInfo.md#init)
- [toJSON](KeywordsDataTaskRequestInfo.md#tojson)
- [fromJS](KeywordsDataTaskRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataTaskRequestInfo**(`data?`): [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataTaskRequestInfo`](../interfaces/IKeywordsDataTaskRequestInfo.md) |

#### Returns

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)

#### Defined in

[main.ts:69405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69405)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
date format: "yyyy-mm-dd"
minimal value: 4 years from the current date
by default, data is returned for the past 12 months;
Note: the indicated date cannot be greater than that specified in date_to and/or yesterday’s date;if Status endpoint returns false in the actual_data field, date_from can be set to the month before last and prior;
if Status endpoint returns true in the actual_data field, date_from can be set to the last month and prior

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[date_from](../interfaces/IKeywordsDataTaskRequestInfo.md#date_from)

#### Defined in

[main.ts:69356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69356)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
Note: the indicated date cannot be greater than the past month, Google Ads does not return data on the current month;
if you don’t specify this field, yesterday’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2022-11-30"

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[date_to](../interfaces/IKeywordsDataTaskRequestInfo.md#date_to)

#### Defined in

[main.ts:69364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69364)

___


### include\_adult\_keywords

• `Optional` **include\_adult\_keywords**: `boolean`

include keywords associated with adult content
optional field
if set to true, adult keywords will be included in the response
default value: false
note that the API may return no data for such keywords due to Google Ads restrictions

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[include_adult_keywords](../interfaces/IKeywordsDataTaskRequestInfo.md#include_adult_keywords)

#### Defined in

[main.ts:69370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69370)

___


### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the keywords you specify will be converted to a lowercase format
Note #1: Google Ads may return no data for certain groups of keywords;
Note #2: Google Ads provides combined search volume values for groups of similar keywords
to obtain search volume for similar keywords, we recommend submitting such keywords in separate requests;
Note #3: Google Ads doesn’t allow using certain symbols and characters (e.g., UTF symbols, emojis), so you can’t use them when setting a task;
to learn more about which symbols can be used, please refer to this article

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[keywords](../interfaces/IKeywordsDataTaskRequestInfo.md#keywords)

#### Defined in

[main.ts:69306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69306)

___


### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
en

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[language_code](../interfaces/IKeywordsDataTaskRequestInfo.md#language_code)

#### Defined in

[main.ts:69343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69343)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/languages
example:
English

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[language_name](../interfaces/IKeywordsDataTaskRequestInfo.md#language_name)

#### Defined in

[main.ts:69337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69337)

___


### location\_code

• `Optional` **location\_code**: `number`

search engine location code
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_coordinate;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
2840

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[location_code](../interfaces/IKeywordsDataTaskRequestInfo.md#location_code)

#### Defined in

[main.ts:69322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69322)

___


### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_name or location_code;
location_coordinate parameter should be specified in the “latitude,longitude” format;
the data will be provided for the country the specified coordinates belong to;
example:
52.6178549,-155.352142

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[location_coordinate](../interfaces/IKeywordsDataTaskRequestInfo.md#location_coordinate)

#### Defined in

[main.ts:69331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69331)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
optional field
if you do not indicate the location, you will receive worldwide results, i.e., for all available locations;
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_ads/locations
example:
London,England,United Kingdom

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[location_name](../interfaces/IKeywordsDataTaskRequestInfo.md#location_name)

#### Defined in

[main.ts:69314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69314)

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

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[pingback_url](../interfaces/IKeywordsDataTaskRequestInfo.md#pingback_url)

#### Defined in

[main.ts:69395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69395)

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

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[postback_url](../interfaces/IKeywordsDataTaskRequestInfo.md#postback_url)

#### Defined in

[main.ts:69385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69385)

___


### search\_partners

• `Optional` **search\_partners**: `boolean`

include Google search partners
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Google and partner sites that host Google search;
default value: false – results are returned for Google search sites

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[search_partners](../interfaces/IKeywordsDataTaskRequestInfo.md#search_partners)

#### Defined in

[main.ts:69348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69348)

___


### sort\_by

• `Optional` **sort\_by**: `string`

results sorting parameters
optional field
use these parameters to sort the results by relevance, search_volume, competition_index, low_top_of_page_bid, or high_top_of_page_bid in the descending order
default value: relevance

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[sort_by](../interfaces/IKeywordsDataTaskRequestInfo.md#sort_by)

#### Defined in

[main.ts:69375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69375)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data array of the response

#### Implementation of

[IKeywordsDataTaskRequestInfo](../interfaces/IKeywordsDataTaskRequestInfo.md).[tag](../interfaces/IKeywordsDataTaskRequestInfo.md#tag)

#### Defined in

[main.ts:69401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69401)

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

[main.ts:69414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69414)

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

[main.ts:69448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69448)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)

#### Defined in

[main.ts:69441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L69441)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")