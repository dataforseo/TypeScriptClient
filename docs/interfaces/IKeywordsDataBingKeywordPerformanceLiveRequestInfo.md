[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordPerformanceLiveRequestInfo

# Interface: IKeywordsDataBingKeywordPerformanceLiveRequestInfo

## Implemented by

- [`KeywordsDataBingKeywordPerformanceLiveRequestInfo`](../classes/KeywordsDataBingKeywordPerformanceLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [device](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#device)
- [keywords](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#keywords)
- [language\_code](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#language_code)
- [language\_name](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#language_name)
- [location\_code](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#location_code)
- [location\_coordinate](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#location_coordinate)
- [location\_name](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#location_name)
- [match](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#match)
- [tag](IKeywordsDataBingKeywordPerformanceLiveRequestInfo.md#tag)

## Properties

### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: desktop, mobile, tablet, all
default value: all

#### Defined in

[main.ts:127681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127681)

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 2500.
The maximum number of characters for each keyword: 80.
The maximum number of words for each keyword phrase: 10.
the specified keywords will be converted to lowercase, data will be provided in a separate array

#### Defined in

[main.ts:127676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127676)

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
"en"

#### Defined in

[main.ts:127724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127724)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
English

#### Defined in

[main.ts:127718](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127718)

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
2840

#### Defined in

[main.ts:127703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127703)

___

### location\_coordinate

• `Optional` **location\_coordinate**: `string`

GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142

#### Defined in

[main.ts:127711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127711)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
"United States"

#### Defined in

[main.ts:127696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127696)

___

### match

• `Optional` **match**: `string`

keywords match type
optional field
can take the following values:
aggregate returns data across all match types;
broad returns data for all user queries containing the specified keyword with varying word order;
phrase returns data for all user queries containing the specified keyword with identical word order;
exact returns data for user query that matches the specified keyword;Note: the aggregate match type is applied by default

#### Defined in

[main.ts:127689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127689)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:127730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127730)
