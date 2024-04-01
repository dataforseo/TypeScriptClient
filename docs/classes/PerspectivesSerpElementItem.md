[Documentation](../README.md) / [Exports](../modules.md) / PerspectivesSerpElementItem

# Class: PerspectivesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`PerspectivesSerpElementItem`**

## Implements

- [`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PerspectivesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PerspectivesSerpElementItem.md#_discriminator)
- [items](PerspectivesSerpElementItem.md#items)
- [position](PerspectivesSerpElementItem.md#position)
- [rank\_absolute](PerspectivesSerpElementItem.md#rank_absolute)
- [rank\_group](PerspectivesSerpElementItem.md#rank_group)
- [rectangle](PerspectivesSerpElementItem.md#rectangle)
- [title](PerspectivesSerpElementItem.md#title)
- [xpath](PerspectivesSerpElementItem.md#xpath)

### Methods

- [init](PerspectivesSerpElementItem.md#init)
- [toJSON](PerspectivesSerpElementItem.md#tojson)
- [fromJS](PerspectivesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PerspectivesSerpElementItem**(`data?`): [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md) |

#### Returns

[`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:36475

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`PerspectivesElement`](PerspectivesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IPerspectivesSerpElementItem](../interfaces/IPerspectivesSerpElementItem.md).[items](../interfaces/IPerspectivesSerpElementItem.md#items)

#### Defined in

main.ts:36467

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPerspectivesSerpElementItem](../interfaces/IPerspectivesSerpElementItem.md).[position](../interfaces/IPerspectivesSerpElementItem.md#position)

#### Defined in

main.ts:36460

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IPerspectivesSerpElementItem](../interfaces/IPerspectivesSerpElementItem.md).[rank_absolute](../interfaces/IPerspectivesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:36456

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IPerspectivesSerpElementItem](../interfaces/IPerspectivesSerpElementItem.md).[rank_group](../interfaces/IPerspectivesSerpElementItem.md#rank_group)

#### Defined in

main.ts:36452

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IPerspectivesSerpElementItem](../interfaces/IPerspectivesSerpElementItem.md).[rectangle](../interfaces/IPerspectivesSerpElementItem.md#rectangle)

#### Defined in

main.ts:36471

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IPerspectivesSerpElementItem](../interfaces/IPerspectivesSerpElementItem.md).[title](../interfaces/IPerspectivesSerpElementItem.md#title)

#### Defined in

main.ts:36464

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPerspectivesSerpElementItem](../interfaces/IPerspectivesSerpElementItem.md).[xpath](../interfaces/IPerspectivesSerpElementItem.md#xpath)

#### Defined in

main.ts:36462

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

main.ts:36480

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

main.ts:36508

___

### fromJS

▸ **fromJS**(`data`): [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36501
