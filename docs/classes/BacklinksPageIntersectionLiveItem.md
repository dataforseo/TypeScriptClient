[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksPageIntersectionLiveItem

# Class: BacklinksPageIntersectionLiveItem

## Implements

- [`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksPageIntersectionLiveItem.md#constructor)

### Properties

- [page\_intersection](BacklinksPageIntersectionLiveItem.md#page_intersection)
- [summary](BacklinksPageIntersectionLiveItem.md#summary)

### Methods

- [init](BacklinksPageIntersectionLiveItem.md#init)
- [toJSON](BacklinksPageIntersectionLiveItem.md#tojson)
- [fromJS](BacklinksPageIntersectionLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksPageIntersectionLiveItem**(`data?`): [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md) |

#### Returns

[`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Defined in

[main.ts:138096](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138096)

## Properties

### page\_intersection

• `Optional` **page\_intersection**: `Object`

contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object

#### Index signature

▪ [key: `string`]: ([`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md) \| `undefined`)[]

#### Implementation of

[IBacklinksPageIntersectionLiveItem](../interfaces/IBacklinksPageIntersectionLiveItem.md).[page_intersection](../interfaces/IBacklinksPageIntersectionLiveItem.md#page_intersection)

#### Defined in

[main.ts:138090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138090)

___


### summary

• `Optional` **summary**: [`Summary`](Summary.md)

contains the page intersections summary

#### Implementation of

[IBacklinksPageIntersectionLiveItem](../interfaces/IBacklinksPageIntersectionLiveItem.md).[summary](../interfaces/IBacklinksPageIntersectionLiveItem.md#summary)

#### Defined in

[main.ts:138092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138092)

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

[main.ts:138105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138105)

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

[main.ts:138129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138129)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Defined in

[main.ts:138122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138122)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")