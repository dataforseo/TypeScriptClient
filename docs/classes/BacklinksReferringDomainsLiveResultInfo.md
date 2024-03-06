[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksReferringDomainsLiveResultInfo

# Class: BacklinksReferringDomainsLiveResultInfo

## Implements

- [`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksReferringDomainsLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksReferringDomainsLiveResultInfo.md#items)
- [items\_count](BacklinksReferringDomainsLiveResultInfo.md#items_count)
- [target](BacklinksReferringDomainsLiveResultInfo.md#target)
- [total\_count](BacklinksReferringDomainsLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksReferringDomainsLiveResultInfo.md#init)
- [toJSON](BacklinksReferringDomainsLiveResultInfo.md#tojson)
- [fromJS](BacklinksReferringDomainsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksReferringDomainsLiveResultInfo**(`data?`): [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md) |

#### Returns

[`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Defined in

[main.ts:134975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134975)

## Properties

### items

• `Optional` **items**: [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)[]

items array

#### Implementation of

[IBacklinksReferringDomainsLiveResultInfo](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[items](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items)

#### Defined in

[main.ts:134971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134971)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the items array

#### Implementation of

[IBacklinksReferringDomainsLiveResultInfo](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[items_count](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items_count)

#### Defined in

[main.ts:134969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134969)

___


### target

• `Optional` **target**: `string`

target in a POST array

#### Implementation of

[IBacklinksReferringDomainsLiveResultInfo](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[target](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#target)

#### Defined in

[main.ts:134963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134963)

___


### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain

#### Implementation of

[IBacklinksReferringDomainsLiveResultInfo](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[total_count](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#total_count)

#### Defined in

[main.ts:134967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134967)

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

[main.ts:134984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134984)

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

[main.ts:135008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135008)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Defined in

[main.ts:135001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135001)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")