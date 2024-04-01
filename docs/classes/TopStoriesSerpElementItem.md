[Documentation](../README.md) / [Exports](../modules.md) / TopStoriesSerpElementItem

# Class: TopStoriesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`TopStoriesSerpElementItem`**

## Implements

- [`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TopStoriesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TopStoriesSerpElementItem.md#_discriminator)
- [items](TopStoriesSerpElementItem.md#items)
- [position](TopStoriesSerpElementItem.md#position)
- [rank\_absolute](TopStoriesSerpElementItem.md#rank_absolute)
- [rank\_group](TopStoriesSerpElementItem.md#rank_group)
- [rectangle](TopStoriesSerpElementItem.md#rectangle)
- [title](TopStoriesSerpElementItem.md#title)
- [xpath](TopStoriesSerpElementItem.md#xpath)

### Methods

- [init](TopStoriesSerpElementItem.md#init)
- [toJSON](TopStoriesSerpElementItem.md#tojson)
- [fromJS](TopStoriesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TopStoriesSerpElementItem**(`data?`): [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md) |

#### Returns

[`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:29043

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ITopStoriesSerpElementItem](../interfaces/ITopStoriesSerpElementItem.md).[items](../interfaces/ITopStoriesSerpElementItem.md#items)

#### Defined in

main.ts:29035

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ITopStoriesSerpElementItem](../interfaces/ITopStoriesSerpElementItem.md).[position](../interfaces/ITopStoriesSerpElementItem.md#position)

#### Defined in

main.ts:29028

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[ITopStoriesSerpElementItem](../interfaces/ITopStoriesSerpElementItem.md).[rank_absolute](../interfaces/ITopStoriesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:29024

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[ITopStoriesSerpElementItem](../interfaces/ITopStoriesSerpElementItem.md).[rank_group](../interfaces/ITopStoriesSerpElementItem.md#rank_group)

#### Defined in

main.ts:29020

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ITopStoriesSerpElementItem](../interfaces/ITopStoriesSerpElementItem.md).[rectangle](../interfaces/ITopStoriesSerpElementItem.md#rectangle)

#### Defined in

main.ts:29039

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ITopStoriesSerpElementItem](../interfaces/ITopStoriesSerpElementItem.md).[title](../interfaces/ITopStoriesSerpElementItem.md#title)

#### Defined in

main.ts:29032

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ITopStoriesSerpElementItem](../interfaces/ITopStoriesSerpElementItem.md).[xpath](../interfaces/ITopStoriesSerpElementItem.md#xpath)

#### Defined in

main.ts:29030

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

main.ts:29048

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

main.ts:29076

___

### fromJS

▸ **fromJS**(`data`): [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:29069
