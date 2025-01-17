[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageKeywordDensityItem

# Class: OnPageKeywordDensityItem

Defined in: main.ts:171290

## Implements

- [`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageKeywordDensityItem()

> **new OnPageKeywordDensityItem**(`data`?): [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

Defined in: main.ts:171302

#### Parameters

##### data?

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md)

#### Returns

[`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

## Properties

### density?

> `optional` **density**: `number`

Defined in: main.ts:171298

keyword density
calculated as a ratio of frequency to the total count of keywords with the set keyword_length on the web page or website

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`density`](../interfaces/IOnPageKeywordDensityItem.md#density)

***

### frequency?

> `optional` **frequency**: `number`

Defined in: main.ts:171295

keyword frequency
number of times the keyword appears on the website (or webpage if you specified a url)

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`frequency`](../interfaces/IOnPageKeywordDensityItem.md#frequency)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:171292

returned keyword

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`keyword`](../interfaces/IOnPageKeywordDensityItem.md#keyword)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171311

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171330

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

Defined in: main.ts:171323

#### Parameters

##### data

`any`

#### Returns

[`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)
