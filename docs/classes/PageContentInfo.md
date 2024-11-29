[**Documentation**](../README.md)

***

[Documentation](../README.md) / PageContentInfo

# Class: PageContentInfo

## Implements

- [`IPageContentInfo`](../interfaces/IPageContentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageContentInfo()

> **new PageContentInfo**(`data`?): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

##### data?

[`IPageContentInfo`](../interfaces/IPageContentInfo.md)

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Defined in

main.ts:173420

## Properties

### footer?

> `optional` **footer**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

parsed content of the footer

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`footer`](../interfaces/IPageContentInfo.md#footer)

#### Defined in

main.ts:173410

***

### header?

> `optional` **header**: [`PageSectionContentInfo`](PageSectionContentInfo.md)

content of the header of the table

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`header`](../interfaces/IPageContentInfo.md#header)

#### Defined in

main.ts:173408

***

### main\_topic?

> `optional` **main\_topic**: [`TopicInfo`](TopicInfo.md)[]

main topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`main_topic`](../interfaces/IPageContentInfo.md#main_topic)

#### Defined in

main.ts:173413

***

### secondary\_topic?

> `optional` **secondary\_topic**: [`TopicInfo`](TopicInfo.md)[]

secondary topic on the page
you can find more information about topic priority calculation in this help center article

#### Implementation of

[`IPageContentInfo`](../interfaces/IPageContentInfo.md).[`secondary_topic`](../interfaces/IPageContentInfo.md#secondary_topic)

#### Defined in

main.ts:173416

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:173429

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:173457

***

### fromJS()

> `static` **fromJS**(`data`): [`PageContentInfo`](PageContentInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`PageContentInfo`](PageContentInfo.md)

#### Defined in

main.ts:173450
