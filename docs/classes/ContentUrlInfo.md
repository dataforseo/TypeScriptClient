[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentUrlInfo

# Class: ContentUrlInfo

## Implements

- [`IContentUrlInfo`](../interfaces/IContentUrlInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentUrlInfo()

> **new ContentUrlInfo**(`data`?): [`ContentUrlInfo`](ContentUrlInfo.md)

#### Parameters

##### data?

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md)

#### Returns

[`ContentUrlInfo`](ContentUrlInfo.md)

#### Defined in

main.ts:172862

## Properties

### anchor\_text?

> `optional` **anchor\_text**: `string`

text of the URL’s anchor

#### Implementation of

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md).[`anchor_text`](../interfaces/IContentUrlInfo.md#anchor_text)

#### Defined in

main.ts:172858

***

### url?

> `optional` **url**: `string`

other URL found in the content element

#### Implementation of

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md).[`url`](../interfaces/IContentUrlInfo.md#url)

#### Defined in

main.ts:172856

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:172871

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:172889

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentUrlInfo`](ContentUrlInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ContentUrlInfo`](ContentUrlInfo.md)

#### Defined in

main.ts:172882
