[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingKeywordPerformanceLiveRequestInfo

# Class: KeywordsDataBingKeywordPerformanceLiveRequestInfo

## Implements

- [`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceLiveRequestInfo()

> **new KeywordsDataBingKeywordPerformanceLiveRequestInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceLiveRequestInfo`](KeywordsDataBingKeywordPerformanceLiveRequestInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveRequestInfo`](KeywordsDataBingKeywordPerformanceLiveRequestInfo.md)

#### Defined in

main.ts:133521

## Properties

### device?

> `optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: desktop, mobile, tablet, all
default value: all

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#device)

#### Defined in

main.ts:133468

***

### keywords?

> `optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#keywords)

#### Defined in

main.ts:133463

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
"en"

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#language_code)

#### Defined in

main.ts:133511

***

### language\_name?

> `optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
English

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#language_name)

#### Defined in

main.ts:133505

***

### location\_code?

> `optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
2840

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#location_code)

#### Defined in

main.ts:133490

***

### location\_coordinate?

> `optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#location_coordinate)

#### Defined in

main.ts:133498

***

### location\_name?

> `optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
"United States"

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#location_name)

#### Defined in

main.ts:133483

***

### match?

> `optional` **match**: `string`

keywords match type
optional field
can take the following values:
aggregate returns data across all match types;
broad returns data for all user queries containing the specified keyword with varying word order;
phrase returns data for all user queries containing the specified keyword with identical word order;
exact returns data for user query that matches the specified keyword;Note: the aggregate match type is applied by default

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`match`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#match)

#### Defined in

main.ts:133476

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceLiveRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#tag)

#### Defined in

main.ts:133517

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:133530

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:133559

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLiveRequestInfo`](KeywordsDataBingKeywordPerformanceLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveRequestInfo`](KeywordsDataBingKeywordPerformanceLiveRequestInfo.md)

#### Defined in

main.ts:133552
