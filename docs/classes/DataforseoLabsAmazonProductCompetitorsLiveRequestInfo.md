[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAmazonProductCompetitorsLiveRequestInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductCompetitorsLiveRequestInfo()

> **new DataforseoLabsAmazonProductCompetitorsLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Defined in

main.ts:107381

## Properties

### asin?

> `optional` **asin**: `string`

product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#asin)

#### Defined in

main.ts:107304

***

### filters?

> `optional` **filters**: `any`[]

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

#### Defined in

main.ts:107350

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:107334

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:107327

***

### limit?

> `optional` **limit**: `number`

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#limit)

#### Defined in

main.ts:107339

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:107320

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:107312

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned product competitors
optional field
default value: 0
if you specify the 10 value, the first ten product competitors in the results array will be omitted and the data will be provided for the successive product competitors

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#offset)

#### Defined in

main.ts:107371

***

### order\_by?

> `optional` **order\_by**: `string`[]

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

#### Defined in

main.ts:107366

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#tag)

#### Defined in

main.ts:107377

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:107390

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:107424

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Defined in

main.ts:107417
