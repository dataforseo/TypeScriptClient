[dataforseo-client](../README.md) / [Exports](../modules.md) / KnowledgeGraphHotelsBookingItemSerpElementItem

# Class: KnowledgeGraphHotelsBookingItemSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`KnowledgeGraphHotelsBookingItemSerpElementItem`**

## Implements

- [`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KnowledgeGraphHotelsBookingItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](KnowledgeGraphHotelsBookingItemSerpElementItem.md#_discriminator)
- [data\_attrid](KnowledgeGraphHotelsBookingItemSerpElementItem.md#data_attrid)
- [date\_from](KnowledgeGraphHotelsBookingItemSerpElementItem.md#date_from)
- [date\_to](KnowledgeGraphHotelsBookingItemSerpElementItem.md#date_to)
- [items](KnowledgeGraphHotelsBookingItemSerpElementItem.md#items)
- [position](KnowledgeGraphHotelsBookingItemSerpElementItem.md#position)
- [rank\_absolute](KnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_absolute)
- [rank\_group](KnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_group)
- [rectangle](KnowledgeGraphHotelsBookingItemSerpElementItem.md#rectangle)
- [title](KnowledgeGraphHotelsBookingItemSerpElementItem.md#title)
- [xpath](KnowledgeGraphHotelsBookingItemSerpElementItem.md#xpath)

### Methods

- [init](KnowledgeGraphHotelsBookingItemSerpElementItem.md#init)
- [toJSON](KnowledgeGraphHotelsBookingItemSerpElementItem.md#tojson)
- [fromJS](KnowledgeGraphHotelsBookingItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new KnowledgeGraphHotelsBookingItemSerpElementItem**(`data?`): [`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md) |

#### Returns

[`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:35919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35919)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:hotel booking

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[data_attrid](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#data_attrid)

#### Defined in

[main.ts:35909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35909)

___

### date\_from

• `Optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[date_from](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#date_from)

#### Defined in

[main.ts:35900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35900)

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[date_to](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#date_to)

#### Defined in

[main.ts:35905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35905)

___

### items

• `Optional` **items**: [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[items](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#items)

#### Defined in

[main.ts:35911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35911)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[position](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#position)

#### Defined in

[main.ts:35891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35891)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[rank_absolute](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:35887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35887)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[rank_group](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:35884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35884)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[rectangle](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rectangle)

#### Defined in

[main.ts:35915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35915)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[title](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#title)

#### Defined in

[main.ts:35895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35895)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IKnowledgeGraphHotelsBookingItemSerpElementItem](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[xpath](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:35893](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35893)

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

[main.ts:35924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35924)

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

[main.ts:35955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35955)

___

### fromJS

▸ **fromJS**(`data`): [`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:35948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35948)
