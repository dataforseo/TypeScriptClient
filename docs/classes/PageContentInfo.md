**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PageContentInfo

# Class: PageContentInfo

## Implements

- [`IPageContentInfo`](../interfaces/IPageContentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageContentInfo(data)

> **new PageContentInfo**(`data`?): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

• **data?**: [`IPageContentInfo`](../interfaces/IPageContentInfo.md)

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Source

main.ts:160014

## Properties

### footer?

> **`optional`** **footer**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

content of the footer of the table

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`footer`](../interfaces/IPageContentInfo.md#footer)

#### Source

main.ts:160004

***

### header?

> **`optional`** **header**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

parsed content of the header

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`header`](../interfaces/IPageContentInfo.md#header)

#### Source

main.ts:160002

***

### main\_topic?

> **`optional`** **main\_topic**: [`MainTopic`](MainTopic.md)[]

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`main_topic`](../interfaces/IPageContentInfo.md#main_topic)

#### Source

main.ts:160007

***

### secondary\_topic?

> **`optional`** **secondary\_topic**: [`SecondaryTopic`](SecondaryTopic.md)[]

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`secondary_topic`](../interfaces/IPageContentInfo.md#secondary_topic)

#### Source

main.ts:160010

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:160023

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:160051

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Source

main.ts:160044
