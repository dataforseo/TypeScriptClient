[Documentation](../README.md) / [Exports](../modules.md) / EventsSerpElementItem

# Class: EventsSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`EventsSerpElementItem`**

## Implements

- [`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](EventsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](EventsSerpElementItem.md#_discriminator)
- [items](EventsSerpElementItem.md#items)
- [position](EventsSerpElementItem.md#position)
- [rank\_absolute](EventsSerpElementItem.md#rank_absolute)
- [rank\_group](EventsSerpElementItem.md#rank_group)
- [rectangle](EventsSerpElementItem.md#rectangle)
- [title](EventsSerpElementItem.md#title)
- [url](EventsSerpElementItem.md#url)
- [xpath](EventsSerpElementItem.md#xpath)

### Methods

- [init](EventsSerpElementItem.md#init)
- [toJSON](EventsSerpElementItem.md#tojson)
- [fromJS](EventsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new EventsSerpElementItem**(`data?`): [`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md) |

#### Returns

[`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:31897

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### items

• `Optional` **items**: [`EventsElement`](EventsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[items](../interfaces/IEventsSerpElementItem.md#items)

#### Defined in

main.ts:31889

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[position](../interfaces/IEventsSerpElementItem.md#position)

#### Defined in

main.ts:31880

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[rank_absolute](../interfaces/IEventsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31876

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[rank_group](../interfaces/IEventsSerpElementItem.md#rank_group)

#### Defined in

main.ts:31872

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[rectangle](../interfaces/IEventsSerpElementItem.md#rectangle)

#### Defined in

main.ts:31893

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[title](../interfaces/IEventsSerpElementItem.md#title)

#### Defined in

main.ts:31884

___

### url

• `Optional` **url**: `string`

source URL

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[url](../interfaces/IEventsSerpElementItem.md#url)

#### Defined in

main.ts:31886

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[xpath](../interfaces/IEventsSerpElementItem.md#xpath)

#### Defined in

main.ts:31882

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

main.ts:31902

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

main.ts:31931

___

### fromJS

▸ **fromJS**(`data`): [`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31924
