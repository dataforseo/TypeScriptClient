[Documentation](../README.md) / [Exports](../modules.md) / HotelsPackSerpElementItem

# Class: HotelsPackSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`HotelsPackSerpElementItem`**

## Implements

- [`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelsPackSerpElementItem.md#constructor)

### Properties

- [\_discriminator](HotelsPackSerpElementItem.md#_discriminator)
- [date\_from](HotelsPackSerpElementItem.md#date_from)
- [date\_to](HotelsPackSerpElementItem.md#date_to)
- [items](HotelsPackSerpElementItem.md#items)
- [position](HotelsPackSerpElementItem.md#position)
- [rank\_absolute](HotelsPackSerpElementItem.md#rank_absolute)
- [rank\_group](HotelsPackSerpElementItem.md#rank_group)
- [rectangle](HotelsPackSerpElementItem.md#rectangle)
- [title](HotelsPackSerpElementItem.md#title)
- [xpath](HotelsPackSerpElementItem.md#xpath)

### Methods

- [init](HotelsPackSerpElementItem.md#init)
- [toJSON](HotelsPackSerpElementItem.md#tojson)
- [fromJS](HotelsPackSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new HotelsPackSerpElementItem**(`data?`): [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelsPackSerpElementItem`](../interfaces/IHotelsPackSerpElementItem.md) |

#### Returns

[`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:33263

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### date\_from

• `Optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[date_from](../interfaces/IHotelsPackSerpElementItem.md#date_from)

#### Defined in

main.ts:33248

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[date_to](../interfaces/IHotelsPackSerpElementItem.md#date_to)

#### Defined in

main.ts:33253

___

### items

• `Optional` **items**: [`HotelsPackElement`](HotelsPackElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[items](../interfaces/IHotelsPackSerpElementItem.md#items)

#### Defined in

main.ts:33255

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[position](../interfaces/IHotelsPackSerpElementItem.md#position)

#### Defined in

main.ts:33239

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[rank_absolute](../interfaces/IHotelsPackSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:33235

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[rank_group](../interfaces/IHotelsPackSerpElementItem.md#rank_group)

#### Defined in

main.ts:33232

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[rectangle](../interfaces/IHotelsPackSerpElementItem.md#rectangle)

#### Defined in

main.ts:33259

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[title](../interfaces/IHotelsPackSerpElementItem.md#title)

#### Defined in

main.ts:33243

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IHotelsPackSerpElementItem](../interfaces/IHotelsPackSerpElementItem.md).[xpath](../interfaces/IHotelsPackSerpElementItem.md#xpath)

#### Defined in

main.ts:33241

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

main.ts:33268

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

main.ts:33298

___

### fromJS

▸ **fromJS**(`data`): [`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelsPackSerpElementItem`](HotelsPackSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33291
