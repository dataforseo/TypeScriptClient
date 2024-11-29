[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductVariation

# Class: ProductVariation

## Implements

- [`IProductVariation`](../interfaces/IProductVariation.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductVariation()

> **new ProductVariation**(`data`?): [`ProductVariation`](ProductVariation.md)

#### Parameters

##### data?

[`IProductVariation`](../interfaces/IProductVariation.md)

#### Returns

[`ProductVariation`](ProductVariation.md)

#### Defined in

main.ts:190474

## Properties

### product\_id?

> `optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`product_id`](../interfaces/IProductVariation.md#product_id)

#### Defined in

main.ts:190465

***

### title?

> `optional` **title**: `string`

name of the product seller

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`title`](../interfaces/IProductVariation.md#title)

#### Defined in

main.ts:190467

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`type`](../interfaces/IProductVariation.md#type)

#### Defined in

main.ts:190462

***

### url?

> `optional` **url**: `string`

seller url
url of the webpage on the seller’s website where the product is sold

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`url`](../interfaces/IProductVariation.md#url)

#### Defined in

main.ts:190470

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:190483

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:190503

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductVariation`](ProductVariation.md)

#### Parameters

##### data

`any`

#### Returns

[`ProductVariation`](ProductVariation.md)

#### Defined in

main.ts:190496
