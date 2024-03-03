[Documentation](../README.md) / [Exports](../modules.md) / GooglePlayMetricsBundleInfo

# Class: GooglePlayMetricsBundleInfo

## Implements

- [`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GooglePlayMetricsBundleInfo.md#constructor)

### Properties

- [google\_play\_search\_organic](GooglePlayMetricsBundleInfo.md#google_play_search_organic)

### Methods

- [init](GooglePlayMetricsBundleInfo.md#init)
- [toJSON](GooglePlayMetricsBundleInfo.md#tojson)
- [fromJS](GooglePlayMetricsBundleInfo.md#fromjs)

## Constructors

### constructor

• **new GooglePlayMetricsBundleInfo**(`data?`): [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGooglePlayMetricsBundleInfo`](../interfaces/IGooglePlayMetricsBundleInfo.md) |

#### Returns

[`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Defined in

main.ts:109384

## Properties

### google\_play\_search\_organic

• `Optional` **google\_play\_search\_organic**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Google Play organic search

#### Implementation of

[IGooglePlayMetricsBundleInfo](../interfaces/IGooglePlayMetricsBundleInfo.md).[google_play_search_organic](../interfaces/IGooglePlayMetricsBundleInfo.md#google_play_search_organic)

#### Defined in

main.ts:109380

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

main.ts:109393

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

main.ts:109410

___

### fromJS

▸ **fromJS**(`data`): [`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GooglePlayMetricsBundleInfo`](GooglePlayMetricsBundleInfo.md)

#### Defined in

main.ts:109403
