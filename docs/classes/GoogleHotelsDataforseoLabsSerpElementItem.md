[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleHotelsDataforseoLabsSerpElementItem

# Class: GoogleHotelsDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

  ↳ **`GoogleHotelsDataforseoLabsSerpElementItem`**

## Implements

- [`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleHotelsDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleHotelsDataforseoLabsSerpElementItem.md#_discriminator)
- [hotel\_identifier](GoogleHotelsDataforseoLabsSerpElementItem.md#hotel_identifier)
- [position](GoogleHotelsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](GoogleHotelsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleHotelsDataforseoLabsSerpElementItem.md#rank_group)
- [url](GoogleHotelsDataforseoLabsSerpElementItem.md#url)
- [xpath](GoogleHotelsDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](GoogleHotelsDataforseoLabsSerpElementItem.md#init)
- [toJSON](GoogleHotelsDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](GoogleHotelsDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleHotelsDataforseoLabsSerpElementItem**(`data?`): [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleHotelsDataforseoLabsSerpElementItem`](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md) |

#### Returns

[`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:96125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96125)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___

### hotel\_identifier

• `Optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[hotel_identifier](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#hotel_identifier)

#### Defined in

[main.ts:96119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96119)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[position](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:96113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96113)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:96109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96109)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:96106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96106)

___

### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[url](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:96121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96121)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IGoogleHotelsDataforseoLabsSerpElementItem](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md).[xpath](../interfaces/IGoogleHotelsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:96115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96115)

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

[main.ts:96130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96130)

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

[main.ts:96153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96153)

___

### fromJS

▸ **fromJS**(`data`): [`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleHotelsDataforseoLabsSerpElementItem`](GoogleHotelsDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:96146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96146)
