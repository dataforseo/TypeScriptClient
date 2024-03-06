[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / RankInfo

# Class: RankInfo

## Implements

- [`IRankInfo`](../interfaces/IRankInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RankInfo.md#constructor)

### Properties

- [main\_domain\_rank](RankInfo.md#main_domain_rank)
- [page\_rank](RankInfo.md#page_rank)

### Methods

- [init](RankInfo.md#init)
- [toJSON](RankInfo.md#tojson)
- [fromJS](RankInfo.md#fromjs)

## Constructors

### constructor

• **new RankInfo**(`data?`): [`RankInfo`](RankInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRankInfo`](../interfaces/IRankInfo.md) |

#### Returns

[`RankInfo`](RankInfo.md)

#### Defined in

[main.ts:86570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86570)

## Properties

### main\_domain\_rank

• `Optional` **main\_domain\_rank**: `number`

main domain rank
main_domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IRankInfo](../interfaces/IRankInfo.md).[main_domain_rank](../interfaces/IRankInfo.md#main_domain_rank)

#### Defined in

[main.ts:86566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86566)

___


### page\_rank

• `Optional` **page\_rank**: `number`

page rank
page_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm;
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IRankInfo](../interfaces/IRankInfo.md).[page_rank](../interfaces/IRankInfo.md#page_rank)

#### Defined in

[main.ts:86562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86562)

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

[main.ts:86579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86579)

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

[main.ts:86597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86597)

___


### fromJS

▸ **fromJS**(`data`): [`RankInfo`](RankInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RankInfo`](RankInfo.md)

#### Defined in

[main.ts:86590](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86590)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")