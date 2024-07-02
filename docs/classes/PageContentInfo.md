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

main.ts:161257

## Properties

### footer?

> **`optional`** **footer**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

parsed content of the footer

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`footer`](../interfaces/IPageContentInfo.md#footer)

#### Source

main.ts:161247

***

### header?

> **`optional`** **header**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

content of the header of the table

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`header`](../interfaces/IPageContentInfo.md#header)

#### Source

main.ts:161245

***

### main\_topic?

> **`optional`** **main\_topic**: [`MainTopic`](MainTopic.md)[]

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`main_topic`](../interfaces/IPageContentInfo.md#main_topic)

#### Source

main.ts:161250

***

### secondary\_topic?

> **`optional`** **secondary\_topic**: [`SecondaryTopic`](SecondaryTopic.md)[]

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`secondary_topic`](../interfaces/IPageContentInfo.md#secondary_topic)

#### Source

main.ts:161253

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:161266

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:161294

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Source

main.ts:161287
