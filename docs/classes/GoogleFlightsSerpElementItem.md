[Documentation](../README.md) / [Exports](../modules.md) / GoogleFlightsSerpElementItem

# Class: GoogleFlightsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`GoogleFlightsSerpElementItem`**

## Implements

- [`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleFlightsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleFlightsSerpElementItem.md#_discriminator)
- [items](GoogleFlightsSerpElementItem.md#items)
- [position](GoogleFlightsSerpElementItem.md#position)
- [rank\_absolute](GoogleFlightsSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleFlightsSerpElementItem.md#rank_group)
- [rectangle](GoogleFlightsSerpElementItem.md#rectangle)
- [title](GoogleFlightsSerpElementItem.md#title)
- [url](GoogleFlightsSerpElementItem.md#url)
- [xpath](GoogleFlightsSerpElementItem.md#xpath)

### Methods

- [init](GoogleFlightsSerpElementItem.md#init)
- [toJSON](GoogleFlightsSerpElementItem.md#tojson)
- [fromJS](GoogleFlightsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleFlightsSerpElementItem**(`data?`): [`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md) |

#### Returns

[`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:30833

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### items

• `Optional` **items**: [`GoogleFlightsElement`](GoogleFlightsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IGoogleFlightsSerpElementItem](../interfaces/IGoogleFlightsSerpElementItem.md).[items](../interfaces/IGoogleFlightsSerpElementItem.md#items)

#### Defined in

main.ts:30825

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleFlightsSerpElementItem](../interfaces/IGoogleFlightsSerpElementItem.md).[position](../interfaces/IGoogleFlightsSerpElementItem.md#position)

#### Defined in

main.ts:30817

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGoogleFlightsSerpElementItem](../interfaces/IGoogleFlightsSerpElementItem.md).[rank_absolute](../interfaces/IGoogleFlightsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:30813

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleFlightsSerpElementItem](../interfaces/IGoogleFlightsSerpElementItem.md).[rank_group](../interfaces/IGoogleFlightsSerpElementItem.md#rank_group)

#### Defined in

main.ts:30810

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IGoogleFlightsSerpElementItem](../interfaces/IGoogleFlightsSerpElementItem.md).[rectangle](../interfaces/IGoogleFlightsSerpElementItem.md#rectangle)

#### Defined in

main.ts:30829

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IGoogleFlightsSerpElementItem](../interfaces/IGoogleFlightsSerpElementItem.md).[title](../interfaces/IGoogleFlightsSerpElementItem.md#title)

#### Defined in

main.ts:30821

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IGoogleFlightsSerpElementItem](../interfaces/IGoogleFlightsSerpElementItem.md).[url](../interfaces/IGoogleFlightsSerpElementItem.md#url)

#### Defined in

main.ts:30823

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleFlightsSerpElementItem](../interfaces/IGoogleFlightsSerpElementItem.md).[xpath](../interfaces/IGoogleFlightsSerpElementItem.md#xpath)

#### Defined in

main.ts:30819

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

main.ts:30838

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

main.ts:30867

___

### fromJS

▸ **fromJS**(`data`): [`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30860
