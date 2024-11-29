[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageKeywordDensityItem

# Class: OnPageKeywordDensityItem

## Implements

- [`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageKeywordDensityItem()

> **new OnPageKeywordDensityItem**(`data`?): [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

#### Parameters

##### data?

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md)

#### Returns

[`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

#### Defined in

main.ts:171234

## Properties

### density?

> `optional` **density**: `number`

keyword density
calculated as a ratio of frequency to the total count of keywords with the set keyword_length on the web page or website

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`density`](../interfaces/IOnPageKeywordDensityItem.md#density)

#### Defined in

main.ts:171230

***

### frequency?

> `optional` **frequency**: `number`

keyword frequency
number of times the keyword appears on the website (or webpage if you specified a url)

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`frequency`](../interfaces/IOnPageKeywordDensityItem.md#frequency)

#### Defined in

main.ts:171227

***

### keyword?

> `optional` **keyword**: `string`

returned keyword

#### Implementation of

[`IOnPageKeywordDensityItem`](../interfaces/IOnPageKeywordDensityItem.md).[`keyword`](../interfaces/IOnPageKeywordDensityItem.md#keyword)

#### Defined in

main.ts:171224

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:171243

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:171262

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageKeywordDensityItem`](OnPageKeywordDensityItem.md)

#### Defined in

main.ts:171255
