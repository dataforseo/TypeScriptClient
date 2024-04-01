[Documentation](../README.md) / [Exports](../modules.md) / LocalPackSerpElementItem

# Class: LocalPackSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`LocalPackSerpElementItem`**

## Implements

- [`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalPackSerpElementItem.md#constructor)

### Properties

- [\_discriminator](LocalPackSerpElementItem.md#_discriminator)
- [cid](LocalPackSerpElementItem.md#cid)
- [description](LocalPackSerpElementItem.md#description)
- [domain](LocalPackSerpElementItem.md#domain)
- [is\_paid](LocalPackSerpElementItem.md#is_paid)
- [phone](LocalPackSerpElementItem.md#phone)
- [position](LocalPackSerpElementItem.md#position)
- [rank\_absolute](LocalPackSerpElementItem.md#rank_absolute)
- [rank\_group](LocalPackSerpElementItem.md#rank_group)
- [rating](LocalPackSerpElementItem.md#rating)
- [rectangle](LocalPackSerpElementItem.md#rectangle)
- [title](LocalPackSerpElementItem.md#title)
- [url](LocalPackSerpElementItem.md#url)
- [xpath](LocalPackSerpElementItem.md#xpath)

### Methods

- [init](LocalPackSerpElementItem.md#init)
- [toJSON](LocalPackSerpElementItem.md#tojson)
- [fromJS](LocalPackSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new LocalPackSerpElementItem**(`data?`): [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md) |

#### Returns

[`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:30615

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[cid](../interfaces/ILocalPackSerpElementItem.md#cid)

#### Defined in

main.ts:30607

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[description](../interfaces/ILocalPackSerpElementItem.md#description)

#### Defined in

main.ts:30594

___

### domain

• `Optional` **domain**: `string`

source domain

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[domain](../interfaces/ILocalPackSerpElementItem.md#domain)

#### Defined in

main.ts:30596

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[is_paid](../interfaces/ILocalPackSerpElementItem.md#is_paid)

#### Defined in

main.ts:30602

___

### phone

• `Optional` **phone**: `string`

phone number

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[phone](../interfaces/ILocalPackSerpElementItem.md#phone)

#### Defined in

main.ts:30598

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[position](../interfaces/ILocalPackSerpElementItem.md#position)

#### Defined in

main.ts:30588

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[rank_absolute](../interfaces/ILocalPackSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:30584

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[rank_group](../interfaces/ILocalPackSerpElementItem.md#rank_group)

#### Defined in

main.ts:30580

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[rating](../interfaces/ILocalPackSerpElementItem.md#rating)

#### Defined in

main.ts:30605

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[rectangle](../interfaces/ILocalPackSerpElementItem.md#rectangle)

#### Defined in

main.ts:30611

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[title](../interfaces/ILocalPackSerpElementItem.md#title)

#### Defined in

main.ts:30592

___

### url

• `Optional` **url**: `string`

source URL

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[url](../interfaces/ILocalPackSerpElementItem.md#url)

#### Defined in

main.ts:30600

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[xpath](../interfaces/ILocalPackSerpElementItem.md#xpath)

#### Defined in

main.ts:30590

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

main.ts:30620

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

main.ts:30650

___

### fromJS

▸ **fromJS**(`data`): [`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalPackSerpElementItem`](LocalPackSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30643
