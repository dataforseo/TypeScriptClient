[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageSectionContentInfo

# Class: PageSectionContentInfo

## Implements

- [`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageSectionContentInfo()

> **new PageSectionContentInfo**(`data`?): [`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Parameters

##### data?

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

#### Returns

[`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Defined in

main.ts:172994

## Properties

### primary\_content?

> `optional` **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`primary_content`](../interfaces/IPageSectionContentInfo.md#primary_content)

#### Defined in

main.ts:172985

***

### secondary\_content?

> `optional` **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`secondary_content`](../interfaces/IPageSectionContentInfo.md#secondary_content)

#### Defined in

main.ts:172988

***

### table\_content?

> `optional` **table\_content**: [`TableContent`](TableContent.md)[]

content of the table on the page

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`table_content`](../interfaces/IPageSectionContentInfo.md#table_content)

#### Defined in

main.ts:172990

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:173003

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:173034

***

### fromJS()

> `static` **fromJS**(`data`): [`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Defined in

main.ts:173027
