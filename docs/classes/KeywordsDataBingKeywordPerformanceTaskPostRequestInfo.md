[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTaskPostRequestInfo

# Class: KeywordsDataBingKeywordPerformanceTaskPostRequestInfo

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceTaskPostRequestInfo()

> **new KeywordsDataBingKeywordPerformanceTaskPostRequestInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](KeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](KeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)

#### Defined in

main.ts:144466

## Properties

### device?

> `optional` **device**: `string`

device type
optional field
specify this field if you want to get the data for a particular device typepossible values: desktop, mobile, tablet, all
default value: all

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`device`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#device)

#### Defined in

main.ts:144391

***

### keywords?

> `optional` **keywords**: `string`[]

keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 80
The maximum number of words for each keyword phrase: 10
the specified keywords will be converted to lowercase, data will be provided in a separate array
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`keywords`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#keywords)

#### Defined in

main.ts:144386

***

### language\_code?

> `optional` **language\_code**: `string`

search engine language code
required field if you don’t specify language_name
you can receive the list of available locations and languages by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages
example:
"en"

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`language_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#language_code)

#### Defined in

main.ts:144434

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

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`language_name`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#language_name)

#### Defined in

main.ts:144428

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

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`location_code`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#location_code)

#### Defined in

main.ts:144413

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

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`location_coordinate`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#location_coordinate)

#### Defined in

main.ts:144421

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

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`location_name`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#location_name)

#### Defined in

main.ts:144406

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

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`match`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#match)

#### Defined in

main.ts:144399

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

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`pingback_url`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#pingback_url)

#### Defined in

main.ts:144456

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

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`postback_url`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#postback_url)

#### Defined in

main.ts:144445

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md#tag)

#### Defined in

main.ts:144462

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:144475

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:144506

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](KeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](KeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)

#### Defined in

main.ts:144499
