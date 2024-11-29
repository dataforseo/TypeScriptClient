[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductInformationRows

# Class: ProductInformationRows

## Implements

- [`IProductInformationRows`](../interfaces/IProductInformationRows.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationRows()

> **new ProductInformationRows**(`data`?): [`ProductInformationRows`](ProductInformationRows.md)

#### Parameters

##### data?

[`IProductInformationRows`](../interfaces/IProductInformationRows.md)

#### Returns

[`ProductInformationRows`](ProductInformationRows.md)

#### Defined in

main.ts:194306

## Properties

### rows?

> `optional` **rows**: [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)[]

rows containing related product information

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`rows`](../interfaces/IProductInformationRows.md#rows)

#### Defined in

main.ts:194302

***

### title?

> `optional` **title**: `string`

title under which related product information appears on the Amazon product page

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`title`](../interfaces/IProductInformationRows.md#title)

#### Defined in

main.ts:194300

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`type`](../interfaces/IProductInformationRows.md#type)

#### Defined in

main.ts:194298

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:194315

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:194338

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductInformationRows`](ProductInformationRows.md)

#### Parameters

##### data

`any`

#### Returns

[`ProductInformationRows`](ProductInformationRows.md)

#### Defined in

main.ts:194331
