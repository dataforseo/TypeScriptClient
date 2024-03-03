[Documentation](../README.md) / [Exports](../modules.md) / PodcastsSerpElementItem

# Class: PodcastsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`PodcastsSerpElementItem`**

## Implements

- [`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PodcastsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PodcastsSerpElementItem.md#_discriminator)
- [items](PodcastsSerpElementItem.md#items)
- [position](PodcastsSerpElementItem.md#position)
- [rank\_absolute](PodcastsSerpElementItem.md#rank_absolute)
- [rank\_group](PodcastsSerpElementItem.md#rank_group)
- [rectangle](PodcastsSerpElementItem.md#rectangle)
- [xpath](PodcastsSerpElementItem.md#xpath)

### Methods

- [init](PodcastsSerpElementItem.md#init)
- [toJSON](PodcastsSerpElementItem.md#tojson)
- [fromJS](PodcastsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PodcastsSerpElementItem**(`data?`): [`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md) |

#### Returns

[`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:32407

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### items

• `Optional` **items**: [`PodcastsElement`](PodcastsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IPodcastsSerpElementItem](../interfaces/IPodcastsSerpElementItem.md).[items](../interfaces/IPodcastsSerpElementItem.md#items)

#### Defined in

main.ts:32399

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPodcastsSerpElementItem](../interfaces/IPodcastsSerpElementItem.md).[position](../interfaces/IPodcastsSerpElementItem.md#position)

#### Defined in

main.ts:32395

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPodcastsSerpElementItem](../interfaces/IPodcastsSerpElementItem.md).[rank_absolute](../interfaces/IPodcastsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:32391

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPodcastsSerpElementItem](../interfaces/IPodcastsSerpElementItem.md).[rank_group](../interfaces/IPodcastsSerpElementItem.md#rank_group)

#### Defined in

main.ts:32388

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IPodcastsSerpElementItem](../interfaces/IPodcastsSerpElementItem.md).[rectangle](../interfaces/IPodcastsSerpElementItem.md#rectangle)

#### Defined in

main.ts:32403

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPodcastsSerpElementItem](../interfaces/IPodcastsSerpElementItem.md).[xpath](../interfaces/IPodcastsSerpElementItem.md#xpath)

#### Defined in

main.ts:32397

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

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

main.ts:32412

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

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:32439

___

### fromJS

▸ **fromJS**(`data`): [`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32432
