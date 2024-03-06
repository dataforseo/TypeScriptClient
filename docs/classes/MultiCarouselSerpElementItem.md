[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MultiCarouselSerpElementItem

# Class: MultiCarouselSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`MultiCarouselSerpElementItem`**

## Implements

- [`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MultiCarouselSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MultiCarouselSerpElementItem.md#_discriminator)
- [items](MultiCarouselSerpElementItem.md#items)
- [position](MultiCarouselSerpElementItem.md#position)
- [rank\_absolute](MultiCarouselSerpElementItem.md#rank_absolute)
- [rank\_group](MultiCarouselSerpElementItem.md#rank_group)
- [rectangle](MultiCarouselSerpElementItem.md#rectangle)
- [xpath](MultiCarouselSerpElementItem.md#xpath)

### Methods

- [init](MultiCarouselSerpElementItem.md#init)
- [toJSON](MultiCarouselSerpElementItem.md#tojson)
- [fromJS](MultiCarouselSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MultiCarouselSerpElementItem**(`data?`): [`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md) |

#### Returns

[`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:31339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31339)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`MultiCarouselElement`](MultiCarouselElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[IMultiCarouselSerpElementItem](../interfaces/IMultiCarouselSerpElementItem.md).[items](../interfaces/IMultiCarouselSerpElementItem.md#items)

#### Defined in

[main.ts:31331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31331)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMultiCarouselSerpElementItem](../interfaces/IMultiCarouselSerpElementItem.md).[position](../interfaces/IMultiCarouselSerpElementItem.md#position)

#### Defined in

[main.ts:31327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31327)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMultiCarouselSerpElementItem](../interfaces/IMultiCarouselSerpElementItem.md).[rank_absolute](../interfaces/IMultiCarouselSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:31323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31323)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMultiCarouselSerpElementItem](../interfaces/IMultiCarouselSerpElementItem.md).[rank_group](../interfaces/IMultiCarouselSerpElementItem.md#rank_group)

#### Defined in

[main.ts:31320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31320)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IMultiCarouselSerpElementItem](../interfaces/IMultiCarouselSerpElementItem.md).[rectangle](../interfaces/IMultiCarouselSerpElementItem.md#rectangle)

#### Defined in

[main.ts:31335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31335)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMultiCarouselSerpElementItem](../interfaces/IMultiCarouselSerpElementItem.md).[xpath](../interfaces/IMultiCarouselSerpElementItem.md#xpath)

#### Defined in

[main.ts:31329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31329)

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

[main.ts:31344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31344)

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

[main.ts:31371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31371)

___


### fromJS

▸ **fromJS**(`data`): [`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:31364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31364)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")