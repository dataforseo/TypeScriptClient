[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo

# Class: DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo

Defined in: main.ts:112280

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo()

> **new DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

Defined in: main.ts:112360

#### Parameters

##### data?

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:112330

keyword search depth
optional field
default value: 1;
number of the returned results depends on the value you set in this field;
you can specify a level from 0 to 4;
estimated number of keywords for each level (maximum):
0 – the keyword set in the keyword field
1 – 6 keywords
2 – 42 keywords
3 – 258 keywords
4 – 1554 keywords

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`depth`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#depth)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:112340

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)

***

### include\_seed\_keyword?

> `optional` **include\_seed\_keyword**: `boolean`

Defined in: main.ts:112335

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`include_seed_keyword`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:112286

keyword
required field
UTF-8 encoding
the keywords should be specified in the lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`keyword`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:112318

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:112311

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:112345

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:112304

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:112295

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:112350

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#offset)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:112356

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:112369

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:112396

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

Defined in: main.ts:112389

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)
