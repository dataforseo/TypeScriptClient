**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PageSectionContentInfo

# Class: PageSectionContentInfo

## Implements

- [`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageSectionContentInfo(data)

> **new PageSectionContentInfo**(`data`?): [`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Parameters

• **data?**: [`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md)

#### Returns

[`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Source

main.ts:160471

## Properties

### primary\_content?

> **`optional`** **primary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

primary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`primary_content`](../interfaces/IPageSectionContentInfo.md#primary_content)

#### Source

main.ts:160462

***

### secondary\_content?

> **`optional`** **secondary\_content**: [`ContentItemInfo`](ContentItemInfo.md)[]

secondary content on the page
you can find more information about content priority calculation in this help center article

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`secondary_content`](../interfaces/IPageSectionContentInfo.md#secondary_content)

#### Source

main.ts:160465

***

### table\_content?

> **`optional`** **table\_content**: [`TableContent`](TableContent.md)[]

content of the table on the page

#### Implementation of

[`IPageSectionContentInfo`](../interfaces/IPageSectionContentInfo.md).[`table_content`](../interfaces/IPageSectionContentInfo.md#table_content)

#### Source

main.ts:160467

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:160480

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:160511

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageSectionContentInfo`](PageSectionContentInfo.md)

#### Source

main.ts:160504
