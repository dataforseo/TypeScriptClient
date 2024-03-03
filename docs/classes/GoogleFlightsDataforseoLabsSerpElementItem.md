[Documentation](../README.md) / [Exports](../modules.md) / GoogleFlightsDataforseoLabsSerpElementItem

# Class: GoogleFlightsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`GoogleFlightsDataforseoLabsSerpElementItem`**

## Implements

- [`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleFlightsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleFlightsDataforseoLabsSerpElementItem.md#_discriminator)
- [items](GoogleFlightsDataforseoLabsSerpElementItem.md#items)
- [position](GoogleFlightsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](GoogleFlightsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleFlightsDataforseoLabsSerpElementItem.md#rank_group)
- [title](GoogleFlightsDataforseoLabsSerpElementItem.md#title)
- [url](GoogleFlightsDataforseoLabsSerpElementItem.md#url)
- [xpath](GoogleFlightsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](GoogleFlightsDataforseoLabsSerpElementItem.md#init)
- [toJSON](GoogleFlightsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](GoogleFlightsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleFlightsDataforseoLabsSerpElementItem**(`data?`): [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md) |

#### Returns

[`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

main.ts:94617

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19715

___

### items

• `Optional` **items**: [`GoogleFlightsElement`](GoogleFlightsElement.md)[]

elements of search results found in SERP

#### Implementation of

[IGoogleFlightsDataforseoLabsSerpElementItem](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[items](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:94613

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleFlightsDataforseoLabsSerpElementItem](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[position](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:94605

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGoogleFlightsDataforseoLabsSerpElementItem](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:94601

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleFlightsDataforseoLabsSerpElementItem](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:94598

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IGoogleFlightsDataforseoLabsSerpElementItem](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[title](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#title)

#### Defined in

main.ts:94609

___

### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IGoogleFlightsDataforseoLabsSerpElementItem](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[url](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#url)

#### Defined in

main.ts:94611

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleFlightsDataforseoLabsSerpElementItem](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:94607

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[init](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:94622

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

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[toJSON](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:94650

___

### fromJS

▸ **fromJS**(`data`): [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:94643
