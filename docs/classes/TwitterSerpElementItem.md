[dataforseo-client](../README.md) / [Exports](../modules.md) / TwitterSerpElementItem

# Class: TwitterSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`TwitterSerpElementItem`**

## Implements

- [`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TwitterSerpElementItem.md#constructor)

### Properties

- [\_discriminator](TwitterSerpElementItem.md#_discriminator)
- [items](TwitterSerpElementItem.md#items)
- [position](TwitterSerpElementItem.md#position)
- [rank\_absolute](TwitterSerpElementItem.md#rank_absolute)
- [rank\_group](TwitterSerpElementItem.md#rank_group)
- [rectangle](TwitterSerpElementItem.md#rectangle)
- [title](TwitterSerpElementItem.md#title)
- [url](TwitterSerpElementItem.md#url)
- [xpath](TwitterSerpElementItem.md#xpath)

### Methods

- [init](TwitterSerpElementItem.md#init)
- [toJSON](TwitterSerpElementItem.md#tojson)
- [fromJS](TwitterSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new TwitterSerpElementItem**(`data?`): [`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITwitterSerpElementItem`](../interfaces/ITwitterSerpElementItem.md) |

#### Returns

[`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:29089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29089)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### items

• `Optional` **items**: [`TwitterElement`](TwitterElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[ITwitterSerpElementItem](../interfaces/ITwitterSerpElementItem.md).[items](../interfaces/ITwitterSerpElementItem.md#items)

#### Defined in

[main.ts:29081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29081)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ITwitterSerpElementItem](../interfaces/ITwitterSerpElementItem.md).[position](../interfaces/ITwitterSerpElementItem.md#position)

#### Defined in

[main.ts:29073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29073)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ITwitterSerpElementItem](../interfaces/ITwitterSerpElementItem.md).[rank_absolute](../interfaces/ITwitterSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:29069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29069)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ITwitterSerpElementItem](../interfaces/ITwitterSerpElementItem.md).[rank_group](../interfaces/ITwitterSerpElementItem.md#rank_group)

#### Defined in

[main.ts:29066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29066)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ITwitterSerpElementItem](../interfaces/ITwitterSerpElementItem.md).[rectangle](../interfaces/ITwitterSerpElementItem.md#rectangle)

#### Defined in

[main.ts:29085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29085)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[ITwitterSerpElementItem](../interfaces/ITwitterSerpElementItem.md).[title](../interfaces/ITwitterSerpElementItem.md#title)

#### Defined in

[main.ts:29077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29077)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ITwitterSerpElementItem](../interfaces/ITwitterSerpElementItem.md).[url](../interfaces/ITwitterSerpElementItem.md#url)

#### Defined in

[main.ts:29079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29079)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ITwitterSerpElementItem](../interfaces/ITwitterSerpElementItem.md).[xpath](../interfaces/ITwitterSerpElementItem.md#xpath)

#### Defined in

[main.ts:29075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29075)

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

[main.ts:29094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29094)

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

[main.ts:29123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29123)

___

### fromJS

▸ **fromJS**(`data`): [`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TwitterSerpElementItem`](TwitterSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:29116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29116)
