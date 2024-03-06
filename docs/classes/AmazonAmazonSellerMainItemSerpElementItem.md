[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AmazonAmazonSellerMainItemSerpElementItem

# Class: AmazonAmazonSellerMainItemSerpElementItem

## Hierarchy

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)
  
  ↳ **`AmazonAmazonSellerMainItemSerpElementItem`**

## Implements

- [`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonAmazonSellerMainItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AmazonAmazonSellerMainItemSerpElementItem.md#_discriminator)
- [condition](AmazonAmazonSellerMainItemSerpElementItem.md#condition)
- [condition\_description](AmazonAmazonSellerMainItemSerpElementItem.md#condition_description)
- [delivery\_info](AmazonAmazonSellerMainItemSerpElementItem.md#delivery_info)
- [position](AmazonAmazonSellerMainItemSerpElementItem.md#position)
- [price](AmazonAmazonSellerMainItemSerpElementItem.md#price)
- [rank\_absolute](AmazonAmazonSellerMainItemSerpElementItem.md#rank_absolute)
- [rank\_group](AmazonAmazonSellerMainItemSerpElementItem.md#rank_group)
- [rating](AmazonAmazonSellerMainItemSerpElementItem.md#rating)
- [seller\_name](AmazonAmazonSellerMainItemSerpElementItem.md#seller_name)
- [seller\_url](AmazonAmazonSellerMainItemSerpElementItem.md#seller_url)
- [ships\_from](AmazonAmazonSellerMainItemSerpElementItem.md#ships_from)
- [xpath](AmazonAmazonSellerMainItemSerpElementItem.md#xpath)

### Methods

- [init](AmazonAmazonSellerMainItemSerpElementItem.md#init)
- [toJSON](AmazonAmazonSellerMainItemSerpElementItem.md#tojson)
- [fromJS](AmazonAmazonSellerMainItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AmazonAmazonSellerMainItemSerpElementItem**(`data?`): [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonAmazonSellerMainItemSerpElementItem`](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md) |

#### Returns

[`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[constructor](BaseAmazonSerpElementItem.md#constructor)

#### Defined in

[main.ts:174149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174149)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[_discriminator](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20756)

___


### condition

• `Optional` **condition**: `string`

product condition
condition of the product offered by the seller

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[condition](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#condition)

#### Defined in

[main.ts:174139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174139)

___


### condition\_description

• `Optional` **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[condition_description](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#condition_description)

#### Defined in

[main.ts:174142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174142)

___


### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[delivery_info](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#delivery_info)

#### Defined in

[main.ts:174145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174145)

___


### position

• `Optional` **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[position](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#position)

#### Defined in

[main.ts:174122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174122)

___


### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[price](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#price)

#### Defined in

[main.ts:174133](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174133)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[rank_absolute](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:174118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174118)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[rank_group](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:174115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174115)

___


### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[rating](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#rating)

#### Defined in

[main.ts:174136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174136)

___


### seller\_name

• `Optional` **seller\_name**: `string`

business name of the seller

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[seller_name](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#seller_name)

#### Defined in

[main.ts:174126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174126)

___


### seller\_url

• `Optional` **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[seller_url](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#seller_url)

#### Defined in

[main.ts:174128](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174128)

___


### ships\_from

• `Optional` **ships\_from**: `string`

sender company name

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[ships_from](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#ships_from)

#### Defined in

[main.ts:174130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174130)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Implementation of

[IAmazonAmazonSellerMainItemSerpElementItem](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md).[xpath](../interfaces/IAmazonAmazonSellerMainItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:174124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174124)

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

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[init](BaseAmazonSerpElementItem.md#init)

#### Defined in

[main.ts:174154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174154)

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

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[toJSON](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

[main.ts:174183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174183)

___


### fromJS

▸ **fromJS**(`data`): [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[fromJS](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

[main.ts:174176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174176)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")