[**Documentation**](../README.md)

***

[Documentation](../README.md) / TableContentItemInfo

# Class: TableContentItemInfo

Defined in: main.ts:173210

## Implements

- [`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TableContentItemInfo()

> **new TableContentItemInfo**(`data`?): [`TableContentItemInfo`](TableContentItemInfo.md)

Defined in: main.ts:173216

#### Parameters

##### data?

[`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md)

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)

## Properties

### row\_cells?

> `optional` **row\_cells**: [`RowCellInfo`](RowCellInfo.md)[]

Defined in: main.ts:173212

content of the row cells of the header

#### Implementation of

[`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md).[`row_cells`](../interfaces/ITableContentItemInfo.md#row_cells)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173225

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173246

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TableContentItemInfo`](TableContentItemInfo.md)

Defined in: main.ts:173239

#### Parameters

##### data

`any`

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)
