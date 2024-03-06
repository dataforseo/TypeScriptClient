[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MultiCarouselDataforseoLabsSerpElementItem

# Class: MultiCarouselDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`MultiCarouselDataforseoLabsSerpElementItem`**

## Implements

- [`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MultiCarouselDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MultiCarouselDataforseoLabsSerpElementItem.md#_discriminator)
- [items](MultiCarouselDataforseoLabsSerpElementItem.md#items)
- [position](MultiCarouselDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](MultiCarouselDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](MultiCarouselDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](MultiCarouselDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](MultiCarouselDataforseoLabsSerpElementItem.md#init)
- [toJSON](MultiCarouselDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](MultiCarouselDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MultiCarouselDataforseoLabsSerpElementItem**(`data?`): [`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMultiCarouselDataforseoLabsSerpElementItem`](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md) |

#### Returns

[`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:92517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92517)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### items

• `Optional` **items**: [`MultiCarouselElement`](MultiCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[items](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:92513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92513)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[position](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:92508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92508)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:92504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92504)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:92501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92501)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMultiCarouselDataforseoLabsSerpElementItem](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IMultiCarouselDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:92510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92510)

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

[main.ts:92522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92522)

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

[main.ts:92548](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92548)

___


### fromJS

▸ **fromJS**(`data`): [`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MultiCarouselDataforseoLabsSerpElementItem`](MultiCarouselDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:92541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L92541)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")