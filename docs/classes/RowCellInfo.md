[**Documentation**](../README.md)

***

[Documentation](../README.md) / RowCellInfo

# Class: RowCellInfo

## Implements

- [`IRowCellInfo`](../interfaces/IRowCellInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RowCellInfo()

> **new RowCellInfo**(`data`?): [`RowCellInfo`](RowCellInfo.md)

#### Parameters

##### data?

[`IRowCellInfo`](../interfaces/IRowCellInfo.md)

#### Returns

[`RowCellInfo`](RowCellInfo.md)

#### Defined in

main.ts:173082

## Properties

### is\_header?

> `optional` **is\_header**: `boolean`

indicates if the text belongs to the header

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`is_header`](../interfaces/IRowCellInfo.md#is_header)

#### Defined in

main.ts:173078

***

### text?

> `optional` **text**: `string`

content text

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`text`](../interfaces/IRowCellInfo.md#text)

#### Defined in

main.ts:173074

***

### urls?

> `optional` **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

contains other URLs and anchors found in the content element

#### Implementation of

[`IRowCellInfo`](../interfaces/IRowCellInfo.md).[`urls`](../interfaces/IRowCellInfo.md#urls)

#### Defined in

main.ts:173076

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:173091

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:173114

***

### fromJS()

> `static` **fromJS**(`data`): [`RowCellInfo`](RowCellInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`RowCellInfo`](RowCellInfo.md)

#### Defined in

main.ts:173107
