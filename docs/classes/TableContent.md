[**Documentation**](../README.md)

***

[Documentation](../README.md) / TableContent

# Class: TableContent

Defined in: main.ts:173268

## Implements

- [`ITableContent`](../interfaces/ITableContent.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TableContent()

> **new TableContent**(`data`?): [`TableContent`](TableContent.md)

Defined in: main.ts:173278

#### Parameters

##### data?

[`ITableContent`](../interfaces/ITableContent.md)

#### Returns

[`TableContent`](TableContent.md)

## Properties

### body?

> `optional` **body**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:173272

content of the body of the table

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`body`](../interfaces/ITableContent.md#body)

***

### footer?

> `optional` **footer**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:173274

content of the footer of the table

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`footer`](../interfaces/ITableContent.md#footer)

***

### header?

> `optional` **header**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

Defined in: main.ts:173270

parsed content of the header

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`header`](../interfaces/ITableContent.md#header)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173287

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173318

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TableContent`](TableContent.md)

Defined in: main.ts:173311

#### Parameters

##### data

`any`

#### Returns

[`TableContent`](TableContent.md)
