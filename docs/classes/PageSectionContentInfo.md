[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageSectionContentInfo

# Class: PageSectionContentInfo

Defined in: main.ts:173756

## Implements

- [`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PageSectionContentInfo()

> **new PageSectionContentInfo**(`data`?): [`PageSectionContentInfo`](PageSectionContentInfo.md)

Defined in: main.ts:173768

#### Parameters

##### data?

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

#### Returns

[`PageSectionContentInfo`](PageSectionContentInfo.md)

## Properties

### primary\_content?

> `optional` **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

Defined in: main.ts:173759

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`primary_content`](../interfaces/IPageSectionContentInfo.md#primary_content)

***

### secondary\_content?

> `optional` **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

Defined in: main.ts:173762

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`secondary_content`](../interfaces/IPageSectionContentInfo.md#secondary_content)

***

### table\_content?

> `optional` **table\_content**: [`TableContent`](TableContent.md)[]

Defined in: main.ts:173764

content of the table on the page

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`table_content`](../interfaces/IPageSectionContentInfo.md#table_content)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173777

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173808

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PageSectionContentInfo`](PageSectionContentInfo.md)

Defined in: main.ts:173801

#### Parameters

##### data

`any`

#### Returns

[`PageSectionContentInfo`](PageSectionContentInfo.md)
