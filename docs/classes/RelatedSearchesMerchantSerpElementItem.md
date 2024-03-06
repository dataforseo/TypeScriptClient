[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / RelatedSearchesMerchantSerpElementItem

# Class: RelatedSearchesMerchantSerpElementItem

## Hierarchy

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)
  
  ↳ **`RelatedSearchesMerchantSerpElementItem`**

## Implements

- [`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RelatedSearchesMerchantSerpElementItem.md#constructor)

### Properties

- [\_discriminator](RelatedSearchesMerchantSerpElementItem.md#_discriminator)
- [items](RelatedSearchesMerchantSerpElementItem.md#items)
- [position](RelatedSearchesMerchantSerpElementItem.md#position)
- [rank\_absolute](RelatedSearchesMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](RelatedSearchesMerchantSerpElementItem.md#rank_group)
- [xpath](RelatedSearchesMerchantSerpElementItem.md#xpath)

### Methods

- [init](RelatedSearchesMerchantSerpElementItem.md#init)
- [toJSON](RelatedSearchesMerchantSerpElementItem.md#tojson)
- [fromJS](RelatedSearchesMerchantSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new RelatedSearchesMerchantSerpElementItem**(`data?`): [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRelatedSearchesMerchantSerpElementItem`](../interfaces/IRelatedSearchesMerchantSerpElementItem.md) |

#### Returns

[`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[constructor](BaseMerchantSerpElementItem.md#constructor)

#### Defined in

[main.ts:165298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165298)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[_discriminator](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19988)

___


### items

• `Optional` **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IRelatedSearchesMerchantSerpElementItem](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[items](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#items)

#### Defined in

[main.ts:165294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165294)

___


### position

• `Optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IRelatedSearchesMerchantSerpElementItem](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[position](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#position)

#### Defined in

[main.ts:165289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165289)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[IRelatedSearchesMerchantSerpElementItem](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[rank_absolute](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:165285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165285)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IRelatedSearchesMerchantSerpElementItem](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[rank_group](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#rank_group)

#### Defined in

[main.ts:165282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165282)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Implementation of

[IRelatedSearchesMerchantSerpElementItem](../interfaces/IRelatedSearchesMerchantSerpElementItem.md).[xpath](../interfaces/IRelatedSearchesMerchantSerpElementItem.md#xpath)

#### Defined in

[main.ts:165291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165291)

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

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[init](BaseMerchantSerpElementItem.md#init)

#### Defined in

[main.ts:165303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165303)

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

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[toJSON](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

[main.ts:165329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165329)

___


### fromJS

▸ **fromJS**(`data`): [`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RelatedSearchesMerchantSerpElementItem`](RelatedSearchesMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[fromJS](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

[main.ts:165322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165322)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")