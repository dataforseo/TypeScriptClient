[dataforseo-client](../README.md) / [Exports](../modules.md) / HotelsPackDataforseoLabsSerpElementItem

# Class: HotelsPackDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`HotelsPackDataforseoLabsSerpElementItem`**

## Implements

- [`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelsPackDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](HotelsPackDataforseoLabsSerpElementItem.md#_discriminator)
- [date\_from](HotelsPackDataforseoLabsSerpElementItem.md#date_from)
- [date\_to](HotelsPackDataforseoLabsSerpElementItem.md#date_to)
- [items](HotelsPackDataforseoLabsSerpElementItem.md#items)
- [position](HotelsPackDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](HotelsPackDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](HotelsPackDataforseoLabsSerpElementItem.md#rank_group)
- [title](HotelsPackDataforseoLabsSerpElementItem.md#title)
- [xpath](HotelsPackDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](HotelsPackDataforseoLabsSerpElementItem.md#init)
- [toJSON](HotelsPackDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](HotelsPackDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new HotelsPackDataforseoLabsSerpElementItem**(`data?`): [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelsPackDataforseoLabsSerpElementItem`](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md) |

#### Returns

[`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:93489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93489)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### date\_from

• `Optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[IHotelsPackDataforseoLabsSerpElementItem](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[date_from](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#date_from)

#### Defined in

[main.ts:93478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93478)

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[IHotelsPackDataforseoLabsSerpElementItem](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[date_to](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#date_to)

#### Defined in

[main.ts:93483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93483)

___

### items

• `Optional` **items**: [`HotelsPackElement`](HotelsPackElement.md)[]

elements of search results found in SERP

#### Implementation of

[IHotelsPackDataforseoLabsSerpElementItem](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[items](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:93485](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93485)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IHotelsPackDataforseoLabsSerpElementItem](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[position](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:93469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93469)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IHotelsPackDataforseoLabsSerpElementItem](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:93465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93465)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IHotelsPackDataforseoLabsSerpElementItem](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:93462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93462)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IHotelsPackDataforseoLabsSerpElementItem](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[title](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:93473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93473)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IHotelsPackDataforseoLabsSerpElementItem](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IHotelsPackDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:93471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93471)

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

[main.ts:93494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93494)

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

[main.ts:93523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93523)

___

### fromJS

▸ **fromJS**(`data`): [`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelsPackDataforseoLabsSerpElementItem`](HotelsPackDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:93516](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93516)
