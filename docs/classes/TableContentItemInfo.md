[**Documentation**](../README.md)

***

[Documentation](../README.md) / TableContentItemInfo

# Class: TableContentItemInfo

## Implements

- [`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TableContentItemInfo()

> **new TableContentItemInfo**(`data`?): [`TableContentItemInfo`](TableContentItemInfo.md)

#### Parameters

##### data?

[`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md)

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)

#### Defined in

main.ts:173148

## Properties

### row\_cells?

> `optional` **row\_cells**: [`RowCellInfo`](RowCellInfo.md)[]

content of the row cells of the header

#### Implementation of

[`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md).[`row_cells`](../interfaces/ITableContentItemInfo.md#row_cells)

#### Defined in

main.ts:173144

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:173157

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:173178

***

### fromJS()

> `static` **fromJS**(`data`): [`TableContentItemInfo`](TableContentItemInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)

#### Defined in

main.ts:173171
