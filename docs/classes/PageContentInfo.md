[Documentation](../README.md) / [Exports](../modules.md) / PageContentInfo

# Class: PageContentInfo

## Implements

- [`IPageContentInfo`](../interfaces/IPageContentInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PageContentInfo.md#constructor)

### Properties

- [footer](PageContentInfo.md#footer)
- [header](PageContentInfo.md#header)
- [main\_topic](PageContentInfo.md#main_topic)
- [secondary\_topic](PageContentInfo.md#secondary_topic)

### Methods

- [init](PageContentInfo.md#init)
- [toJSON](PageContentInfo.md#tojson)
- [fromJS](PageContentInfo.md#fromjs)

## Constructors

### constructor

• **new PageContentInfo**(`data?`): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPageContentInfo`](../interfaces/IPageContentInfo.md) |

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Defined in

main.ts:152351

## Properties

### footer

• `Optional` **footer**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

parsed content of the footer

#### Implementation of

[IPageContentInfo](../interfaces/IPageContentInfo.md).[footer](../interfaces/IPageContentInfo.md#footer)

#### Defined in

main.ts:152341

___

### header

• `Optional` **header**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

parsed content of the header

#### Implementation of

[IPageContentInfo](../interfaces/IPageContentInfo.md).[header](../interfaces/IPageContentInfo.md#header)

#### Defined in

main.ts:152339

___

### main\_topic

• `Optional` **main\_topic**: [`TopicInfo`](TopicInfo.md)[]

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[IPageContentInfo](../interfaces/IPageContentInfo.md).[main_topic](../interfaces/IPageContentInfo.md#main_topic)

#### Defined in

main.ts:152344

___

### secondary\_topic

• `Optional` **secondary\_topic**: [`TopicInfo`](TopicInfo.md)[]

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[IPageContentInfo](../interfaces/IPageContentInfo.md).[secondary_topic](../interfaces/IPageContentInfo.md#secondary_topic)

#### Defined in

main.ts:152347

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

main.ts:152360

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

main.ts:152388

___

### fromJS

▸ **fromJS**(`data`): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Defined in

main.ts:152381
