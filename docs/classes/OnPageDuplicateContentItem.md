[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageDuplicateContentItem

# Class: OnPageDuplicateContentItem

## Implements

- [`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageDuplicateContentItem()

> **new OnPageDuplicateContentItem**(`data`?): [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Parameters

##### data?

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md)

#### Returns

[`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Defined in

main.ts:168982

## Properties

### pages?

> `optional` **pages**: [`Pages`](Pages.md)[]

pages with duplicate content

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`pages`](../interfaces/IOnPageDuplicateContentItem.md#pages)

#### Defined in

main.ts:168978

***

### total\_count?

> `optional` **total\_count**: `number`

total count of duplicate pages

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`total_count`](../interfaces/IOnPageDuplicateContentItem.md#total_count)

#### Defined in

main.ts:168976

***

### url?

> `optional` **url**: `string`

URL of the specified page

#### Implementation of

[`IOnPageDuplicateContentItem`](../interfaces/IOnPageDuplicateContentItem.md).[`url`](../interfaces/IOnPageDuplicateContentItem.md#url)

#### Defined in

main.ts:168974

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:168991

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:169014

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageDuplicateContentItem`](OnPageDuplicateContentItem.md)

#### Defined in

main.ts:169007
