[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductCompetitorsLiveRequestInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveRequestInfo

Defined in: main.ts:114172

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductCompetitorsLiveRequestInfo()

> **new DataforseoLabsAmazonProductCompetitorsLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

Defined in: main.ts:114254

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:114177

product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#asin)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:114223

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["full_metrics.amazon_serp.pos_1",">", 20]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#filters)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:114207

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:114200

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:114212

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:114193

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:114185

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:114244

offset in the results array of returned product competitors
optional field
default value: 0
if you specify the 10 value, the first ten product competitors in the results array will be omitted and the data will be provided for the successive product competitors

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:114239

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["full_metrics.amazon_serp.pos_1,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["full_metrics.amazon_serp.pos_1,desc","avg_position,desc"]
default rule:
["ranked_serp_element.serp_item.rank_group,asc"]

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:114250

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:114263

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:114297

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

Defined in: main.ts:114290

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)
