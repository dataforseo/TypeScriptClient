**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductVariation

# Class: ProductVariation

## Implements

- [`IProductVariation`](../interfaces/IProductVariation.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductVariation(data)

> **new ProductVariation**(`data`?): [`ProductVariation`](ProductVariation.md)

#### Parameters

• **data?**: [`IProductVariation`](../interfaces/IProductVariation.md)

#### Returns

[`ProductVariation`](ProductVariation.md)

#### Source

main.ts:174538

## Properties

### product\_id?

> **`optional`** **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`product_id`](../interfaces/IProductVariation.md#product_id)

#### Source

main.ts:174529

***

### title?

> **`optional`** **title**: `string`

name of the product seller

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`title`](../interfaces/IProductVariation.md#title)

#### Source

main.ts:174531

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`type`](../interfaces/IProductVariation.md#type)

#### Source

main.ts:174526

***

### url?

> **`optional`** **url**: `string`

seller url
url of the webpage on the seller’s website where the product is sold

#### Implementation of

[`IProductVariation`](../interfaces/IProductVariation.md).[`url`](../interfaces/IProductVariation.md#url)

#### Source

main.ts:174534

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:174547

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:174567

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductVariation`](ProductVariation.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductVariation`](ProductVariation.md)

#### Source

main.ts:174560
