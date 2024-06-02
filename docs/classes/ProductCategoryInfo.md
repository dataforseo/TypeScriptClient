**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductCategoryInfo

# Class: ProductCategoryInfo

## Implements

- [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductCategoryInfo(data)

> **new ProductCategoryInfo**(`data`?): [`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Parameters

• **data?**: [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

#### Returns

[`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Source

main.ts:180147

## Properties

### category?

> **`optional`** **category**: `string`

product category name

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`category`](../interfaces/IProductCategoryInfo.md#category)

#### Source

main.ts:180140

***

### url?

> **`optional`** **url**: `string`

product category URL
indicates the browse path on Amazon with the unique browse node ID (product category ID on Amazon)

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`url`](../interfaces/IProductCategoryInfo.md#url)

#### Source

main.ts:180143

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:180156

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:180174

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Source

main.ts:180167
