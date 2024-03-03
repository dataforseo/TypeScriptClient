[Documentation](../README.md) / [Exports](../modules.md) / AppRankedSerpElementInfo

# Class: AppRankedSerpElementInfo

## Implements

- [`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppRankedSerpElementInfo.md#constructor)

### Properties

- [check\_url](AppRankedSerpElementInfo.md#check_url)
- [last\_updated\_time](AppRankedSerpElementInfo.md#last_updated_time)
- [previous\_updated\_time](AppRankedSerpElementInfo.md#previous_updated_time)
- [se\_results\_count](AppRankedSerpElementInfo.md#se_results_count)
- [se\_type](AppRankedSerpElementInfo.md#se_type)
- [serp\_item](AppRankedSerpElementInfo.md#serp_item)

### Methods

- [init](AppRankedSerpElementInfo.md#init)
- [toJSON](AppRankedSerpElementInfo.md#tojson)
- [fromJS](AppRankedSerpElementInfo.md#fromjs)

## Constructors

### constructor

• **new AppRankedSerpElementInfo**(`data?`): [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppRankedSerpElementInfo`](../interfaces/IAppRankedSerpElementInfo.md) |

#### Returns

[`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Defined in

main.ts:108777

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IAppRankedSerpElementInfo](../interfaces/IAppRankedSerpElementInfo.md).[check_url](../interfaces/IAppRankedSerpElementInfo.md#check_url)

#### Defined in

main.ts:108760

___

### last\_updated\_time

• `Optional` **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppRankedSerpElementInfo](../interfaces/IAppRankedSerpElementInfo.md).[last_updated_time](../interfaces/IAppRankedSerpElementInfo.md#last_updated_time)

#### Defined in

main.ts:108767

___

### previous\_updated\_time

• `Optional` **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

#### Implementation of

[IAppRankedSerpElementInfo](../interfaces/IAppRankedSerpElementInfo.md).[previous_updated_time](../interfaces/IAppRankedSerpElementInfo.md#previous_updated_time)

#### Defined in

main.ts:108773

___

### se\_results\_count

• `Optional` **se\_results\_count**: `string`

number of search results for the returned keyword

#### Implementation of

[IAppRankedSerpElementInfo](../interfaces/IAppRankedSerpElementInfo.md).[se_results_count](../interfaces/IAppRankedSerpElementInfo.md#se_results_count)

#### Defined in

main.ts:108762

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IAppRankedSerpElementInfo](../interfaces/IAppRankedSerpElementInfo.md).[se_type](../interfaces/IAppRankedSerpElementInfo.md#se_type)

#### Defined in

main.ts:108754

___

### serp\_item

• `Optional` **serp\_item**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[IAppRankedSerpElementInfo](../interfaces/IAppRankedSerpElementInfo.md).[serp_item](../interfaces/IAppRankedSerpElementInfo.md#serp_item)

#### Defined in

main.ts:108757

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

main.ts:108786

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

main.ts:108808

___

### fromJS

▸ **fromJS**(`data`): [`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppRankedSerpElementInfo`](AppRankedSerpElementInfo.md)

#### Defined in

main.ts:108801
