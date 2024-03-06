[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / LocalServicesDataforseoLabsSerpElementItem

# Class: LocalServicesDataforseoLabsSerpElementItem

## Hierarchy

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`LocalServicesDataforseoLabsSerpElementItem`**

## Implements

- [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalServicesDataforseoLabsSerpElementItem.md#constructor)

### Properties

- [\_discriminator](LocalServicesDataforseoLabsSerpElementItem.md#_discriminator)
- [domain](LocalServicesDataforseoLabsSerpElementItem.md#domain)
- [items](LocalServicesDataforseoLabsSerpElementItem.md#items)
- [position](LocalServicesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](LocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](LocalServicesDataforseoLabsSerpElementItem.md#rank_group)
- [title](LocalServicesDataforseoLabsSerpElementItem.md#title)
- [url](LocalServicesDataforseoLabsSerpElementItem.md#url)
- [xpath](LocalServicesDataforseoLabsSerpElementItem.md#xpath)

### Methods

- [init](LocalServicesDataforseoLabsSerpElementItem.md#init)
- [toJSON](LocalServicesDataforseoLabsSerpElementItem.md#tojson)
- [fromJS](LocalServicesDataforseoLabsSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new LocalServicesDataforseoLabsSerpElementItem**(`data?`): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md) |

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[constructor](BaseDataforseoLabsSerpElementItem.md#constructor)

#### Defined in

[main.ts:96021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96021)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[_discriminator](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19715)

___


### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[domain](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#domain)

#### Defined in

[main.ts:96015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96015)

___


### items

• `Optional` **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

elements of search results found in SERP

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[items](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#items)

#### Defined in

[main.ts:96017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96017)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[position](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#position)

#### Defined in

[main.ts:96007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96007)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[rank_absolute](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:96003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96003)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[rank_group](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

[main.ts:96000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96000)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[title](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#title)

#### Defined in

[main.ts:96011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96011)

___


### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[url](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#url)

#### Defined in

[main.ts:96013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96013)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[ILocalServicesDataforseoLabsSerpElementItem](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[xpath](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

[main.ts:96009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96009)

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

[main.ts:96026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96026)

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

[main.ts:96055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96055)

___


### fromJS

▸ **fromJS**(`data`): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[BaseDataforseoLabsSerpElementItem](BaseDataforseoLabsSerpElementItem.md).[fromJS](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

[main.ts:96048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96048)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")