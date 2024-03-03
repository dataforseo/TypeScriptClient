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

main.ts:29960

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### cid

• `Optional` **cid**: `string`

google-defined client id

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[cid](../interfaces/ILocalPackSerpElementItem.md#cid)

#### Defined in

main.ts:29952

___

### description

• `Optional` **description**: `string`

description

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[description](../interfaces/ILocalPackSerpElementItem.md#description)

#### Defined in

main.ts:29939

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[domain](../interfaces/ILocalPackSerpElementItem.md#domain)

#### Defined in

main.ts:29941

___

### is\_paid

• `Optional` **is\_paid**: `boolean`

indicates whether the element is an ad

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[is_paid](../interfaces/ILocalPackSerpElementItem.md#is_paid)

#### Defined in

main.ts:29947

___

### phone

• `Optional` **phone**: `string`

phone number

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[phone](../interfaces/ILocalPackSerpElementItem.md#phone)

#### Defined in

main.ts:29943

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[position](../interfaces/ILocalPackSerpElementItem.md#position)

#### Defined in

main.ts:29933

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[rank_absolute](../interfaces/ILocalPackSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:29929

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[rank_group](../interfaces/ILocalPackSerpElementItem.md#rank_group)

#### Defined in

main.ts:29926

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[rating](../interfaces/ILocalPackSerpElementItem.md#rating)

#### Defined in

main.ts:29950

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[rectangle](../interfaces/ILocalPackSerpElementItem.md#rectangle)

#### Defined in

main.ts:29956

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[title](../interfaces/ILocalPackSerpElementItem.md#title)

#### Defined in

main.ts:29937

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[url](../interfaces/ILocalPackSerpElementItem.md#url)

#### Defined in

main.ts:29945

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ILocalPackSerpElementItem](../interfaces/ILocalPackSerpElementItem.md).[xpath](../interfaces/ILocalPackSerpElementItem.md#xpath)

#### Defined in

main.ts:29935

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

main.ts:29965

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

main.ts:29995

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

main.ts:29988
