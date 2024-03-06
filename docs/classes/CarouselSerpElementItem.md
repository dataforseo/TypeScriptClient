[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / CarouselSerpElementItem

# Class: CarouselSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`CarouselSerpElementItem`**

## Implements

- [`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CarouselSerpElementItem.md#constructor)

### Properties

- [\_discriminator](CarouselSerpElementItem.md#_discriminator)
- [items](CarouselSerpElementItem.md#items)
- [position](CarouselSerpElementItem.md#position)
- [rank\_absolute](CarouselSerpElementItem.md#rank_absolute)
- [rank\_group](CarouselSerpElementItem.md#rank_group)
- [rectangle](CarouselSerpElementItem.md#rectangle)
- [title](CarouselSerpElementItem.md#title)
- [xpath](CarouselSerpElementItem.md#xpath)

### Methods

- [init](CarouselSerpElementItem.md#init)
- [toJSON](CarouselSerpElementItem.md#tojson)
- [fromJS](CarouselSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new CarouselSerpElementItem**(`data?`): [`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md) |

#### Returns

[`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:30009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30009)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### items

• `Optional` **items**: [`CarouselElement`](CarouselElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Implementation of

[ICarouselSerpElementItem](../interfaces/ICarouselSerpElementItem.md).[items](../interfaces/ICarouselSerpElementItem.md#items)

#### Defined in

[main.ts:30001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30001)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ICarouselSerpElementItem](../interfaces/ICarouselSerpElementItem.md).[position](../interfaces/ICarouselSerpElementItem.md#position)

#### Defined in

[main.ts:29995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29995)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ICarouselSerpElementItem](../interfaces/ICarouselSerpElementItem.md).[rank_absolute](../interfaces/ICarouselSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:29991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29991)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ICarouselSerpElementItem](../interfaces/ICarouselSerpElementItem.md).[rank_group](../interfaces/ICarouselSerpElementItem.md#rank_group)

#### Defined in

[main.ts:29988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29988)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[ICarouselSerpElementItem](../interfaces/ICarouselSerpElementItem.md).[rectangle](../interfaces/ICarouselSerpElementItem.md#rectangle)

#### Defined in

[main.ts:30005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30005)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[ICarouselSerpElementItem](../interfaces/ICarouselSerpElementItem.md).[title](../interfaces/ICarouselSerpElementItem.md#title)

#### Defined in

[main.ts:29999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29999)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ICarouselSerpElementItem](../interfaces/ICarouselSerpElementItem.md).[xpath](../interfaces/ICarouselSerpElementItem.md#xpath)

#### Defined in

[main.ts:29997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29997)

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

[main.ts:30014](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30014)

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

[main.ts:30042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30042)

___


### fromJS

▸ **fromJS**(`data`): [`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:30035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30035)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")