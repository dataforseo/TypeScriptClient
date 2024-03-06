[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / EventsSerpElementItem

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

[main.ts:31061](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31061)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`EventsElement`](EventsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[items](../interfaces/IEventsSerpElementItem.md#items)

#### Defined in

[main.ts:31053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31053)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[position](../interfaces/IEventsSerpElementItem.md#position)

#### Defined in

[main.ts:31045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31045)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[rank_absolute](../interfaces/IEventsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:31041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31041)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[rank_group](../interfaces/IEventsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:31038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31038)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[rectangle](../interfaces/IEventsSerpElementItem.md#rectangle)

#### Defined in

[main.ts:31057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31057)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[title](../interfaces/IEventsSerpElementItem.md#title)

#### Defined in

[main.ts:31049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31049)

___


### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[url](../interfaces/IEventsSerpElementItem.md#url)

#### Defined in

[main.ts:31051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31051)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IEventsSerpElementItem](../interfaces/IEventsSerpElementItem.md).[xpath](../interfaces/IEventsSerpElementItem.md#xpath)

#### Defined in

[main.ts:31047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31047)

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

[main.ts:31066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31066)

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

[main.ts:31095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31095)

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

[main.ts:31088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31088)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")