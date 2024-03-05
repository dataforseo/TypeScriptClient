[dataforseo-client](../README.md) / [Exports](../modules.md) / MapDataforseoLabsSerpElementItem

# Class: MapDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`MapDataforseoLabsSerpElementItem`**

## Implements

- [`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MapDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](MapDataforseoLabsSerpElementItem.md#_discriminator)
- [position](MapDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](MapDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](MapDataforseoLabsSerpElementItem.md#rank_group)
- [title](MapDataforseoLabsSerpElementItem.md#title)
- [url](MapDataforseoLabsSerpElementItem.md#url)
- [xpath](MapDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](MapDataforseoLabsSerpElementItem.md#init)
- [toJSON](MapDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](MapDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new MapDataforseoLabsSerpElementItem**(`data?`): [`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMapDataforseoLabsSerpElementItem`](../interfaces/IMapDataforseoLabsSerpElementItem.md) |

#### Returns

[`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:93027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93027)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IMapDataforseoLabsSerpElementItem](../interfaces/IMapDataforseoLabsSerpElementItem.md).[position](../interfaces/IMapDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:93017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93017)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IMapDataforseoLabsSerpElementItem](../interfaces/IMapDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IMapDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:93013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93013)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IMapDataforseoLabsSerpElementItem](../interfaces/IMapDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IMapDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:93010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93010)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IMapDataforseoLabsSerpElementItem](../interfaces/IMapDataforseoLabsSerpElementItem.md).[title](../interfaces/IMapDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:93021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93021)

___

### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IMapDataforseoLabsSerpElementItem](../interfaces/IMapDataforseoLabsSerpElementItem.md).[url](../interfaces/IMapDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:93023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93023)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IMapDataforseoLabsSerpElementItem](../interfaces/IMapDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IMapDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:93019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93019)

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

[main.ts:93032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93032)

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

[main.ts:93055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93055)

___

### fromJS

▸ **fromJS**(`data`): [`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MapDataforseoLabsSerpElementItem`](MapDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:93048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L93048)
