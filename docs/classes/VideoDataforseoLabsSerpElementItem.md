[Documentation](../README.md) / [Exports](../modules.md) / VideoDataforseoLabsSerpElementItem

# Class: VideoDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`VideoDataforseoLabsSerpElementItem`**

## Implements

- [`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](VideoDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](VideoDataforseoLabsSerpElementItem.md#_discriminator)
- [items](VideoDataforseoLabsSerpElementItem.md#items)
- [position](VideoDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](VideoDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](VideoDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](VideoDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](VideoDataforseoLabsSerpElementItem.md#init)
- [toJSON](VideoDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](VideoDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new VideoDataforseoLabsSerpElementItem**(`data?`): [`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IVideoDataforseoLabsSerpElementItem`](../interfaces/IVideoDataforseoLabsSerpElementItem.md) |

#### Returns

[`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:95312

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20171

___

### items

• `Optional` **items**: [`VideoElement`](VideoElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IVideoDataforseoLabsSerpElementItem](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[items](../interfaces/IVideoDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:95308

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IVideoDataforseoLabsSerpElementItem](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[position](../interfaces/IVideoDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:95303

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IVideoDataforseoLabsSerpElementItem](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IVideoDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:95299

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IVideoDataforseoLabsSerpElementItem](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IVideoDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:95296

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IVideoDataforseoLabsSerpElementItem](../interfaces/IVideoDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IVideoDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:95305

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:95317

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:95343

___

### fromJS

▸ **fromJS**(`data`): [`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`VideoDataforseoLabsSerpElementItem`](VideoDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:95336
