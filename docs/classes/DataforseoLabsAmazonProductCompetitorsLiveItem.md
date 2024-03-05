[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductCompetitorsLiveItem

# Class: DataforseoLabsAmazonProductCompetitorsLiveItem

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductCompetitorsLiveItem.md#constructor)

### Properties

- [asin](DataforseoLabsAmazonProductCompetitorsLiveItem.md#asin)
- [avg\_position](DataforseoLabsAmazonProductCompetitorsLiveItem.md#avg_position)
- [competitor\_metrics](DataforseoLabsAmazonProductCompetitorsLiveItem.md#competitor_metrics)
- [full\_metrics](DataforseoLabsAmazonProductCompetitorsLiveItem.md#full_metrics)
- [intersections](DataforseoLabsAmazonProductCompetitorsLiveItem.md#intersections)
- [se\_type](DataforseoLabsAmazonProductCompetitorsLiveItem.md#se_type)
- [sum\_position](DataforseoLabsAmazonProductCompetitorsLiveItem.md#sum_position)

### Methods

- [init](DataforseoLabsAmazonProductCompetitorsLiveItem.md#init)
- [toJSON](DataforseoLabsAmazonProductCompetitorsLiveItem.md#tojson)
- [fromJS](DataforseoLabsAmazonProductCompetitorsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductCompetitorsLiveItem**(`data?`): [`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductCompetitorsLiveItem`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md) |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Defined in

[main.ts:101235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101235)

## Properties

### asin

• `Optional` **asin**: `string`

ASIN of the product
unique product identifier on Amazon;
for more information, refer to this help center guide

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveItem](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[asin](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#asin)

#### Defined in

[main.ts:101214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101214)

___

### avg\_position

• `Optional` **avg\_position**: `number`

average position of the product in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveItem](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[avg_position](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#avg_position)

#### Defined in

[main.ts:101218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101218)

___

### competitor\_metrics

• `Optional` **competitor\_metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

metrics for intersecting keywords
ranking data relevant to the keywords that the provided asin shares with the target asin;
Note: in this object ranking data is provided for the returned competitor’s asin

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveItem](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[competitor_metrics](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#competitor_metrics)

#### Defined in

[main.ts:101228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101228)

___

### full\_metrics

• `Optional` **full\_metrics**: [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

metrics for all keywords of the product
full overview of ranking data relevant to all keywords that the provided asin is ranking for

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveItem](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[full_metrics](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#full_metrics)

#### Defined in

[main.ts:101231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101231)

___

### intersections

• `Optional` **intersections**: `number`

number of intersecting keywords

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveItem](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[intersections](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#intersections)

#### Defined in

[main.ts:101224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101224)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveItem](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[se_type](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#se_type)

#### Defined in

[main.ts:101210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101210)

___

### sum\_position

• `Optional` **sum\_position**: `number`

sum of all product positions in Amazon SERP
Note: average position is calculated for intersected keywords only;
the value for a given product may differ when combined with different target products

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveItem](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md).[sum_position](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveItem.md#sum_position)

#### Defined in

[main.ts:101222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101222)

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

[main.ts:101244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101244)

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

[main.ts:101267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101267)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)

#### Defined in

[main.ts:101260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101260)
