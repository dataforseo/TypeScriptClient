[Documentation](../README.md) / [Exports](../modules.md) / ImagesSerpElementItem

# Class: ImagesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`ImagesSerpElementItem`**

## Implements

- [`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ImagesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ImagesSerpElementItem.md#_discriminator)
- [items](ImagesSerpElementItem.md#items)
- [position](ImagesSerpElementItem.md#position)
- [rank\_absolute](ImagesSerpElementItem.md#rank_absolute)
- [rank\_group](ImagesSerpElementItem.md#rank_group)
- [rectangle](ImagesSerpElementItem.md#rectangle)
- [related\_image\_searches](ImagesSerpElementItem.md#related_image_searches)
- [title](ImagesSerpElementItem.md#title)
- [url](ImagesSerpElementItem.md#url)
- [xpath](ImagesSerpElementItem.md#xpath)

### Methods

- [init](ImagesSerpElementItem.md#init)
- [toJSON](ImagesSerpElementItem.md#tojson)
- [fromJS](ImagesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ImagesSerpElementItem**(`data?`): [`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md) |

#### Returns

[`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:29650

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`ImagesElement`](ImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[items](../interfaces/IImagesSerpElementItem.md#items)

#### Defined in

main.ts:29639

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[position](../interfaces/IImagesSerpElementItem.md#position)

#### Defined in

main.ts:29630

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[rank_absolute](../interfaces/IImagesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:29626

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[rank_group](../interfaces/IImagesSerpElementItem.md#rank_group)

#### Defined in

main.ts:29622

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[rectangle](../interfaces/IImagesSerpElementItem.md#rectangle)

#### Defined in

main.ts:29646

___

### related\_image\_searches

• `Optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[related_image_searches](../interfaces/IImagesSerpElementItem.md#related_image_searches)

#### Defined in

main.ts:29642

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[title](../interfaces/IImagesSerpElementItem.md#title)

#### Defined in

main.ts:29634

___

### url

• `Optional` **url**: `string`

source URL

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[url](../interfaces/IImagesSerpElementItem.md#url)

#### Defined in

main.ts:29636

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IImagesSerpElementItem](../interfaces/IImagesSerpElementItem.md).[xpath](../interfaces/IImagesSerpElementItem.md#xpath)

#### Defined in

main.ts:29632

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

main.ts:29655

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

main.ts:29689

___

### fromJS

▸ **fromJS**(`data`): [`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ImagesSerpElementItem`](ImagesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:29682
