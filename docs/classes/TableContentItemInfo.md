**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TableContentItemInfo

# Class: TableContentItemInfo

## Implements

- [`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TableContentItemInfo(data)

> **new TableContentItemInfo**(`data`?): [`TableContentItemInfo`](TableContentItemInfo.md)

#### Parameters

• **data?**: [`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md)

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)

#### Source

main.ts:159543

## Properties

### row\_cells?

> **`optional`** **row\_cells**: [`RowCellInfo`](RowCellInfo.md)[]

content of the row cells of the header

#### Implementation of

[`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md).[`row_cells`](../interfaces/ITableContentItemInfo.md#row_cells)

#### Source

main.ts:159539

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159552

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159573

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TableContentItemInfo`](TableContentItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)

#### Source

main.ts:159566
