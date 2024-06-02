**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TableContent

# Class: TableContent

## Implements

- [`ITableContent`](../interfaces/ITableContent.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TableContent(data)

> **new TableContent**(`data`?): [`TableContent`](TableContent.md)

#### Parameters

• **data?**: [`ITableContent`](../interfaces/ITableContent.md)

#### Returns

[`TableContent`](TableContent.md)

#### Source

main.ts:159605

## Properties

### body?

> **`optional`** **body**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

content of the body of the table

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`body`](../interfaces/ITableContent.md#body)

#### Source

main.ts:159599

***

### footer?

> **`optional`** **footer**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

parsed content of the footer

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`footer`](../interfaces/ITableContent.md#footer)

#### Source

main.ts:159601

***

### header?

> **`optional`** **header**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

content of the header of the table

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`header`](../interfaces/ITableContent.md#header)

#### Source

main.ts:159597

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159614

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159645

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TableContent`](TableContent.md)

#### Parameters

• **data**: `any`

#### Returns

[`TableContent`](TableContent.md)

#### Source

main.ts:159638
