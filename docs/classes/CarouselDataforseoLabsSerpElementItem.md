[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / CarouselDataforseoLabsSerpElementItem

# Class: CarouselDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`CarouselDataforseoLabsSerpElementItem`**

## Implements

- [`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CarouselDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](CarouselDataforseoLabsSerpElementItem.md#_discriminator)
- [items](CarouselDataforseoLabsSerpElementItem.md#items)
- [position](CarouselDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](CarouselDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](CarouselDataforseoLabsSerpElementItem.md#rank_group)
- [title](CarouselDataforseoLabsSerpElementItem.md#title)
- [xpath](CarouselDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](CarouselDataforseoLabsSerpElementItem.md#init)
- [toJSON](CarouselDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](CarouselDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new CarouselDataforseoLabsSerpElementItem**(`data?`): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICarouselDataforseoLabsSerpElementItem`](../interfaces/ICarouselDataforseoLabsSerpElementItem.md) |

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:92421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92421)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### items

• `Optional` **items**: [`CarouselElement`](CarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[items](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:92417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92417)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[position](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:92410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92410)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:92406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92406)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:92403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92403)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[title](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:92414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92414)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ICarouselDataforseoLabsSerpElementItem](../interfaces/ICarouselDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ICarouselDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:92412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92412)

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

[main.ts:92426](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92426)

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

[main.ts:92453](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92453)

___


### fromJS

▸ **fromJS**(`data`): [`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CarouselDataforseoLabsSerpElementItem`](CarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:92446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92446)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")