[**Documentation**](../README.md)

***

[Documentation](../README.md) / TableContent

# Class: TableContent

## Implements

- [`ITableContent`](../interfaces/ITableContent.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TableContent()

> **new TableContent**(`data`?): [`TableContent`](TableContent.md)

#### Parameters

##### data?

[`ITableContent`](../interfaces/ITableContent.md)

#### Returns

[`TableContent`](TableContent.md)

#### Defined in

main.ts:173210

## Properties

### body?

> `optional` **body**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

content of the body of the table

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`body`](../interfaces/ITableContent.md#body)

#### Defined in

main.ts:173204

***

### footer?

> `optional` **footer**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

content of the footer of the table

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`footer`](../interfaces/ITableContent.md#footer)

#### Defined in

main.ts:173206

***

### header?

> `optional` **header**: [`TableContentItemInfo`](TableContentItemInfo.md)[]

parsed content of the header

#### Implementation of

[`ITableContent`](../interfaces/ITableContent.md).[`header`](../interfaces/ITableContent.md#header)

#### Defined in

main.ts:173202

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:173219

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:173250

***

### fromJS()

> `static` **fromJS**(`data`): [`TableContent`](TableContent.md)

#### Parameters

##### data

`any`

#### Returns

[`TableContent`](TableContent.md)

#### Defined in

main.ts:173243
