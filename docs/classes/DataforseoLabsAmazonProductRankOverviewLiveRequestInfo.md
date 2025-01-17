[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductRankOverviewLiveRequestInfo

# Class: DataforseoLabsAmazonProductRankOverviewLiveRequestInfo

Defined in: main.ts:113614

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveRequestInfo()

> **new DataforseoLabsAmazonProductRankOverviewLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

Defined in: main.ts:113663

#### Parameters

##### data?

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

## Properties

### asins?

> `optional` **asins**: `string`[]

Defined in: main.ts:113623

product IDs to compare
required field
product IDs to receive ranking data for;
the maximum number of ASINs you can specify in this array is 1000;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint
Note: all letters in ASIN code must be specified in uppercase format;
example:
B01LW2SL7R

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`asins`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#asins)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:113653

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:113646

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:113639

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:113631

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_name)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:113659

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113672

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:113698

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

Defined in: main.ts:113691

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)
