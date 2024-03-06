[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / RankChanges

# Class: RankChanges

## Implements

- [`IRankChanges`](../interfaces/IRankChanges.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RankChanges.md#constructor)

### Properties

- [is\_down](RankChanges.md#is_down)
- [is\_new](RankChanges.md#is_new)
- [is\_up](RankChanges.md#is_up)
- [previous\_rank\_absolute](RankChanges.md#previous_rank_absolute)

### Methods

- [init](RankChanges.md#init)
- [toJSON](RankChanges.md#tojson)
- [fromJS](RankChanges.md#fromjs)

## Constructors

### constructor

• **new RankChanges**(`data?`): [`RankChanges`](RankChanges.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRankChanges`](../interfaces/IRankChanges.md) |

#### Returns

[`RankChanges`](RankChanges.md)

#### Defined in

[main.ts:86497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86497)

## Properties

### is\_down

• `Optional` **is\_down**: `boolean`

rank of this element went down
if the value is true, position of the element in SERP is lower compared to the previous check

#### Implementation of

[IRankChanges](../interfaces/IRankChanges.md).[is_down](../interfaces/IRankChanges.md#is_down)

#### Defined in

[main.ts:86493](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86493)

___


### is\_new

• `Optional` **is\_new**: `boolean`

element was previously present in SERP
if the value is true, previously collected SERP didn’t contain this element

#### Implementation of

[IRankChanges](../interfaces/IRankChanges.md).[is_new](../interfaces/IRankChanges.md#is_new)

#### Defined in

[main.ts:86487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86487)

___


### is\_up

• `Optional` **is\_up**: `boolean`

rank of this element went up
if the value is true, position of the element in SERP is higher compared to the previous check

#### Implementation of

[IRankChanges](../interfaces/IRankChanges.md).[is_up](../interfaces/IRankChanges.md#is_up)

#### Defined in

[main.ts:86490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86490)

___


### previous\_rank\_absolute

• `Optional` **previous\_rank\_absolute**: `number`

previous absolute rank in SERP
indicates previous rank of the element in Google SERP;
if this element is new, the value will be null

#### Implementation of

[IRankChanges](../interfaces/IRankChanges.md).[previous_rank_absolute](../interfaces/IRankChanges.md#previous_rank_absolute)

#### Defined in

[main.ts:86484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86484)

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

[main.ts:86506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86506)

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

[main.ts:86526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86526)

___


### fromJS

▸ **fromJS**(`data`): [`RankChanges`](RankChanges.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RankChanges`](RankChanges.md)

#### Defined in

[main.ts:86519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L86519)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")