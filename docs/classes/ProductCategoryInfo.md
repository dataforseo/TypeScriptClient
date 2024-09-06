[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ProductCategoryInfo

# Class: ProductCategoryInfo

## Implements

- [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductCategoryInfo()

> **new ProductCategoryInfo**(`data`?): [`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Parameters

• **data?**: [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

#### Returns

[`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Defined in

main.ts:181919

## Properties

### category?

> `optional` **category**: `string`

product category name

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`category`](../interfaces/IProductCategoryInfo.md#category)

#### Defined in

main.ts:181912

***

### url?

> `optional` **url**: `string`

product category URL
indicates the browse path on Amazon with the unique browse node ID (product category ID on Amazon)

#### Implementation of

[`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md).[`url`](../interfaces/IProductCategoryInfo.md#url)

#### Defined in

main.ts:181915

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:181928

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:181946

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Defined in

main.ts:181939
