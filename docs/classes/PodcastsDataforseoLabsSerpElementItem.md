[Documentation](../README.md) / [Exports](../modules.md) / PodcastsDataforseoLabsSerpElementItem

# Class: PodcastsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`PodcastsDataforseoLabsSerpElementItem`**

## Implements

- [`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PodcastsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PodcastsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](PodcastsDataforseoLabsSerpElementItem.md#items)
- [position](PodcastsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](PodcastsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](PodcastsDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](PodcastsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](PodcastsDataforseoLabsSerpElementItem.md#init)
- [toJSON](PodcastsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](PodcastsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PodcastsDataforseoLabsSerpElementItem**(`data?`): [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md) |

#### Returns

[`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:95587

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### items

• `Optional` **items**: [`PodcastsElement`](PodcastsElement.md)[]

elements of search results found in SERP

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[items](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:95583

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[position](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:95579

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:95575

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:95572

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPodcastsDataforseoLabsSerpElementItem](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:95581

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

main.ts:95592

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

main.ts:95618

___

### fromJS

▸ **fromJS**(`data`): [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:95611
