[dataforseo-client](../README.md) / [Exports](../modules.md) / FindResultsOnDataforseoLabsSerpElementItem

# Class: FindResultsOnDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`FindResultsOnDataforseoLabsSerpElementItem`**

## Implements

- [`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FindResultsOnDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](FindResultsOnDataforseoLabsSerpElementItem.md#_discriminator)
- [items](FindResultsOnDataforseoLabsSerpElementItem.md#items)
- [position](FindResultsOnDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](FindResultsOnDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](FindResultsOnDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](FindResultsOnDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](FindResultsOnDataforseoLabsSerpElementItem.md#init)
- [toJSON](FindResultsOnDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](FindResultsOnDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new FindResultsOnDataforseoLabsSerpElementItem**(`data?`): [`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFindResultsOnDataforseoLabsSerpElementItem`](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md) |

#### Returns

[`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:95619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95619)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### items

• `Optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

elements of search results found in SERP

#### Implementation of

[IFindResultsOnDataforseoLabsSerpElementItem](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[items](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:95615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95615)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IFindResultsOnDataforseoLabsSerpElementItem](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[position](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:95611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95611)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IFindResultsOnDataforseoLabsSerpElementItem](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:95607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95607)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IFindResultsOnDataforseoLabsSerpElementItem](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:95604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95604)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IFindResultsOnDataforseoLabsSerpElementItem](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IFindResultsOnDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:95613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95613)

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

[main.ts:95624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95624)

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

[main.ts:95650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95650)

___

### fromJS

▸ **fromJS**(`data`): [`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FindResultsOnDataforseoLabsSerpElementItem`](FindResultsOnDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:95643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95643)
