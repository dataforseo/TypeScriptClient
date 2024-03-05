[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductRankOverviewLiveRequestInfo

# Class: DataforseoLabsAmazonProductRankOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#constructor)

### Properties

- [asins](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#asins)
- [language\_code](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_name)
- [location\_code](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_name)
- [tag](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductRankOverviewLiveRequestInfo**(`data?`): [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Defined in

[main.ts:100466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100466)

## Properties

### asins

• `Optional` **asins**: `string`[]

product IDs to compare
required field
product IDs to receive ranking data for;
the maximum number of ASINs you can specify in this array is 1000;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[asins](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#asins)

#### Defined in

[main.ts:100426](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100426)

___

### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:100456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100456)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:100449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100449)

___

### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:100442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100442)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:100434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100434)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md#tag)

#### Defined in

[main.ts:100462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100462)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:100475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100475)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:100501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100501)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveRequestInfo`](DataforseoLabsAmazonProductRankOverviewLiveRequestInfo.md)

#### Defined in

[main.ts:100494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100494)
