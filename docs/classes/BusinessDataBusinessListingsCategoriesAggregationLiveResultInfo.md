[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#constructor)

### Properties

- [count](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#count)
- [items](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#items)
- [offset](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset)
- [offset\_token](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset_token)
- [total\_count](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#total_count)

### Methods

- [init](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#init)
- [toJSON](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo**(`data?`): [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md) |

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Defined in

[main.ts:189985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189985)

## Properties

### count

• `Optional` **count**: `number`

item types
the number of items in the items array

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[count](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#count)

#### Defined in

[main.ts:189971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189971)

___


### items

• `Optional` **items**: [`BusinessDataBusinessListingsCategoriesAggregationLiveItem`](BusinessDataBusinessListingsCategoriesAggregationLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_category

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[items](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#items)

#### Defined in

[main.ts:189981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189981)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned categories

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[offset](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset)

#### Defined in

[main.ts:189973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189973)

___


### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[offset_token](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#offset_token)

#### Defined in

[main.ts:189977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189977)

___


### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md).[total_count](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md#total_count)

#### Defined in

[main.ts:189968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189968)

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

[main.ts:189994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189994)

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

[main.ts:190019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190019)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)

#### Defined in

[main.ts:190012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190012)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")