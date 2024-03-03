[Documentation](../README.md) / [Exports](../modules.md) / AppStoreMetricsBundleInfo

# Class: AppStoreMetricsBundleInfo

## Implements

- [`IAppStoreMetricsBundleInfo`](../interfaces/IAppStoreMetricsBundleInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppStoreMetricsBundleInfo.md#constructor)

### Properties

- [app\_store\_search\_organic](AppStoreMetricsBundleInfo.md#app_store_search_organic)

### Methods

- [init](AppStoreMetricsBundleInfo.md#init)
- [toJSON](AppStoreMetricsBundleInfo.md#tojson)
- [fromJS](AppStoreMetricsBundleInfo.md#fromjs)

## Constructors

### constructor

• **new AppStoreMetricsBundleInfo**(`data?`): [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppStoreMetricsBundleInfo`](../interfaces/IAppStoreMetricsBundleInfo.md) |

#### Returns

[`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Defined in

main.ts:111516

## Properties

### app\_store\_search\_organic

• `Optional` **app\_store\_search\_organic**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from App Store organic search

#### Implementation of

[IAppStoreMetricsBundleInfo](../interfaces/IAppStoreMetricsBundleInfo.md).[app_store_search_organic](../interfaces/IAppStoreMetricsBundleInfo.md#app_store_search_organic)

#### Defined in

main.ts:111512

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

main.ts:111525

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

main.ts:111542

___

### fromJS

▸ **fromJS**(`data`): [`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppStoreMetricsBundleInfo`](AppStoreMetricsBundleInfo.md)

#### Defined in

main.ts:111535
