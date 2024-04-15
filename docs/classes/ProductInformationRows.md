**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductInformationRows

# Class: ProductInformationRows

## Implements

- [`IProductInformationRows`](../interfaces/IProductInformationRows.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductInformationRows(data)

> **new ProductInformationRows**(`data`?): [`ProductInformationRows`](ProductInformationRows.md)

#### Parameters

• **data?**: [`IProductInformationRows`](../interfaces/IProductInformationRows.md)

#### Returns

[`ProductInformationRows`](ProductInformationRows.md)

#### Source

main.ts:178269

## Properties

### rows?

> **`optional`** **rows**: [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)[]

rows containing related product information

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`rows`](../interfaces/IProductInformationRows.md#rows)

#### Source

main.ts:178265

***

### title?

> **`optional`** **title**: `string`

title under which related product information appears on the Amazon product page

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`title`](../interfaces/IProductInformationRows.md#title)

#### Source

main.ts:178263

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IProductInformationRows`](../interfaces/IProductInformationRows.md).[`type`](../interfaces/IProductInformationRows.md#type)

#### Source

main.ts:178261

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:178278

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:178301

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductInformationRows`](ProductInformationRows.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductInformationRows`](ProductInformationRows.md)

#### Source

main.ts:178294
