[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

# Class: DataforseoLabsGoogleHistoricalSerpsLiveResultInfo

Defined in: main.ts:106714

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo()

> **new DataforseoLabsGoogleHistoricalSerpsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

Defined in: main.ts:106734

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)[]

Defined in: main.ts:106730

additional items present in the element
if there are none, equals null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:106727

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:106719

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:106723

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:106721

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:106716

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:106725

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106743

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:106770

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)

Defined in: main.ts:106763

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveResultInfo`](DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.md)
