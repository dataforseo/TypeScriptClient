[dataforseo-client](../README.md) / [Exports](../modules.md) / PageSectionContentInfo

# Class: PageSectionContentInfo

## Implements

- [`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PageSectionContentInfo.md#constructor)

### Properties

- [primary\_content](PageSectionContentInfo.md#primary_content)
- [secondary\_content](PageSectionContentInfo.md#secondary_content)

### Methods

- [init](PageSectionContentInfo.md#init)
- [toJSON](PageSectionContentInfo.md#tojson)
- [fromJS](PageSectionContentInfo.md#fromjs)

## Constructors

### constructor

• **new PageSectionContentInfo**(`data?`): [`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md) |

#### Returns

[`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Defined in

[main.ts:152021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152021)

## Properties

### primary\_content

• `Optional` **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[IPageSectionContentInfo](../interfaces/IPageSectionContentInfo.md).[primary_content](../interfaces/IPageSectionContentInfo.md#primary_content)

#### Defined in

[main.ts:152014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152014)

___

### secondary\_content

• `Optional` **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[IPageSectionContentInfo](../interfaces/IPageSectionContentInfo.md).[secondary_content](../interfaces/IPageSectionContentInfo.md#secondary_content)

#### Defined in

[main.ts:152017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152017)

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

[main.ts:152030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152030)

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

[main.ts:152056](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152056)

___

### fromJS

▸ **fromJS**(`data`): [`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Defined in

[main.ts:152049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152049)
