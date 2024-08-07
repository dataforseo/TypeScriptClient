**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageDuplicateContentItem

# Class: OnPageDuplicateContentItem

## Implements

- [`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentItem(data)

> **new OnPageDuplicateContentItem**(`data`?): [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Parameters

• **data?**: [`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

#### Returns

[`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Source

main.ts:159184

## Properties

### pages?

> **`optional`** **pages**: [`Pages`](Pages.md)[]

pages with duplicate content

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`pages`](../interfaces/IOnPageDuplicateContentItem.md#pages)

#### Source

main.ts:159180

***

### total\_count?

> **`optional`** **total\_count**: `number`

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`total_count`](../interfaces/IOnPageDuplicateContentItem.md#total_count)

#### Source

main.ts:159178

***

### url?

> **`optional`** **url**: `string`

URL of the specified page

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`url`](../interfaces/IOnPageDuplicateContentItem.md#url)

#### Source

main.ts:159176

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159193

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159216

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Source

main.ts:159209
