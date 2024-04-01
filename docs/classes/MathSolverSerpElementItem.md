[Documentation](../README.md) / [Exports](../modules.md) / MathSolverSerpElementItem

# Class: MathSolverSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`MathSolverSerpElementItem`**

## Implements

- [`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MathSolverSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MathSolverSerpElementItem.md#_discriminator)
- [items](MathSolverSerpElementItem.md#items)
- [links](MathSolverSerpElementItem.md#links)
- [position](MathSolverSerpElementItem.md#position)
- [rank\_absolute](MathSolverSerpElementItem.md#rank_absolute)
- [rank\_group](MathSolverSerpElementItem.md#rank_group)
- [rectangle](MathSolverSerpElementItem.md#rectangle)
- [result](MathSolverSerpElementItem.md#result)
- [title](MathSolverSerpElementItem.md#title)
- [xpath](MathSolverSerpElementItem.md#xpath)

### Methods

- [init](MathSolverSerpElementItem.md#init)
- [toJSON](MathSolverSerpElementItem.md#tojson)
- [fromJS](MathSolverSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MathSolverSerpElementItem**(`data?`): [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md) |

#### Returns

[`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:34992

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`MathSolverElement`](MathSolverElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[items](../interfaces/IMathSolverSerpElementItem.md#items)

#### Defined in

main.ts:34982

___

### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[links](../interfaces/IMathSolverSerpElementItem.md#links)

#### Defined in

main.ts:34984

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[position](../interfaces/IMathSolverSerpElementItem.md#position)

#### Defined in

main.ts:34972

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[rank_absolute](../interfaces/IMathSolverSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:34968

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[rank_group](../interfaces/IMathSolverSerpElementItem.md#rank_group)

#### Defined in

main.ts:34964

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[rectangle](../interfaces/IMathSolverSerpElementItem.md#rectangle)

#### Defined in

main.ts:34988

___

### result

• `Optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[result](../interfaces/IMathSolverSerpElementItem.md#result)

#### Defined in

main.ts:34979

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[title](../interfaces/IMathSolverSerpElementItem.md#title)

#### Defined in

main.ts:34976

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMathSolverSerpElementItem](../interfaces/IMathSolverSerpElementItem.md).[xpath](../interfaces/IMathSolverSerpElementItem.md#xpath)

#### Defined in

main.ts:34974

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

main.ts:34997

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

main.ts:35031

___

### fromJS

▸ **fromJS**(`data`): [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35024
