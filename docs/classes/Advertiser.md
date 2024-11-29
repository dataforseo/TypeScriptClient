[**Documentation**](../README.md)

***

[Documentation](../README.md) / Advertiser

# Class: Advertiser

## Implements

- [`IAdvertiser`](../interfaces/IAdvertiser.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Advertiser()

> **new Advertiser**(`data`?): [`Advertiser`](Advertiser.md)

#### Parameters

##### data?

[`IAdvertiser`](../interfaces/IAdvertiser.md)

#### Returns

[`Advertiser`](Advertiser.md)

#### Defined in

main.ts:60910

## Properties

### advertiser\_id?

> `optional` **advertiser\_id**: `string`

unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`advertiser_id`](../interfaces/IAdvertiser.md#advertiser_id)

#### Defined in

main.ts:60897

***

### approx\_ads\_count?

> `optional` **approx\_ads\_count**: `number`

ads count
the approximate number of ads that are run by the advertiser account across all available Google Ads platforms

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`approx_ads_count`](../interfaces/IAdvertiser.md#approx_ads_count)

#### Defined in

main.ts:60906

***

### location?

> `optional` **location**: `string`

location of the advertiser account
country code associated with the advertiser account

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`location`](../interfaces/IAdvertiser.md#location)

#### Defined in

main.ts:60900

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`type`](../interfaces/IAdvertiser.md#type)

#### Defined in

main.ts:60894

***

### verified?

> `optional` **verified**: `boolean`

verified advertiser account
equals true if advertiser account is verified by Google Ads

#### Implementation of

[`IAdvertiser`](../interfaces/IAdvertiser.md).[`verified`](../interfaces/IAdvertiser.md#verified)

#### Defined in

main.ts:60903

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:60919

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:60940

***

### fromJS()

> `static` **fromJS**(`data`): [`Advertiser`](Advertiser.md)

#### Parameters

##### data

`any`

#### Returns

[`Advertiser`](Advertiser.md)

#### Defined in

main.ts:60933
