[Documentation](../README.md) / [Exports](../modules.md) / ShoppingSerpElementItem

# Class: ShoppingSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`ShoppingSerpElementItem`**

## Implements

- [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ShoppingSerpElementItem.md#constructor)

### Properties

- [\_discriminator](ShoppingSerpElementItem.md#_discriminator)
- [items](ShoppingSerpElementItem.md#items)
- [position](ShoppingSerpElementItem.md#position)
- [rank\_absolute](ShoppingSerpElementItem.md#rank_absolute)
- [rank\_group](ShoppingSerpElementItem.md#rank_group)
- [rectangle](ShoppingSerpElementItem.md#rectangle)
- [title](ShoppingSerpElementItem.md#title)
- [xpath](ShoppingSerpElementItem.md#xpath)

### Methods

- [init](ShoppingSerpElementItem.md#init)
- [toJSON](ShoppingSerpElementItem.md#tojson)
- [fromJS](ShoppingSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new ShoppingSerpElementItem**(`data?`): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IShoppingSerpElementItem`](../interfaces/IShoppingSerpElementItem.md) |

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:31339

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`ShoppingElement`](ShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[items](../interfaces/IShoppingSerpElementItem.md#items)

#### Defined in

main.ts:31331

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[position](../interfaces/IShoppingSerpElementItem.md#position)

#### Defined in

main.ts:31324

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[rank_absolute](../interfaces/IShoppingSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31320

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[rank_group](../interfaces/IShoppingSerpElementItem.md#rank_group)

#### Defined in

main.ts:31316

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[rectangle](../interfaces/IShoppingSerpElementItem.md#rectangle)

#### Defined in

main.ts:31335

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[title](../interfaces/IShoppingSerpElementItem.md#title)

#### Defined in

main.ts:31328

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IShoppingSerpElementItem](../interfaces/IShoppingSerpElementItem.md).[xpath](../interfaces/IShoppingSerpElementItem.md#xpath)

#### Defined in

main.ts:31326

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

main.ts:31344

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

main.ts:31372

___

### fromJS

▸ **fromJS**(`data`): [`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ShoppingSerpElementItem`](ShoppingSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31365
