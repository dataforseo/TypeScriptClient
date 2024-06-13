**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo

# Class: DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo(data)

> **new DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

#### Source

main.ts:102892

## Properties

### depth?

> **`optional`** **depth**: `number`

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

#### Source

main.ts:102862

***

### ignore\_synonyms?

> **`optional`** **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)

#### Source

main.ts:102872

***

### include\_seed\_keyword?

> **`optional`** **include\_seed\_keyword**: `boolean`

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`include_seed_keyword`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)

#### Source

main.ts:102867

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
UTF-8 encoding
a keyword should be at least 3 characters long;
the keywords should be specified in the lowercase format

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`keyword`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#keyword)

#### Source

main.ts:102818

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#language_code)

#### Source

main.ts:102850

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#language_name)

#### Source

main.ts:102843

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#limit)

#### Source

main.ts:102877

***

### location\_code?

> **`optional`** **location\_code**: `number`

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

#### Source

main.ts:102836

***

### location\_name?

> **`optional`** **location\_name**: `string`

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

#### Source

main.ts:102827

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#offset)

#### Source

main.ts:102882

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md#tag)

#### Source

main.ts:102888

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:102901

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:102928

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRelatedKeywordsLiveRequestInfo.md)

#### Source

main.ts:102921
