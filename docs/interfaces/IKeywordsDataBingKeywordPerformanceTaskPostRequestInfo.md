[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo

# Interface: IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo

## Implemented by

- [`KeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../classes/KeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [device](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#device)
- [keywords](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#keywords)
- [language\_code](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#language_code)
- [language\_name](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#language_name)
- [location\_code](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#location_code)
- [location\_coordinate](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#location_coordinate)
- [location\_name](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#location_name)
- [match](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#match)
- [pingback\_url](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#pingback_url)
- [postback\_url](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#postback_url)
- [tag](IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#tag)

## Properties

### device

• `Optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: desktop, mobile, tablet, all
default value: all

#### Defined in

main.ts:132118

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

main.ts:132113

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
"en"

#### Defined in

main.ts:132161

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

main.ts:132155

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

main.ts:132140

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

main.ts:132148

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

main.ts:132133

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

main.ts:132126

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

#### Defined in

main.ts:132181

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

#### Defined in

main.ts:132171

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:132187
