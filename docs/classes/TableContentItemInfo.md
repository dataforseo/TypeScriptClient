[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / TableContentItemInfo

# Class: TableContentItemInfo

## Implements

- [`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TableContentItemInfo()

> **new TableContentItemInfo**(`data`?): [`TableContentItemInfo`](TableContentItemInfo.md)

#### Parameters

• **data?**: [`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md)

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)

#### Defined in

main.ts:161502

## Properties

### row\_cells?

> `optional` **row\_cells**: [`RowCellInfo`](RowCellInfo.md)[]

content of the row cells of the header

#### Implementation of

[`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md).[`row_cells`](../interfaces/ITableContentItemInfo.md#row_cells)

#### Defined in

main.ts:161498

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:161511

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:161532

***

### fromJS()

> `static` **fromJS**(`data`): [`TableContentItemInfo`](TableContentItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)

#### Defined in

main.ts:161525
