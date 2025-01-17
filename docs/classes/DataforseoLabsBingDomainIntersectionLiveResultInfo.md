[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainIntersectionLiveResultInfo

# Class: DataforseoLabsBingDomainIntersectionLiveResultInfo

Defined in: main.ts:116908

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainIntersectionLiveResultInfo()

> **new DataforseoLabsBingDomainIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

Defined in: main.ts:116930

#### Parameters

##### data?

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsDomainIntersectionLiveItem`](DataforseoLabsDomainIntersectionLiveItem.md)[]

Defined in: main.ts:116926

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:116924

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:116920

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:116918

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:116912

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#se_type)

***

### target1?

> `optional` **target1**: `string`

Defined in: main.ts:116914

target specified in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`target1`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target1)

***

### target2?

> `optional` **target2**: `string`

Defined in: main.ts:116916

target specified in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`target2`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target2)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:116922

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:116939

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:116967

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

Defined in: main.ts:116960

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)
