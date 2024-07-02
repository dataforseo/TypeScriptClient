**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RowCellInfo

# Class: RowCellInfo

## Implements

- [`IRowCellInfo`](../interfaces/IRowCellInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RowCellInfo(data)

> **new RowCellInfo**(`data`?): [`RowCellInfo`](RowCellInfo.md)

#### Parameters

• **data?**: [`IRowCellInfo`](../interfaces/IRowCellInfo.md)

#### Returns

[`RowCellInfo`](RowCellInfo.md)

#### Source

main.ts:160807

## Properties

### is\_header?

> **`optional`** **is\_header**: `boolean`

indicates if the text belongs to the header

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`is_header`](../interfaces/IRowCellInfo.md#is_header)

#### Source

main.ts:160803

***

### text?

> **`optional`** **text**: `string`

content text

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`text`](../interfaces/IRowCellInfo.md#text)

#### Source

main.ts:160799

***

### urls?

> **`optional`** **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

contains other URLs and anchors found in the content element

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`urls`](../interfaces/IRowCellInfo.md#urls)

#### Source

main.ts:160801

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:160816

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:160839

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RowCellInfo`](RowCellInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`RowCellInfo`](RowCellInfo.md)

#### Source

main.ts:160832
