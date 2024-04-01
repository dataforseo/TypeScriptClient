[Documentation](../README.md) / [Exports](../modules.md) / FoundOnWebSerpElementItem

# Class: FoundOnWebSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`FoundOnWebSerpElementItem`**

## Implements

- [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FoundOnWebSerpElementItem.md#constructor)

### Properties

- [\_discriminator](FoundOnWebSerpElementItem.md#_discriminator)
- [items](FoundOnWebSerpElementItem.md#items)
- [position](FoundOnWebSerpElementItem.md#position)
- [rank\_absolute](FoundOnWebSerpElementItem.md#rank_absolute)
- [rank\_group](FoundOnWebSerpElementItem.md#rank_group)
- [rectangle](FoundOnWebSerpElementItem.md#rectangle)
- [related\_searches](FoundOnWebSerpElementItem.md#related_searches)
- [title](FoundOnWebSerpElementItem.md#title)
- [xpath](FoundOnWebSerpElementItem.md#xpath)

### Methods

- [init](FoundOnWebSerpElementItem.md#init)
- [toJSON](FoundOnWebSerpElementItem.md#tojson)
- [fromJS](FoundOnWebSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new FoundOnWebSerpElementItem**(`data?`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md) |

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:35749

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`FoundOnWebElement`](FoundOnWebElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[items](../interfaces/IFoundOnWebSerpElementItem.md#items)

#### Defined in

main.ts:35741

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[position](../interfaces/IFoundOnWebSerpElementItem.md#position)

#### Defined in

main.ts:35732

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[rank_absolute](../interfaces/IFoundOnWebSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:35728

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[rank_group](../interfaces/IFoundOnWebSerpElementItem.md#rank_group)

#### Defined in

main.ts:35724

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[rectangle](../interfaces/IFoundOnWebSerpElementItem.md#rectangle)

#### Defined in

main.ts:35745

___

### related\_searches

• `Optional` **related\_searches**: `string`[]

search queries related to the elment

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[related_searches](../interfaces/IFoundOnWebSerpElementItem.md#related_searches)

#### Defined in

main.ts:35738

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[title](../interfaces/IFoundOnWebSerpElementItem.md#title)

#### Defined in

main.ts:35736

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IFoundOnWebSerpElementItem](../interfaces/IFoundOnWebSerpElementItem.md).[xpath](../interfaces/IFoundOnWebSerpElementItem.md#xpath)

#### Defined in

main.ts:35734

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

main.ts:35754

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

main.ts:35787

___

### fromJS

▸ **fromJS**(`data`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35780
