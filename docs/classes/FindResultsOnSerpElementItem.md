[Documentation](../README.md) / [Exports](../modules.md) / FindResultsOnSerpElementItem

# Class: FindResultsOnSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`FindResultsOnSerpElementItem`**

## Implements

- [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FindResultsOnSerpElementItem.md#constructor)

### Properties

- [\_discriminator](FindResultsOnSerpElementItem.md#_discriminator)
- [items](FindResultsOnSerpElementItem.md#items)
- [position](FindResultsOnSerpElementItem.md#position)
- [rank\_absolute](FindResultsOnSerpElementItem.md#rank_absolute)
- [rank\_group](FindResultsOnSerpElementItem.md#rank_group)
- [rectangle](FindResultsOnSerpElementItem.md#rectangle)
- [xpath](FindResultsOnSerpElementItem.md#xpath)

### Methods

- [init](FindResultsOnSerpElementItem.md#init)
- [toJSON](FindResultsOnSerpElementItem.md#tojson)
- [fromJS](FindResultsOnSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new FindResultsOnSerpElementItem**(`data?`): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md) |

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:33603

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[items](../interfaces/IFindResultsOnSerpElementItem.md#items)

#### Defined in

main.ts:33595

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[position](../interfaces/IFindResultsOnSerpElementItem.md#position)

#### Defined in

main.ts:33590

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[rank_absolute](../interfaces/IFindResultsOnSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:33586

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[rank_group](../interfaces/IFindResultsOnSerpElementItem.md#rank_group)

#### Defined in

main.ts:33582

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[rectangle](../interfaces/IFindResultsOnSerpElementItem.md#rectangle)

#### Defined in

main.ts:33599

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IFindResultsOnSerpElementItem](../interfaces/IFindResultsOnSerpElementItem.md).[xpath](../interfaces/IFindResultsOnSerpElementItem.md#xpath)

#### Defined in

main.ts:33592

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

main.ts:33608

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

main.ts:33635

___

### fromJS

▸ **fromJS**(`data`): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33628
