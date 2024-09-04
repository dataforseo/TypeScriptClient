[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PageContentInfo

# Class: PageContentInfo

## Implements

- [`IPageContentInfo`](../interfaces/IPageContentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageContentInfo()

> **new PageContentInfo**(`data`?): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

• **data?**: [`IPageContentInfo`](../interfaces/IPageContentInfo.md)

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Defined in

main.ts:161774

## Properties

### footer?

> `optional` **footer**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

content of the footer of the table

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`footer`](../interfaces/IPageContentInfo.md#footer)

#### Defined in

main.ts:161764

***

### header?

> `optional` **header**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

parsed content of the header

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`header`](../interfaces/IPageContentInfo.md#header)

#### Defined in

main.ts:161762

***

### main\_topic?

> `optional` **main\_topic**: [`TopicInfo`](TopicInfo.md)[]

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`main_topic`](../interfaces/IPageContentInfo.md#main_topic)

#### Defined in

main.ts:161767

***

### secondary\_topic?

> `optional` **secondary\_topic**: [`TopicInfo`](TopicInfo.md)[]

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`secondary_topic`](../interfaces/IPageContentInfo.md#secondary_topic)

#### Defined in

main.ts:161770

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:161783

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:161811

***

### fromJS()

> `static` **fromJS**(`data`): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Defined in

main.ts:161804
