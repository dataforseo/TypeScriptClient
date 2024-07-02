**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonProductRankOverviewLiveRequestInfo

# Class: DataforseoLabsAmazonProductRankOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductRankOverviewLiveRequestInfo(data)

> **new DataforseoLabsAmazonProductRankOverviewLiveRequestInfo**(`data`?): [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Source

main.ts:105148

## Properties

### asins?

> **`optional`** **asins**: `string`[]

product IDs to compare
required field
product IDs to receive ranking data for;
the maximum number of ASINs you can specify in this array is 1000;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`asins`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#asins)

#### Source

main.ts:105108

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_code)

#### Source

main.ts:105138

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_name)

#### Source

main.ts:105131

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_code)

#### Source

main.ts:105124

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_name)

#### Source

main.ts:105116

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#tag)

#### Source

main.ts:105144

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:105157

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:105183

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Source

main.ts:105176
