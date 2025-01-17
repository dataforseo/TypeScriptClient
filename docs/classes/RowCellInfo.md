[**Documentation**](../README.md)

***

[Documentation](../README.md) / RowCellInfo

# Class: RowCellInfo

Defined in: main.ts:173140

## Implements

- [`IRowCellInfo`](../interfaces/IRowCellInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RowCellInfo()

> **new RowCellInfo**(`data`?): [`RowCellInfo`](RowCellInfo.md)

Defined in: main.ts:173150

#### Parameters

##### data?

[`IRowCellInfo`](../interfaces/IRowCellInfo.md)

#### Returns

[`RowCellInfo`](RowCellInfo.md)

## Properties

### is\_header?

> `optional` **is\_header**: `boolean`

Defined in: main.ts:173146

indicates if the text belongs to the header

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`is_header`](../interfaces/IRowCellInfo.md#is_header)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:173142

content text

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`text`](../interfaces/IRowCellInfo.md#text)

***

### urls?

> `optional` **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

Defined in: main.ts:173144

contains other URLs and anchors found in the content element

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`urls`](../interfaces/IRowCellInfo.md#urls)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173159

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173182

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RowCellInfo`](RowCellInfo.md)

Defined in: main.ts:173175

#### Parameters

##### data

`any`

#### Returns

[`RowCellInfo`](RowCellInfo.md)
