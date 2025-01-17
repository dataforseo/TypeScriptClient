[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageContentInfo

# Class: PageContentInfo

Defined in: main.ts:173474

## Implements

- [`IPageContentInfo`](../interfaces/IPageContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PageContentInfo()

> **new PageContentInfo**(`data`?): [`PageContentInfo`](PageContentInfo.md)

Defined in: main.ts:173488

#### Parameters

##### data?

[`IPageContentInfo`](../interfaces/IPageContentInfo.md)

#### Returns

[`PageContentInfo`](PageContentInfo.md)

## Properties

### footer?

> `optional` **footer**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

Defined in: main.ts:173478

parsed content of the footer

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`footer`](../interfaces/IPageContentInfo.md#footer)

***

### header?

> `optional` **header**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

Defined in: main.ts:173476

content of the header of the table

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`header`](../interfaces/IPageContentInfo.md#header)

***

### main\_topic?

> `optional` **main\_topic**: [`TopicInfo`](TopicInfo.md)[]

Defined in: main.ts:173481

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`main_topic`](../interfaces/IPageContentInfo.md#main_topic)

***

### secondary\_topic?

> `optional` **secondary\_topic**: [`TopicInfo`](TopicInfo.md)[]

Defined in: main.ts:173484

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`secondary_topic`](../interfaces/IPageContentInfo.md#secondary_topic)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173497

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173525

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PageContentInfo`](PageContentInfo.md)

Defined in: main.ts:173518

#### Parameters

##### data

`any`

#### Returns

[`PageContentInfo`](PageContentInfo.md)
