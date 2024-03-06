[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AmazonAmazonSellerItemSerpElementItem

# Class: AmazonAmazonSellerItemSerpElementItem

## Hierarchy

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)
  
  ↳ **`AmazonAmazonSellerItemSerpElementItem`**

## Implements

- [`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonAmazonSellerItemSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AmazonAmazonSellerItemSerpElementItem.md#_discriminator)
- [condition](AmazonAmazonSellerItemSerpElementItem.md#condition)
- [condition\_description](AmazonAmazonSellerItemSerpElementItem.md#condition_description)
- [delivery\_info](AmazonAmazonSellerItemSerpElementItem.md#delivery_info)
- [position](AmazonAmazonSellerItemSerpElementItem.md#position)
- [price](AmazonAmazonSellerItemSerpElementItem.md#price)
- [rank\_absolute](AmazonAmazonSellerItemSerpElementItem.md#rank_absolute)
- [rank\_group](AmazonAmazonSellerItemSerpElementItem.md#rank_group)
- [rating](AmazonAmazonSellerItemSerpElementItem.md#rating)
- [seller\_name](AmazonAmazonSellerItemSerpElementItem.md#seller_name)
- [seller\_url](AmazonAmazonSellerItemSerpElementItem.md#seller_url)
- [ships\_from](AmazonAmazonSellerItemSerpElementItem.md#ships_from)
- [xpath](AmazonAmazonSellerItemSerpElementItem.md#xpath)

### Methods

- [init](AmazonAmazonSellerItemSerpElementItem.md#init)
- [toJSON](AmazonAmazonSellerItemSerpElementItem.md#tojson)
- [fromJS](AmazonAmazonSellerItemSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AmazonAmazonSellerItemSerpElementItem**(`data?`): [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonAmazonSellerItemSerpElementItem`](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md) |

#### Returns

[`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[constructor](BaseAmazonSerpElementItem.md#constructor)

#### Defined in

[main.ts:174281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174281)

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

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[condition](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition)

#### Defined in

[main.ts:174271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174271)

___


### condition\_description

• `Optional` **condition\_description**: `string`

product condition details
expanded details on the condition of the product offered by the seller

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[condition_description](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#condition_description)

#### Defined in

[main.ts:174274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174274)

___


### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[delivery_info](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#delivery_info)

#### Defined in

[main.ts:174277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174277)

___


### position

• `Optional` **position**: `string`

alignment of the element in SERP
possible values:
left, right

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[position](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#position)

#### Defined in

[main.ts:174254](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174254)

___


### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

product pricing details
if there are no details, the value will be null

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[price](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#price)

#### Defined in

[main.ts:174265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174265)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon Sellers SERP

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[rank_absolute](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:174250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174250)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[rank_group](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rank_group)

#### Defined in

[main.ts:174247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174247)

___


### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

seller rating details
seller popularity rate based on customer reviews

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[rating](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#rating)

#### Defined in

[main.ts:174268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174268)

___


### seller\_name

• `Optional` **seller\_name**: `string`

business name of the seller

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[seller_name](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_name)

#### Defined in

[main.ts:174258](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174258)

___


### seller\_url

• `Optional` **seller\_url**: `string`

url forwarding to the seller’s page on Amazon

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[seller_url](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#seller_url)

#### Defined in

[main.ts:174260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174260)

___


### ships\_from

• `Optional` **ships\_from**: `string`

sender company name

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[ships_from](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#ships_from)

#### Defined in

[main.ts:174262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174262)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Implementation of

[IAmazonAmazonSellerItemSerpElementItem](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md).[xpath](../interfaces/IAmazonAmazonSellerItemSerpElementItem.md#xpath)

#### Defined in

[main.ts:174256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174256)

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

[main.ts:174286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174286)

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

[main.ts:174315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174315)

___


### fromJS

▸ **fromJS**(`data`): [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[fromJS](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

[main.ts:174308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174308)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")