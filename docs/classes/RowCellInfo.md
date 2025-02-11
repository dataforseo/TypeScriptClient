[**Documentation**](../README.md)

***

[Documentation](../README.md) / RowCellInfo

# Class: RowCellInfo

Defined in: main.ts:174118

## Implements

- [`IRowCellInfo`](../interfaces/IRowCellInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RowCellInfo()

> **new RowCellInfo**(`data`?): [`RowCellInfo`](RowCellInfo.md)

Defined in: main.ts:174128

#### Parameters

##### data?

[`IRowCellInfo`](../interfaces/IRowCellInfo.md)

#### Returns

[`RowCellInfo`](RowCellInfo.md)

## Properties

### is\_header?

> `optional` **is\_header**: `boolean`

Defined in: main.ts:174124

indicates if the text belongs to the header

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`is_header`](../interfaces/IRowCellInfo.md#is_header)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:174120

content text

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`text`](../interfaces/IRowCellInfo.md#text)

***

### urls?

> `optional` **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

Defined in: main.ts:174122

contains other URLs and anchors found in the content element

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`urls`](../interfaces/IRowCellInfo.md#urls)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:174137

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:174160

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RowCellInfo`](RowCellInfo.md)

Defined in: main.ts:174153

#### Parameters

##### data

`any`

#### Returns

[`RowCellInfo`](RowCellInfo.md)
