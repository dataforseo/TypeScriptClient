[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductRankOverviewLiveItem

# Class: DataforseoLabsAmazonProductRankOverviewLiveItem

## Implements

- [`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductRankOverviewLiveItem.md#constructor)

### Properties

- [asin](DataforseoLabsAmazonProductRankOverviewLiveItem.md#asin)
- [metrics](DataforseoLabsAmazonProductRankOverviewLiveItem.md#metrics)
- [se\_type](DataforseoLabsAmazonProductRankOverviewLiveItem.md#se_type)

### Methods

- [init](DataforseoLabsAmazonProductRankOverviewLiveItem.md#init)
- [toJSON](DataforseoLabsAmazonProductRankOverviewLiveItem.md#tojson)
- [fromJS](DataforseoLabsAmazonProductRankOverviewLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductRankOverviewLiveItem**(`data?`): [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductRankOverviewLiveItem`](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md) |

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Defined in

[main.ts:100716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100716)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveItem](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[asin](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#asin)

#### Defined in

[main.ts:100710](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100710)

___

### metrics

• `Optional` **metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

average keyword position of the product

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveItem](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[metrics](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#metrics)

#### Defined in

[main.ts:100712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100712)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonProductRankOverviewLiveItem](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md).[se_type](../interfaces/IDataforseoLabsAmazonProductRankOverviewLiveItem.md#se_type)

#### Defined in

[main.ts:100706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100706)

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

[main.ts:100725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100725)

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

[main.ts:100744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100744)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductRankOverviewLiveItem`](DataforseoLabsAmazonProductRankOverviewLiveItem.md)

#### Defined in

[main.ts:100737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100737)
