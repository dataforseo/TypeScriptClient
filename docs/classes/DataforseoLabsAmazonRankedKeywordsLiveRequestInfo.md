[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRankedKeywordsLiveRequestInfo

# Class: DataforseoLabsAmazonRankedKeywordsLiveRequestInfo

Defined in: main.ts:112856

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRankedKeywordsLiveRequestInfo()

> **new DataforseoLabsAmazonRankedKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

Defined in: main.ts:112943

#### Parameters

##### data?

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:112861

product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#asin)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:112912

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["keyword_data.keyword_info.search_volume","in",[100,1000]];
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#filters)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:112901

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#ignore_synonyms)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:112891

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:112884

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:112896

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:112877

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:112869

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:112933

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:112928

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["keyword_data.keyword_info.competition,desc"]
default rule:
["ranked_serp_element.serp_item.rank_group,asc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:112939

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:112952

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:112987

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)

Defined in: main.ts:112980

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveRequestInfo`](DataforseoLabsAmazonRankedKeywordsLiveRequestInfo.md)
