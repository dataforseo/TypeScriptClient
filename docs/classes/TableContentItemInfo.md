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

main.ts:165572

## Properties

### row\_cells?

> `optional` **row\_cells**: [`RowCellInfo`](RowCellInfo.md)[]

content of the row cells of the header

#### Implementation of

[`ITableContentItemInfo`](../interfaces/ITableContentItemInfo.md).[`row_cells`](../interfaces/ITableContentItemInfo.md#row_cells)

#### Defined in

main.ts:165568

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:165581

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:165602

***

### fromJS()

> `static` **fromJS**(`data`): [`TableContentItemInfo`](TableContentItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TableContentItemInfo`](TableContentItemInfo.md)

#### Defined in

main.ts:165595
