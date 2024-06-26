**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RowCells

# Class: RowCells

## Implements

- [`IRowCells`](../interfaces/IRowCells.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RowCells(data)

> **new RowCells**(`data`?): [`RowCells`](RowCells.md)

#### Parameters

• **data?**: [`IRowCells`](../interfaces/IRowCells.md)

#### Returns

[`RowCells`](RowCells.md)

#### Source

main.ts:161909

## Properties

### is\_header?

> **`optional`** **is\_header**: `boolean`

indicates if the text belongs to the header

#### Implementation of

[`IRowCells`](../interfaces/IRowCells.md).[`is_header`](../interfaces/IRowCells.md#is_header)

#### Source

main.ts:161905

***

### text?

> **`optional`** **text**: `string`

content text

#### Implementation of

[`IRowCells`](../interfaces/IRowCells.md).[`text`](../interfaces/IRowCells.md#text)

#### Source

main.ts:161901

***

### urls?

> **`optional`** **urls**: `any`

contains other URLs and anchors found in the content element

#### Implementation of

[`IRowCells`](../interfaces/IRowCells.md).[`urls`](../interfaces/IRowCells.md#urls)

#### Source

main.ts:161903

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:161918

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:161937

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RowCells`](RowCells.md)

#### Parameters

• **data**: `any`

#### Returns

[`RowCells`](RowCells.md)

#### Source

main.ts:161930
