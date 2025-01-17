[**Documentation**](../README.md)

***

[Documentation](../README.md) / SearchVolumeTrendInfo

# Class: SearchVolumeTrendInfo

Defined in: main.ts:92376

## Implements

- [`ISearchVolumeTrendInfo`](../interfaces/ISearchVolumeTrendInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SearchVolumeTrendInfo()

> **new SearchVolumeTrendInfo**(`data`?): [`SearchVolumeTrendInfo`](SearchVolumeTrendInfo.md)

Defined in: main.ts:92386

#### Parameters

##### data?

[`ISearchVolumeTrendInfo`](../interfaces/ISearchVolumeTrendInfo.md)

#### Returns

[`SearchVolumeTrendInfo`](SearchVolumeTrendInfo.md)

## Properties

### monthly?

> `optional` **monthly**: `number`

Defined in: main.ts:92378

search volume change in percent compared to the previous month

#### Implementation of

[`ISearchVolumeTrendInfo`](../interfaces/ISearchVolumeTrendInfo.md).[`monthly`](../interfaces/ISearchVolumeTrendInfo.md#monthly)

***

### quarterly?

> `optional` **quarterly**: `number`

Defined in: main.ts:92380

search volume change in percent compared to the previous quarter

#### Implementation of

[`ISearchVolumeTrendInfo`](../interfaces/ISearchVolumeTrendInfo.md).[`quarterly`](../interfaces/ISearchVolumeTrendInfo.md#quarterly)

***

### yearly?

> `optional` **yearly**: `number`

Defined in: main.ts:92382

search volume change in percent compared to the previous year

#### Implementation of

[`ISearchVolumeTrendInfo`](../interfaces/ISearchVolumeTrendInfo.md).[`yearly`](../interfaces/ISearchVolumeTrendInfo.md#yearly)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:92395

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:92414

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SearchVolumeTrendInfo`](SearchVolumeTrendInfo.md)

Defined in: main.ts:92407

#### Parameters

##### data

`any`

#### Returns

[`SearchVolumeTrendInfo`](SearchVolumeTrendInfo.md)
