[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationRows

# Class: ProductInformationRows

Defined in: main.ts:194852

## Implements

- [`IProductInformationRows`](../interfaces/IProductInformationRows.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductInformationRows()

> **new ProductInformationRows**(`data`?): [`ProductInformationRows`](ProductInformationRows.md)

Defined in: main.ts:194862

#### Parameters

##### data?

[`IProductInformationRows`](../interfaces/IProductInformationRows.md)

#### Returns

[`ProductInformationRows`](ProductInformationRows.md)

## Properties

### rows?

> `optional` **rows**: [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)[]

Defined in: main.ts:194858

rows containing related product information

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`rows`](../interfaces/IProductInformationRows.md#rows)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:194856

title under which related product information appears on the Amazon product page

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`title`](../interfaces/IProductInformationRows.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:194854

type of element

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`type`](../interfaces/IProductInformationRows.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194871

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194894

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationRows`](ProductInformationRows.md)

Defined in: main.ts:194887

#### Parameters

##### data

`any`

#### Returns

[`ProductInformationRows`](ProductInformationRows.md)
