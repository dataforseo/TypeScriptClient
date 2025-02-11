[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateContentItem

# Class: OnPageDuplicateContentItem

Defined in: main.ts:169204

## Implements

- [`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentItem()

> **new OnPageDuplicateContentItem**(`data`?): [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

Defined in: main.ts:169214

#### Parameters

##### data?

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

#### Returns

[`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

## Properties

### pages?

> `optional` **pages**: [`Pages`](Pages.md)[]

Defined in: main.ts:169210

pages with duplicate content

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`pages`](../interfaces/IOnPageDuplicateContentItem.md#pages)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:169208

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`total_count`](../interfaces/IOnPageDuplicateContentItem.md#total_count)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:169206

URL of the specified page

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`url`](../interfaces/IOnPageDuplicateContentItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:169223

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:169246

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

Defined in: main.ts:169239

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)
