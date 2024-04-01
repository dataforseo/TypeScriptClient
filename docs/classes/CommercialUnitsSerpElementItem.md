[Documentation](../README.md) / [Exports](../modules.md) / CommercialUnitsSerpElementItem

# Class: CommercialUnitsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`CommercialUnitsSerpElementItem`**

## Implements

- [`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CommercialUnitsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](CommercialUnitsSerpElementItem.md#_discriminator)
- [items](CommercialUnitsSerpElementItem.md#items)
- [position](CommercialUnitsSerpElementItem.md#position)
- [rank\_absolute](CommercialUnitsSerpElementItem.md#rank_absolute)
- [rank\_group](CommercialUnitsSerpElementItem.md#rank_group)
- [rectangle](CommercialUnitsSerpElementItem.md#rectangle)
- [title](CommercialUnitsSerpElementItem.md#title)
- [xpath](CommercialUnitsSerpElementItem.md#xpath)

### Methods

- [init](CommercialUnitsSerpElementItem.md#init)
- [toJSON](CommercialUnitsSerpElementItem.md#tojson)
- [fromJS](CommercialUnitsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new CommercialUnitsSerpElementItem**(`data?`): [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICommercialUnitsSerpElementItem`](../interfaces/ICommercialUnitsSerpElementItem.md) |

#### Returns

[`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:34409

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`CommercialUnitsElement`](CommercialUnitsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ICommercialUnitsSerpElementItem](../interfaces/ICommercialUnitsSerpElementItem.md).[items](../interfaces/ICommercialUnitsSerpElementItem.md#items)

#### Defined in

main.ts:34401

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ICommercialUnitsSerpElementItem](../interfaces/ICommercialUnitsSerpElementItem.md).[position](../interfaces/ICommercialUnitsSerpElementItem.md#position)

#### Defined in

main.ts:34394

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[ICommercialUnitsSerpElementItem](../interfaces/ICommercialUnitsSerpElementItem.md).[rank_absolute](../interfaces/ICommercialUnitsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:34390

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[ICommercialUnitsSerpElementItem](../interfaces/ICommercialUnitsSerpElementItem.md).[rank_group](../interfaces/ICommercialUnitsSerpElementItem.md#rank_group)

#### Defined in

main.ts:34386

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ICommercialUnitsSerpElementItem](../interfaces/ICommercialUnitsSerpElementItem.md).[rectangle](../interfaces/ICommercialUnitsSerpElementItem.md#rectangle)

#### Defined in

main.ts:34405

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ICommercialUnitsSerpElementItem](../interfaces/ICommercialUnitsSerpElementItem.md).[title](../interfaces/ICommercialUnitsSerpElementItem.md#title)

#### Defined in

main.ts:34398

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ICommercialUnitsSerpElementItem](../interfaces/ICommercialUnitsSerpElementItem.md).[xpath](../interfaces/ICommercialUnitsSerpElementItem.md#xpath)

#### Defined in

main.ts:34396

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

main.ts:34414

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

main.ts:34442

___

### fromJS

▸ **fromJS**(`data`): [`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CommercialUnitsSerpElementItem`](CommercialUnitsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:34435
